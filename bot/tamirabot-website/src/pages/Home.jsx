import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products as productData } from '../data/products'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

const heroSlides = [
  { src: '/images/type2-connector.png', alt: 'Type 2 Vehicle Connector', label: 'Type 2 Connector' },
  { src: '/images/type2-gun-ccs2.jpeg', alt: 'CCS2 Fast Charging Handle', label: 'CCS2 Fast Charging' },
  { src: '/images/type6-connector.png', alt: 'Type 6 Vehicle Connector', label: 'Type 6 Connector' },
]

/* ═══════════════════════════════════════════════════════════════════ */
/*  HERO                                                              */
/* ═══════════════════════════════════════════════════════════════════ */
function Hero() {
  const words = ['Precision', 'Innovation', 'Excellence']
  const [wordIdx, setWordIdx] = useState(0)
  const [slideIdx, setSlideIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx((p) => (p + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [words.length])

  useEffect(() => {
    const t = setInterval(() => setSlideIdx((p) => (p + 1) % heroSlides.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#24125F] pt-[80px]">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: '#F04F54' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#F04F54] animate-pulse shrink-0" />
              India's Leading EV Connector Manufacturer
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Crafting EV Connectors with{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.38 }}
                  className="inline-block text-[#F04F54]"
                >
                  {words[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="text-base md:text-lg text-white/55 leading-relaxed mb-8 max-w-[480px]">
              IEC 62196 certified. ISO 9001 quality. Engineered at IIT Madras Research Park for the world's EV infrastructure.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-[#F04F54] hover:bg-[#d9434a] active:scale-95 transition-all shadow-lg shadow-[#F04F54]/25">
                Explore Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white border-2 border-white/25 hover:bg-white/10 active:scale-95 transition-all">
                Get a Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {[
                { val: '500+', lbl: 'Connectors Shipped' },
                { val: '50+', lbl: 'B2B Partners' },
                { val: '99.9%', lbl: 'Quality Rate' },
                { val: 'IEC', lbl: '62196 Certified' },
              ].map((s) => (
                <div key={s.lbl}>
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">{s.lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image Carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main image frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5" style={{ height: '520px' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={slideIdx}
                  src={heroSlides[slideIdx].src}
                  alt={heroSlides[slideIdx].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#24125F]/60 via-transparent to-transparent" />

              {/* Slide label */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`lbl-${slideIdx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white whitespace-nowrap">
                    {heroSlides[slideIdx].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlideIdx(idx)}
                  aria-label={`Show slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 ${idx === slideIdx ? 'bg-[#F04F54] w-7 h-2.5' : 'bg-white/30 w-2.5 h-2.5 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            {/* Floating badge – top left */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(240,79,84,0.12)' }}>
                <span className="text-[#F04F54] font-bold text-xs">IEC</span>
              </div>
              <div>
                <p className="text-[11px] text-[#7D7D8C] leading-none mb-0.5">Certified Standard</p>
                <p className="text-sm font-bold text-[#24125F] leading-none">62196 Compliant</p>
              </div>
            </motion.div>

            {/* Floating badge – bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(36,18,95,0.08)' }}>
                <span className="text-[#24125F] font-bold text-xs">99%</span>
              </div>
              <div>
                <p className="text-[11px] text-[#7D7D8C] leading-none mb-0.5">Quality Rating</p>
                <p className="text-sm font-bold text-[#24125F] leading-none">Zero Defect</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  PRODUCT SHOWCASE                                                   */
/* ═══════════════════════════════════════════════════════════════════ */
function ProductShowcase() {
  const showcaseProducts = productData.slice(0, 4)

  return (
    <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F04F54] mb-4 block">Product Range</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.15] text-[#0F172A] tracking-tight max-w-lg">
              Engineering the Future of Charging
            </h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#0F172A] bg-white border border-gray-200 hover:border-[#F04F54] hover:text-[#F04F54] shadow-sm hover:shadow-md transition-all shrink-0">
            View Full Catalog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

        {/* ═══ PRODUCT GRID ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseProducts.map((p, i) => (
            <motion.article
              key={p.id}
              {...fadeUp(i * 0.1)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-50 overflow-hidden shrink-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F04F54]">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white bg-[#24125F]">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#24125F] mb-4 leading-snug">
                  {p.name}
                </h3>

                <Link
                  to={`/product/${p.id}`}
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs border-2 border-[#24125F] text-[#24125F] hover:bg-[#24125F] hover:text-white transition-all duration-200"
                >
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  WHY TAMIRABOT                                                     */
/* ═══════════════════════════════════════════════════════════════════ */
const IconGrad = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
)
const IconShield = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)
const IconGlobe = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)
const IconBolt = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
)
const IconCycle = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.992 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
)

function WhyUs() {

  return (
    <section className="py-16 md:py-20 px-6 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left intro */}
          <motion.div {...fadeUp()} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F04F54]">Why Tamirabot</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-[#24125F] leading-tight">What Sets Us Apart</h2>
            <p className="text-sm leading-relaxed text-[#7D7D8C] mt-4">Every connector we ship carries the weight of precision engineering, rigorous testing, and a relentless pursuit of quality.</p>
            <div className="hidden lg:block mt-8 w-12 h-1 rounded-full bg-[#F04F54]" />
          </motion.div>

          {/* Right cards */}
          <div className="lg:col-span-8 space-y-4">
            {[
              { title: 'IIT Madras Incubated', desc: 'Born from world-class research infrastructure with access to cutting-edge labs and mentorship.', Icon: IconGrad, accent: '#24125F' },
              { title: 'Zero-Defect Manufacturing', desc: '100% quality inspection on every unit. ISO 9001 certified processes with full traceability.', Icon: IconShield, accent: '#F04F54' },
              { title: 'Global Standards', desc: 'IEC 62196, IP67, BIS compliant. Every connector meets or exceeds international benchmarks.', Icon: IconGlobe, accent: '#24125F' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E7EB] flex items-start gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.accent}0D`, color: item.accent }}>
                  <item.Icon />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#24125F] mb-1.5">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7D7D8C]">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div {...fadeUp(0.3)} className="bg-[#24125F] rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3 text-white">
                  <IconBolt />
                  <p className="text-2xl font-bold">350 kW</p>
                </div>
                <h3 className="text-sm font-semibold text-white/90 mb-1">Peak Power</h3>
                <p className="text-xs leading-relaxed text-white/50">Ultra-fast charging with advanced thermal management and liquid cooling.</p>
              </motion.div>

              <motion.div {...fadeUp(0.38)} className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E7EB]">
                <div className="flex items-center gap-3 mb-3 text-[#24125F]">
                  <IconCycle />
                  <p className="text-2xl font-bold">10,000+</p>
                </div>
                <h3 className="text-sm font-semibold text-[#24125F] mb-1">Mating Cycles</h3>
                <p className="text-xs leading-relaxed text-[#7D7D8C]">Tested beyond industry requirements. Built to last decades of daily use.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MISSION                                                           */
/* ═══════════════════════════════════════════════════════════════════ */
function Mission() {
  const cards = [
    {
      num: '1.',
      title: 'Our Startup Journey: A Proud Participant',
      desc: 'Recognized under the esteemed Start-up India initiative, we stand proud as contributors to entrepreneurship, job creation, and economic growth in our nation. Aligned with the Make in India policy, we prioritize domestic manufacturing, adding strength to the vision of a self-reliant and globally competitive Indian manufacturing sector.'
    },
    {
      num: '2.',
      title: 'Expert Engineering for Superior Connectors: IEC62196 Compliant',
      desc: 'At Tamirabot, our team of industry experts, armed with advanced engineering capabilities, passionately crafts superior electric vehicle connectors. Engineered to meet and surpass international standards, such as IEC62196, our connectors guarantee seamless compatibility, reliable performance, and optimal safety.'
    },
    {
      num: '3.',
      title: 'Rigorous Testing and Innovation: A Commitment to Excellence',
      desc: 'Focused on performance, reliability, and safety, our connectors undergo stringent testing and quality assurance processes. Leveraging cutting-edge technologies and proudly manufactured in India, these connectors ensure not just optimal charging experiences but also exhibit long-lasting durability.'
    },
    {
      num: '4.',
      title: 'Customer-Centric Approach: Tailored Solutions for Every Need',
      desc: 'Understanding the unique requirements of electric vehicle manufacturers, charging station providers, and end-users is our forte. Our customer-centric approach propels us to deliver personalized support, exceptional service, and tailor-made solutions that adapt to the evolving demands of the electric vehicle ecosystem.'
    },
    {
      num: '5.',
      title: 'More Than Connectors: Catalysts of Change',
      desc: 'Tamirabot transcends the role of a mere connector manufacturer. We are dynamic catalysts, propelling the widespread adoption of electric vehicles and hastening the transition towards a sustainable transportation future. Join us on this electrifying journey as we collectively shape the future of sustainable mobility right here in India.'
    },
    {
      num: '6.',
      title: 'The Power of Innovation: Supported by Start-up India and Make in India',
      desc: "Experience the dynamism of innovation with Tamirabot. Together, let's steer towards a greener and brighter future, supported by the pillars of Start-up India and Make in India."
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6 bg-[#24125F] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FFFFFF 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp()} className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Beyond Connectors, Tamirabot Connect EVs</h2>
          <p className="text-base md:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            We are rewriting the way electric vehicle chargers are made. Our unwavering commitment to innovation, quality, and sustainability propels us towards a future where electric mobility becomes the standard, contributing to a cleaner and greener world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              {...fadeUp(i * 0.1)}
              className="bg-[#F04F54] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl"
            >
              <span className="text-white/70 font-bold text-lg block mb-3">{c.num}</span>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{c.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  PROCESS                                                           */
/* ═══════════════════════════════════════════════════════════════════ */
function Process() {
  const steps = [
    { step: '01', title: 'Consultation', desc: 'Understand your charging infrastructure requirements and specifications.' },
    { step: '02', title: 'Engineering', desc: 'Custom design and prototyping with precision CNC manufacturing.' },
    { step: '03', title: 'Testing', desc: 'Rigorous IEC compliance testing, thermal analysis, and cycle testing.' },
    { step: '04', title: 'Delivery', desc: 'Production, quality inspection, and on-time delivery to your facility.' },
  ]

  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F04F54]">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-[#24125F]">From Concept to Connector</h2>
          <p className="mt-4 max-w-lg mx-auto text-[#7D7D8C]">A streamlined 4-step process that delivers world-class EV connectors on time, every time.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
          {steps.map((s, i) => (
            <motion.div key={s.step} {...fadeUp(i * 0.1)} className="relative flex flex-col items-center text-center px-2">
              {/* Connector line — only visible on md+ between circles */}
              {i < 3 && (
                <div
                  className="hidden md:block absolute h-[2px] bg-[#E5E7EB] top-7"
                  style={{ left: 'calc(50% + 30px)', right: 'calc(-50% + 30px)' }}
                  aria-hidden="true"
                />
              )}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0"
                style={{ background: i === steps.length - 1 ? '#F04F54' : '#24125F' }}
              >
                {s.step}
              </div>
              <h4 className="font-bold mt-5 mb-2 text-[#24125F]">{s.title}</h4>
              <p className="text-sm leading-relaxed text-[#7D7D8C] max-w-[200px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  CERTIFICATIONS                                                    */
/* ═══════════════════════════════════════════════════════════════════ */
function Certifications() {
  return (
    <section className="py-14 md:py-16 px-6 bg-[#24125F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Trusted & Certified</h3>
            <p className="text-sm text-white/50 mt-1">Meeting global standards at every level</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['IEC 62196', 'ISO 9001', 'Startup India', 'MSME', 'IIT Madras', 'BIS'].map((c) => (
              <div key={c} className="px-4 py-2 rounded-full border border-white/20 bg-white/5">
                <span className="text-sm font-semibold text-white/80 whitespace-nowrap">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  TESTIMONIALS                                                      */
/* ═══════════════════════════════════════════════════════════════════ */
function Testimonials() {
  const testimonials = [
    { name: 'Rajesh Kumar', role: 'CTO, EV Solutions Ltd', text: 'Tamirabot connectors have exceeded our expectations in quality and durability. Their engineering precision is genuinely unmatched in the Indian market.' },
    { name: 'Priya Sharma', role: 'Director, GreenCharge India', text: 'Reliable, certified, and built to last. Tamirabot is our go-to partner for all EV charging infrastructure projects across India.' },
    { name: 'Arun Mehta', role: 'VP Engineering, ChargeGrid', text: 'The quality of their CCS2 connectors is on par with European manufacturers. Exceptional value and outstanding technical support.' },
  ]

  return (
    <section className="py-16 md:py-20 px-6 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-12 md:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F04F54]">Client Voices</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-[#24125F]">Trusted by Industry Leaders</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={t.name} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl p-7 border border-[#E5E7EB] relative overflow-hidden flex flex-col">
              <span className="absolute top-4 right-6 text-6xl font-serif text-[#24125F] opacity-5 select-none" aria-hidden="true">"</span>
              <p className="text-sm leading-relaxed text-[#7D7D8C] mb-6 flex-1 relative z-10">{t.text}</p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-[#24125F]">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#24125F]">{t.name}</p>
                  <p className="text-xs text-[#7D7D8C]">{t.role}</p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  CTA                                                               */
/* ═══════════════════════════════════════════════════════════════════ */
function CTA() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="relative rounded-3xl overflow-hidden bg-[#24125F]">
          {/* Background */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <img src="/images/type6-connector.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="pointer-events-none absolute -top-32 -right-32 w-72 md:w-96 h-72 md:h-96 rounded-full bg-[#F04F54] opacity-15" aria-hidden="true" />

          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-20 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-lg text-center lg:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F04F54] mb-4">Ready to Start?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Let's Power India's EV Revolution Together
              </h2>
              <p className="text-white/50 leading-relaxed">
                Whether you need 10 connectors or 10,000 — our engineering team is ready to deliver world-class quality on your timeline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white bg-[#F04F54] hover:bg-[#d9434a] active:scale-95 transition-all shadow-lg">
                Get a Quote Today
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white border border-white/20 hover:bg-white/10 active:scale-95 transition-all">
                Learn About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  PAGE EXPORT                                                       */
/* ═══════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Mission />
      <Process />
      <Certifications />
      <ProductShowcase />
      <Testimonials />
      <CTA />
    </>
  )
}
