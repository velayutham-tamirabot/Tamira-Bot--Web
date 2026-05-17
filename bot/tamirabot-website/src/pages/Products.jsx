import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function Products() {
  const [featuredIdx, setFeaturedIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setFeaturedIdx((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  const featured = products[featuredIdx]

  return (
    <>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-[110px] pb-24 md:pt-[140px] md:pb-28 px-6 overflow-hidden" style={{ background: '#24125F' }}>
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: '#F04F54' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp()}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: '#F04F54' }}>
              Our Products
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              EV Charging<br />
              <span style={{ color: '#F04F54' }}>Solutions</span> Built to Last
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Precision-engineered connectors and modules that exceed international standards for safety, performance, and durability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCT ═══ */}
      <section className="py-16 md:py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0.1)} className="relative">
            <div className="rounded-3xl overflow-hidden bg-white border shadow-lg relative h-[450px]" style={{ borderColor: '#E5E7EB' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={featured.image}
                  src={featured.image}
                  alt={`Featured - ${featured.name}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
            {/* Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-md z-10" style={{ background: '#F04F54' }}>
              Featured Product
            </div>
            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFeaturedIdx(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === featuredIdx ? 'w-6 h-2.5 bg-[#F04F54]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Show featured product ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
                  {featured.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#24125F' }}>
                  {featured.name}
                </h2>
                <p className="text-base leading-relaxed mb-8 min-h-[72px]" style={{ color: '#7D7D8C' }}>
                  {featured.desc}
                </p>

                {/* Key specs */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featured.gridSpecs?.slice(0, 4).map((s) => (
                    <div key={s.label} className="bg-white rounded-xl p-4 border" style={{ borderColor: '#E5E7EB', background: '#F7F7F7' }}>
                      <p className="text-lg font-bold" style={{ color: '#24125F' }}>{s.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: '#7D7D8C' }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/product/${featured.id}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm"
                    style={{ background: '#F04F54' }}
                  >
                    View Full Datasheet
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:bg-gray-50"
                    style={{ borderColor: '#24125F', color: '#24125F' }}
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══ ALL PRODUCTS GRID ═══ */}
      <section className="py-16 md:py-20 px-6" style={{ background: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
              Full Range
            </span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#24125F' }}>
              Complete Product Portfolio
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed" style={{ color: '#7D7D8C' }}>
              From AC home charging to ultra-fast DC stations — every connector crafted to the highest standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                {...fadeUp(i * 0.08)}
                className="bg-white rounded-3xl border overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
                style={{ borderColor: '#E5E7EB' }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden shrink-0 bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: '#F04F54' }}>
                      {product.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white" style={{ background: '#24125F' }}>
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-4 leading-snug" style={{ color: '#24125F' }}>
                    {product.name}
                  </h3>
                  <div className="flex flex-col gap-2 mb-5 flex-1">
                    {product.gridSpecs?.slice(0, 3).map(spec => (
                      <div key={spec.label} className="flex justify-between items-center text-xs pb-2 border-b border-[#E5E7EB] last:border-0">
                        <span className="text-[#7D7D8C] font-medium">{spec.label}</span>
                        <span className="text-[#24125F] font-bold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border hover:bg-[#24125F] hover:text-white hover:border-[#24125F]"
                    style={{ color: '#24125F', borderColor: '#24125F', background: 'transparent' }}
                  >
                    View Details
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Bottom hover bar */}
                <div className="h-1 w-0 group-hover:w-full transition-all duration-400" style={{ background: '#F04F54' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CUSTOM SOLUTIONS CTA ═══ */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp()}
            className="relative rounded-3xl overflow-hidden px-10 py-16 md:px-20 md:py-20 text-center"
            style={{ background: '#24125F' }}
          >
            <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10" style={{ background: '#F04F54' }} />
            <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-10" style={{ background: '#F04F54' }} />

            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1.5 rounded-full border" style={{ color: '#F04F54', borderColor: 'rgba(240,79,84,0.3)', background: 'rgba(240,79,84,0.1)' }}>
              Custom Engineering
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Need a Custom Solution?
            </h2>
            <p className="text-white/60 max-w-md mx-auto mb-9 text-sm leading-relaxed relative z-10">
              We offer bespoke engineering for OEMs and enterprises. From custom pin configurations to specialized housings — let's build exactly what you need.
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm"
                style={{ background: '#F04F54' }}
              >
                Request Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
