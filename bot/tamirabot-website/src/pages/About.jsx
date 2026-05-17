import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function About() {
  return (
    <>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-[110px] pb-24 md:pt-[140px] md:pb-28 px-6 overflow-hidden" style={{ background: '#24125F' }}>
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: '#F04F54' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp()}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: '#F04F54' }}>
              About Tamirabot
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              Pioneering EV Charging<br />
              <span style={{ color: '#F04F54' }}>Innovation</span> Since Day One
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              From a bold vision to a trusted name in EV infrastructure — engineering the future of sustainable mobility from India to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#24125F' }}>
              Born from the Belief that India Deserves World-Class EV Infrastructure
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#7D7D8C' }}>
              Tamirabot was founded with a singular mission — to prove that precision EV charging components don't need to be imported. They can be engineered right here, with global standards baked into every micron.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#7D7D8C' }}>
              Today, our connectors power charging stations across the country, trusted by enterprises, OEMs, and government projects for unmatched reliability, safety, and performance.
            </p>
            <div className="flex items-center gap-6">
              {[
                { val: '2019', lbl: 'Founded' },
                { val: 'IIT-M', lbl: 'Incubated' },
                { val: 'Pan India', lbl: 'Operations' },
              ].map((s, i) => (
                <div key={s.lbl} className={`${i < 2 ? 'pr-6 border-r' : ''}`} style={{ borderColor: '#E5E7EB' }}>
                  <p className="text-xl font-bold" style={{ color: '#24125F' }}>{s.val}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: '#7D7D8C' }}>{s.lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border" style={{ borderColor: '#E5E7EB' }}>
              <img
                src="/images/type2-gun-ccs2.jpeg"
                alt="Tamirabot EV Connectors"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-lg border" style={{ borderColor: '#E5E7EB' }}>
              <p className="text-2xl font-bold" style={{ color: '#24125F' }}>5+</p>
              <p className="text-[11px] font-medium" style={{ color: '#7D7D8C' }}>Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ VISION & MISSION ═══ */}
      <section className="py-16 md:py-20 px-6" style={{ background: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#24125F' }}>
              Vision & Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeUp(0.1)} className="bg-white rounded-3xl p-10 border shadow-sm" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(36,18,95,0.08)' }}>
                <svg className="w-7 h-7" style={{ color: '#24125F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#24125F' }}>Our Vision</h3>
              <p className="text-base leading-relaxed" style={{ color: '#7D7D8C' }}>
                To become India's most trusted manufacturer of EV charging components — setting global benchmarks in quality, innovation, and sustainability while powering the nation's electric future.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="bg-white rounded-3xl p-10 border shadow-sm" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(240,79,84,0.08)' }}>
                <svg className="w-7 h-7" style={{ color: '#F04F54' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#24125F' }}>Our Mission</h3>
              <p className="text-base leading-relaxed" style={{ color: '#7D7D8C' }}>
                To engineer and deliver precision EV connectors that exceed international safety and performance standards — making reliable, high-quality charging infrastructure accessible to every corner of India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHY TAMIRABOT ═══ */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0.1)} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg border" style={{ borderColor: '#E5E7EB' }}>
                <img
                  src="/images/type6-connector.png"
                  alt="Tamirabot Engineering"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
                Why Tamirabot
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8" style={{ color: '#24125F' }}>
                Engineering Excellence at Every Level
              </h2>

              <div className="space-y-6">
                {[
                  { title: 'R&D Driven Innovation', desc: 'In-house research lab with IIT Madras collaboration, pushing boundaries of EV connector technology.' },
                  { title: 'ISO 9001 Certified Quality', desc: 'Every product passes through 100% quality inspection with zero-defect manufacturing philosophy.' },
                  { title: 'Made in India, Built for the World', desc: 'Proudly designed and manufactured in Chennai for global markets and international standards.' },
                  { title: 'End-to-End Engineering', desc: 'From concept design to mass production — complete in-house capability with full traceability.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5" style={{ background: 'rgba(240,79,84,0.08)' }}>
                      <span className="text-sm font-bold" style={{ color: '#F04F54' }}>0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: '#24125F' }}>{item.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#7D7D8C' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ JOURNEY TIMELINE ═══ */}
      <section className="py-16 md:py-20 px-6" style={{ background: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#24125F' }}>
              Milestones That Define Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2019', title: 'Founded', desc: 'Tamirabot established with a vision to revolutionize EV charging in India.' },
              { year: '2020', title: 'IIT Madras Incubation', desc: 'Selected for incubation at IIT Madras Research Park.' },
              { year: '2022', title: 'First Product Launch', desc: 'Launched Type 2 AC connectors meeting IEC 62196 standards.' },
              { year: '2024', title: 'Scale & Growth', desc: 'Expanded to 50+ enterprise clients with pan-India operations.' },
            ].map((m, i) => (
              <motion.div
                key={m.year}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-7 border shadow-sm relative overflow-hidden"
                style={{ borderColor: '#E5E7EB' }}
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: i === 3 ? '#F04F54' : '#24125F', opacity: i === 3 ? 1 : 0.15 }} />
                <p className="text-3xl font-bold mb-2" style={{ color: '#24125F' }}>{m.year}</p>
                <h4 className="font-bold text-sm mb-2" style={{ color: '#24125F' }}>{m.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#7D7D8C' }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-16 px-6" style={{ background: '#24125F' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: '500+', lbl: 'Products Delivered' },
            { val: '50+', lbl: 'Enterprise Clients' },
            { val: '99.9%', lbl: 'Quality Assurance' },
            { val: '6+', lbl: 'Certifications' },
          ].map((s, i) => (
            <motion.div key={s.lbl} {...fadeUp(i * 0.08)} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{s.val}</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">{s.lbl}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
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
              Let's Collaborate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/60 max-w-md mx-auto mb-9 text-sm leading-relaxed relative z-10">
              Join the growing network of enterprises trusting Tamirabot for world-class EV charging infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm"
                style={{ background: '#F04F54' }}
              >
                Get in Touch
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
