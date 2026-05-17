const fs = require('fs');

const content = `import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

const products = [
  {
    id: 'type6-gun',
    name: 'TYPE 6 Vehicle Connector',
    category: 'DC Fast Charging',
    desc: 'Designed for DC fast charging of electric and hybrid vehicles, complying with IEC 62196-6. Supports up to 120V DC and 100A.',
    image: '/images/type6-connector.png',
    badge: 'New Standard',
    featuredSpecs: [{val: '100A', lbl: 'Max DC Current'}, {val: '120V', lbl: 'Max Voltage'}, {val: 'IP55', lbl: 'Protection'}, {val: 'IEC 62196-6', lbl: 'Certified'}],
    specs: ['Up to 12KW', 'IEC 62196-6', 'IP55 Rated', '12,500+ cycles'],
    intro: 'The Type 6 vehicle connector is designed for DC fast charging of electric and hybrid vehicles, complying with IEC 62196-6 and IS17017-2-6. It supports up to 120V DC and 100A rated current with natural air flow-based cooling.',
    features: [
      'Uniform, space-saving dimensions for easy installation',
      'Developed per IATF 16949 automotive standard and ISO 9001',
      'Protected against dirt and water (IP55)',
      'Supports up to 100A for faster charging',
      'Copper alloy contact pins with uniform thermal distribution',
      'Compliant with IS17017-2-6 and IEC 62196-6',
      'Ergonomic, comfortable grip',
      'Patent technology for higher charging efficiency'
    ],
    commercial: [
      { k: 'GTIN', v: '91042502' },
      { k: 'Warranty', v: '48 Months' },
      { k: 'Country of Origin', v: 'India' },
      { k: 'Weight (w/ packing)', v: '450 g' },
      { k: 'Weight (w/o packing)', v: '360 g' },
    ],
    models: [
      { no: 'T91-T6VC1-25ADC', current: '25A', cable: '2×4mm²+5×0.75mm²' },
      { no: 'T91-T6VC2-60ADC', current: '60A', cable: '2×12.5mm²+5×0.75mm²' },
      { no: 'T91-T6VC3-100ADC', current: '100A', cable: '2×25mm²+5×0.75mm²' },
    ],
    electrical: [
      { k: 'Charging Voltage', v: '120V DC' },
      { k: 'Charging Current', v: '25A / 60A / 100A DC' },
      { k: 'Charging Power', v: '7.2KW – 12KW max' },
      { k: 'Insulation Resistance', v: '>500MΩ' },
      { k: 'Contact Resistance', v: '0.5mΩ max' },
      { k: 'Flammability Rating', v: 'UL94V0' },
      { k: 'Signal Transmission', v: 'PWM + Powerline' },
    ],
    mechanical: [
      { k: 'Dimensions (W×H×D)', v: '58.22 × 110.71 × 256.66 mm' },
      { k: 'Insertion Cycles', v: '>12,500' },
      { k: 'Insertion Force', v: '<100N' },
      { k: 'IP Rating', v: 'IP55' },
      { k: 'Operating Temp', v: '-30°C to +50°C' },
    ],
    accessories: ['Protective Cover (GTIN: 91042507)', 'Docker (GTIN: 91042510)']
  },
  {
    id: 'type6-inlet',
    name: 'TYPE 6 Vehicle Inlet',
    category: 'DC Fast Charging',
    desc: 'Vehicle Inlet enabling DC fast charging compliant with IEC 62196-6. Rated up to 120V DC and 100A with natural air flow cooling.',
    image: '/images/type6-connector.png',
    badge: 'Inlet',
    featuredSpecs: [{val: '100A', lbl: 'Max DC Current'}, {val: '120V', lbl: 'Max Voltage'}, {val: 'IP54', lbl: 'Protection'}, {val: 'IEC 62196-6', lbl: 'Certified'}],
    specs: ['Up to 12KW', 'IEC 62196-6', 'IP54 Rated', '12,500+ cycles'],
    intro: 'The Type 6 Vehicle Inlet enables DC fast charging compliant with IEC 62196-6 and IS17017-2-6. Rated up to 120V DC and 100A with natural air flow cooling.',
    features: [
      'Space-saving dimensions; IATF 16949 and ISO 9001 compliant',
      'IP54 protection (IP64 with protective cover)',
      'Supports up to 100A',
      'Copper alloy contact pins for uniform thermal distribution',
      'Seamless integration into EV charging systems',
      'Patent technology for higher charging efficiency'
    ],
    commercial: [
      { k: 'GTIN', v: '91042501' },
      { k: 'Warranty', v: '48 Months' },
      { k: 'Country of Origin', v: 'India' },
      { k: 'Weight (w/ packing)', v: '180 g' },
      { k: 'Weight (w/o packing)', v: '140 g' },
    ],
    models: [
      { no: 'T91-T6VI1-60ADC', current: '60A', cable: '2×12.5mm²+5×0.75mm²' },
      { no: 'T91-T6VI2-100ADC', current: '100A', cable: '2×25mm²+5×0.75mm²' },
    ],
    electrical: [
      { k: 'Charging Voltage', v: '120V DC' },
      { k: 'Charging Current', v: '60A / 100A DC' },
      { k: 'Charging Power', v: '7.2KW / 12KW Boost Mode' },
      { k: 'Insulation Resistance', v: '>500MΩ' },
      { k: 'Contact Resistance', v: '0.5mΩ max' },
      { k: 'Flammability Rating', v: 'UL94V0' },
    ],
    mechanical: [
      { k: 'Dimensions', v: '70 × 70 × 62.60 mm' },
      { k: 'Insertion Cycles', v: '>12,500' },
      { k: 'IP Rating', v: 'IP54 (IP64 w/ cover)' },
      { k: 'Operating Temp', v: '-30°C to +50°C' },
      { k: 'Mounting', v: 'Front & rear, 0–90° incl.' },
    ],
    accessories: ['Protective Cover (GTIN: 91042506)']
  },
  {
    id: 'ccs2-gun',
    name: 'CCS2 Vehicle Connector',
    category: 'Ultra-Fast DC Charging',
    desc: 'Designed for DC fast charging per IEC 62196-3. Supports up to 1000V DC and 250A rated current.',
    image: '/images/ccs2-connector.jpeg',
    badge: 'Ultra Fast',
    featuredSpecs: [{val: '250A', lbl: 'Max DC Current'}, {val: '1000V', lbl: 'Max Voltage'}, {val: 'IP55', lbl: 'Protection'}, {val: 'IEC 62196-3', lbl: 'Certified'}],
    specs: ['Up to 12KW max', 'IEC 62196-3', 'IP55 Rated', '12,500+ cycles'],
    intro: 'The CCS2 vehicle connector is designed for DC fast charging per IEC 62196-3. Supports up to 1000V DC and 250A rated current with natural air flow cooling.',
    features: [
      'IATF 16949 and ISO 9001 compliant',
      'IP55 protection',
      'Supports up to 250A for ultra-fast charging',
      'Copper alloy contact pins for optimal conductivity',
      'Ergonomic grip design',
      'Patent technology for higher charging efficiency'
    ],
    commercial: [
      { k: 'GTIN', v: '91042504' },
      { k: 'Warranty', v: '48 Months' },
      { k: 'Country of Origin', v: 'India' },
      { k: 'Weight (w/ packing)', v: '800 g' },
      { k: 'Weight (w/o packing)', v: '740 g' },
    ],
    models: [
      { no: 'T91-CCS2VC1-80ADC', current: '80A', cable: '2×16mm²+1×16mm²+...'},
      { no: 'T91-CCS2VC2-125ADC', current: '125A', cable: '2×35mm²+1×25mm²+...' },
      { no: 'T91-CCS2VC5-250ADC', current: '250A', cable: '2×70mm²+1×35mm²+...'}
    ],
    electrical: [
      { k: 'Charging Voltage', v: '1000V DC' },
      { k: 'Charging Current', v: '80A/125A/150A/200A/250A DC' },
      { k: 'Insulation Resistance', v: '>500MΩ' },
      { k: 'Temperature Sensor', v: 'PT 1000' },
    ],
    mechanical: [
      { k: 'Dimensions', v: '63 × 145.96 × 246 mm' },
      { k: 'Insertion Cycles', v: '>12,500' },
      { k: 'IP Rating', v: 'IP55' },
    ],
    accessories: []
  },
  {
    id: 'type2-gun',
    name: 'TYPE 2 Vehicle Connector',
    category: 'AC Charging',
    desc: 'Designed for AC charging per IEC 62196-2. Supports 250V single-phase to 480V three-phase AC and up to 32A.',
    image: '/images/type2-connector.png',
    badge: 'AC Standard',
    featuredSpecs: [{val: '32A', lbl: 'Max AC Current'}, {val: '480V', lbl: 'Max Voltage'}, {val: 'IP55', lbl: 'Protection'}, {val: 'IEC 62196-2', lbl: 'Certified'}],
    specs: ['Up to 7.2kW', 'IEC 62196-2', 'IP55 Rated', '12,500+ cycles'],
    intro: 'The Type 2 vehicle connector is designed for AC charging per IEC 62196-2. Supports 250V single-phase to 480V three-phase AC and up to 32A rated current.',
    features: [
      'IATF 16949 and ISO 9001 compliant',
      'IP55 protection',
      'Weather-resistant thermoplastic outer casing',
      'High-conductivity copper alloy conductors',
      'Ergonomic grip design',
      'Patent technology for higher charging efficiency'
    ],
    commercial: [
      { k: 'GTIN', v: '91042505' },
      { k: 'Warranty', v: '48 Months' },
      { k: 'Country of Origin', v: 'India' },
      { k: 'Weight (w/ packing)', v: '370 g' },
      { k: 'Weight (w/o packing)', v: '330 g' },
    ],
    models: [
      { no: 'T91-T2VC1-16AAC-SP', current: '16A (1-Phase)', cable: '3×2.5mm²+2×0.75mm²' },
      { no: 'T91-T2VC4-32AAC-TP', current: '32A (3-Phase)', cable: '5×6mm²+2×0.75mm²' },
    ],
    electrical: [
      { k: 'Charging Voltage', v: '250V–480V AC' },
      { k: 'Charging Current', v: '16A / 32A AC' },
      { k: 'Charging Power', v: 'Up to 3.7kW / 7.2kW' },
      { k: 'Insulation Resistance', v: '>500MΩ' },
    ],
    mechanical: [
      { k: 'Dimensions', v: '71.3 × 112.62 × 204.01 mm' },
      { k: 'Insertion Cycles', v: '>12,500' },
      { k: 'IP Rating', v: 'IP55' },
    ],
    accessories: ['Protective Cover (GTIN: 91042509)', 'Docker (GTIN: 91042512)']
  },
  {
    id: 'ccs2-inlet',
    name: 'CCS2 Vehicle Inlet',
    category: 'Ultra-Fast DC + AC Charging',
    desc: 'Supports both AC and DC fast charging per IEC 62196-3. Rated up to 1000V DC / 250A DC and 480V AC / 32A AC.',
    image: '/images/type2-gun-ccs2.jpeg',
    badge: 'Combo',
    featuredSpecs: [{val: '250A DC', lbl: 'Max DC Current'}, {val: '32A AC', lbl: 'Max AC Current'}, {val: 'IP54', lbl: 'Protection'}, {val: 'IEC 62196-3', lbl: 'Certified'}],
    specs: ['Up to 12KW DC', 'IEC 62196-3', 'IP54 Rated', '12,500+ cycles'],
    intro: 'The CCS2 Vehicle Inlet supports both AC and DC fast charging per IEC 62196-3. Rated up to 1000V DC / 250A DC and 480V AC / 32A AC.',
    features: [
      'IATF 16949 and ISO 9001 compliant',
      'IP54 protection',
      'Supports up to 250A DC enabling ultra-fast charging',
      'Copper alloy contact pins for uniform thermal distribution',
      'Electronic locking actuator (12V) with mechanical emergency release',
      'Patent technology for higher charging efficiency'
    ],
    commercial: [
      { k: 'GTIN', v: '91042503' },
      { k: 'Warranty', v: '48 Months' },
      { k: 'Country of Origin', v: 'India' },
      { k: 'Weight (w/ packing)', v: '620 g' },
      { k: 'Weight (w/o packing)', v: '520 g' },
    ],
    models: [
      { no: 'T91-CCS2VI1', current: '80A DC / 32A AC', cable: '2×16mm²...' },
      { no: 'T91-CCS2VI5', current: '250A DC / 32A AC', cable: '2×70mm²...' },
    ],
    electrical: [
      { k: 'Charging Voltage', v: '1000V DC / 480V AC' },
      { k: 'Charging Current', v: 'Up to 250A DC / 32A AC' },
      { k: 'Temperature Sensor', v: 'PT 1000' },
    ],
    mechanical: [
      { k: 'Dimensions', v: '98 × 130 × 92.5 mm' },
      { k: 'Insertion Cycles', v: '>12,500' },
      { k: 'IP Rating', v: 'IP54' },
    ],
    accessories: ['Protective Cover (GTIN: 91042508)']
  }
]

export default function Products() {
  const [featuredIdx, setFeaturedIdx] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const t = setInterval(() => {
      setFeaturedIdx((prev) => (prev + 1) % products.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [selectedProduct])

  const featured = products[featuredIdx]

  return (
    <>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-6 overflow-hidden" style={{ background: '#24125F' }}>
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
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0.1)} className="relative">
            <div className="rounded-3xl overflow-hidden bg-white border shadow-lg relative h-[450px]" style={{ borderColor: '#E5E7EB' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={featured.image}
                  src={featured.image}
                  alt={\`Featured - \${featured.name}\`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
            {/* Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-md" style={{ background: '#F04F54' }}>
              Featured Product
            </div>
            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFeaturedIdx(idx)}
                  className={\`rounded-full transition-all duration-300 \${
                    idx === featuredIdx ? 'w-6 h-2.5 bg-[#F04F54]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }\`}
                  aria-label={\`Show featured product \${idx + 1}\`}
                />
              ))}
            </div>
          </motion.div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.name}
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
                  {featured.featuredSpecs.map((s) => (
                    <div key={s.lbl} className="bg-white rounded-xl p-4 border" style={{ borderColor: '#E5E7EB', background: '#F7F7F7' }}>
                      <p className="text-xl font-bold" style={{ color: '#24125F' }}>{s.val}</p>
                      <p className="text-xs font-medium mt-0.5" style={{ color: '#7D7D8C' }}>{s.lbl}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProduct(featured)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#24125F] border border-[#24125F] hover:bg-[#24125F] hover:text-white active:scale-95 transition-all duration-200"
                  >
                    View Specifications
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm"
                    style={{ background: '#F04F54' }}
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
      <section className="py-24 md:py-32 px-6" style={{ background: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
              Full Range
            </span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#24125F' }}>
              Complete Product Portfolio
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed" style={{ color: '#7D7D8C' }}>
              Explore our full range of AC and DC EV charging connectors engineered for reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                {...fadeUp(i * 0.08)}
                className="bg-white rounded-3xl border overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col"
                style={{ borderColor: '#E5E7EB' }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
                    style={{ background: '#F04F54' }}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: '#F04F54' }}>
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2" style={{ color: '#24125F' }}>
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#7D7D8C' }}>
                    {product.desc}
                  </p>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#24125F] bg-[#F7F7F7] hover:bg-[#F04F54] hover:text-white transition-all duration-300"
                  >
                    View Full Datasheet
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>

                {/* Bottom hover bar */}
                <div className="h-1 w-0 group-hover:w-full transition-all duration-400" style={{ background: '#F04F54' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNICAL SPECS OVERVIEW ═══ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#F04F54' }}>
              Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#24125F' }}>
              Built to Global Standards
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '250A+', lbl: 'Max DC Power', icon: '⚡' },
              { val: 'IP55', lbl: 'Ingress Protection', icon: '🛡️' },
              { val: '-30°C to 50°C', lbl: 'Operating Range', icon: '🌡️' },
              { val: '12,500+', lbl: 'Mating Cycles', icon: '🔄' },
              { val: 'PWM+PLC', lbl: 'Protocol Support', icon: '📡' },
              { val: 'IEC 62196', lbl: 'Certified Standard', icon: '✅' },
              { val: '<0.5mΩ', lbl: 'Contact Resistance', icon: '🔬' },
              { val: 'IATF 16949', lbl: 'Automotive Standard', icon: '📋' },
            ].map((spec, i) => (
              <motion.div
                key={spec.lbl}
                {...fadeUp(i * 0.06)}
                className="bg-white rounded-2xl p-6 border text-center hover:shadow-md transition-shadow duration-300"
                style={{ borderColor: '#E5E7EB', background: '#F7F7F7' }}
              >
                <span className="text-2xl mb-3 block">{spec.icon}</span>
                <p className="text-xl font-bold" style={{ color: '#24125F' }}>{spec.val}</p>
                <p className="text-xs font-medium mt-1" style={{ color: '#7D7D8C' }}>{spec.lbl}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CUSTOM SOLUTIONS CTA ═══ */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#F7F7F7' }}>
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
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                Our Technology
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRODUCT DATASHEET MODAL ═══ */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 p-6 md:px-10 flex items-center justify-between z-10">
                <div>
                  <span className="text-[10px] font-bold text-[#F04F54] uppercase tracking-widest">{selectedProduct.category}</span>
                  <h3 className="text-xl md:text-3xl font-bold text-[#24125F]">{selectedProduct.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)} 
                  className="w-10 h-10 shrink-0 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#F04F54] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              
              <div className="p-6 md:p-10 space-y-12">
                {/* Intro & Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-bold text-lg text-[#24125F] mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-[#F04F54]"></span> Overview
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">{selectedProduct.intro}</p>
                    
                    <h4 className="font-bold text-lg text-[#24125F] mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-[#F04F54]"></span> Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((f, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                          <span className="text-[#F04F54] mt-0.5">●</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F7F7F7] rounded-3xl p-8 border border-gray-100">
                    <h4 className="font-bold text-lg text-[#24125F] mb-6">Commercial Data</h4>
                    <div className="space-y-4">
                      {selectedProduct.commercial.map((c, i) => (
                        <div key={i} className="flex justify-between items-center text-sm border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                          <span className="text-gray-500">{c.k}</span>
                          <span className="font-semibold text-[#24125F] text-right ml-4">{c.v}</span>
                        </div>
                      ))}
                    </div>

                    {selectedProduct.accessories && selectedProduct.accessories.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h5 className="font-bold text-sm text-[#24125F] mb-3">Accessories</h5>
                        <ul className="space-y-2">
                          {selectedProduct.accessories.map((acc, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                              <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                              {acc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tables: Electrical & Mechanical */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-bold text-lg text-[#24125F] mb-5 flex items-center gap-2">
                      <span className="w-8 h-px bg-[#F04F54]"></span> Electrical Properties
                    </h4>
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                      {selectedProduct.electrical.map((e, i) => (
                        <div key={i} className={\`flex justify-between text-sm p-4 \${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}\`}>
                          <span className="text-gray-600">{e.k}</span>
                          <span className="font-bold text-[#24125F] text-right ml-4">{e.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#24125F] mb-5 flex items-center gap-2">
                      <span className="w-8 h-px bg-[#F04F54]"></span> Mechanical Properties
                    </h4>
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                      {selectedProduct.mechanical.map((m, i) => (
                        <div key={i} className={\`flex justify-between text-sm p-4 \${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}\`}>
                          <span className="text-gray-600">{m.k}</span>
                          <span className="font-bold text-[#24125F] text-right ml-4">{m.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Models Table */}
                <div>
                  <h4 className="font-bold text-lg text-[#24125F] mb-5 flex items-center gap-2">
                    <span className="w-8 h-px bg-[#F04F54]"></span> Available Models
                  </h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-[#24125F] text-white">
                        <tr>
                          <th className="p-4 font-semibold uppercase tracking-wider text-xs">Model Number</th>
                          <th className="p-4 font-semibold uppercase tracking-wider text-xs">Rated Current</th>
                          <th className="p-4 font-semibold uppercase tracking-wider text-xs">Cable Specification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {selectedProduct.models.map((m, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 font-bold text-[#24125F]">{m.no}</td>
                            <td className="p-4 text-gray-600">{m.current}</td>
                            <td className="p-4 text-gray-500 font-mono text-xs">{m.cable}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="mt-10 pt-8 border-t border-gray-100 flex justify-end gap-4">
                  <button onClick={() => setSelectedProduct(null)} className="px-6 py-3 rounded-xl font-semibold text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                    Close Details
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transition-transform"
                    style={{ background: '#F04F54' }}
                  >
                    Request Bulk Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
`;

fs.writeFileSync('src/pages/Products.jsx', content);
console.log('Successfully wrote to src/pages/Products.jsx');
