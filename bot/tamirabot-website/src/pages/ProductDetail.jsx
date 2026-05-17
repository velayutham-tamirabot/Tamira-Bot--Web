import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === id) || products[0]
  const [activeImage, setActiveImage] = useState(0)

  // Scroll to top when loading page or changing products
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  // Reset active image when product changes
  const prevId = useRef(id)
  useEffect(() => {
    if (prevId.current !== id) {
      setActiveImage(0)
      prevId.current = id
    }
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen pt-[140px] px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found.</h1>
        <button 
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-2 text-[#F04F54] font-bold hover:underline"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Products
        </button>
      </div>
    )
  }

  // We only have one image, so we'll simulate a gallery for the UI
  const gallery = [product.image, product.image, product.image]
  const relatedProducts = products.filter(p => p.id !== product.id)

  return (
    <div className="min-h-screen bg-white pt-[96px] pb-24 font-sans text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ═══ BACK OPTION ═══ */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          className="mb-3"
        >
          <button 
            onClick={() => navigate('/products')}
            className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[#64748B] hover:text-[#F04F54] transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#F04F54] bg-white shadow-sm transition-all duration-300">
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            Back to Products
          </button>
        </motion.div>

        {/* ═══ HERO SECTION ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: Premium Image Viewer */}
          <div className="lg:col-span-7 flex flex-col gap-6 sticky top-32">
            {/* Main Image */}
            <div className="w-full bg-[#F8FAFC] rounded-[2rem] relative overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[600px] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  src={gallery[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </AnimatePresence>
              <div className="absolute top-8 left-8 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-white text-[#F04F54] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                {product.category}
              </div>
            </div>

            {/* Subtle Thumbnails */}
            <div className="flex justify-center gap-4">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden transition-all duration-300 relative ${
                    activeImage === idx ? 'ring-2 ring-offset-4 ring-[#F04F54]' : 'opacity-50 hover:opacity-100 bg-[#F8FAFC]'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover p-2 mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Technical Details & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-4 lg:pt-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F04F54] mb-4 block">
                CHARGING CONNECTOR
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-[#64748B] text-base md:text-lg mb-10 leading-relaxed font-medium">
                {product.desc}
              </p>

              {/* Minimalist Specs List (Replaces 6-Box Grid) */}
              <div className="flex flex-col gap-5 border-y border-gray-100 py-8 mb-10">
                {product.gridSpecs?.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] transition-colors group-hover:text-[#64748B]">
                      {spec.label}
                    </span>
                    <span className="text-base font-bold text-[#0F172A] text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status Indicators */}
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-bold text-[#0F172A]">Ready for Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm font-bold text-[#0F172A]">48 Month Warranty</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-[#F04F54] hover:bg-[#D43D42] active:scale-95 transition-all duration-300 shadow-[0_8px_20px_rgba(240,79,84,0.3)] hover:shadow-[0_12px_25px_rgba(240,79,84,0.4)]"
                >
                  Request Technical Quotation
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-between text-[10px] md:text-xs font-bold text-[#94A3B8] uppercase tracking-[0.15em]">
                <span>Tamirabot Engineering</span>
                <span className="flex gap-4"><span className="text-[#0F172A]">ISO 9001</span> <span className="text-[#0F172A]">IATF 16949</span></span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═══ COMPREHENSIVE DATASHEET ═══ */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#F04F54] mb-4">
              Comprehensive Details
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              Technical Datasheet
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Features & Overview */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#94A3B8] mb-6">Key Features</h3>
                <ul className="space-y-5">
                  {product.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[15px] text-[#334155] leading-relaxed">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F04F54] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.accessories && product.accessories.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#94A3B8] mb-6">Accessories</h3>
                  <div className="space-y-4">
                    {product.accessories.map((acc, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                        <span className="font-bold text-[#0F172A] block mb-2">{acc.name}</span>
                        <span className="text-[#64748B] text-sm leading-relaxed block">{acc.details}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Data Tables */}
            <div className="lg:col-span-8">
              
              {/* Product Specs */}
              {product.specifications && (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
                  <div className="bg-[#24125F] px-6 py-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Product Specifications</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px]">
                      <thead>
                        <tr className="border-b border-gray-200 bg-white">
                          {product.specifications.headers.map((h, i) => (
                            <th key={i} className={`px-6 py-4 font-bold text-xs text-gray-400 uppercase tracking-wider ${i !== product.specifications.headers.length - 1 ? 'border-r border-gray-200' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {product.specifications.rows.map((row, idx) => (
                          <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                            {row.map((cell, cidx) => (
                              <td key={cidx} className={`px-6 py-4 text-gray-500 ${cidx === 0 ? 'font-bold text-[#24125F]' : ''} ${cidx !== row.length - 1 ? 'border-r border-gray-200' : ''}`}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Split Props */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Electrical */}
                {product.electricalProperties && (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#24125F] px-6 py-4 shrink-0">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Electrical Properties</h3>
                    </div>
                    <div className="overflow-x-auto flex-1">
                      <table className="w-full text-left text-[14px]">
                        <tbody>
                          {product.electricalProperties.map((row, idx) => (
                            <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 font-bold text-[#24125F] border-r border-gray-200 w-2/5">{row.property}</td>
                              <td className="px-6 py-4 text-gray-500">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Mechanical */}
                {product.mechanicalProperties && (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#24125F] px-6 py-4 shrink-0">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Mechanical Properties</h3>
                    </div>
                    <div className="overflow-x-auto flex-1">
                      <table className="w-full text-left text-[14px]">
                        <tbody>
                          {product.mechanicalProperties.map((row, idx) => (
                            <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 font-bold text-[#24125F] border-r border-gray-200 w-2/5">{row.property}</td>
                              <td className="px-6 py-4 text-gray-500">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Commercial Data */}
              {product.commercialData && (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
                  <div className="bg-[#24125F] px-6 py-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Commercial Data</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px]">
                      <tbody>
                        {product.commercialData.map((row, idx) => (
                          <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-bold text-[#24125F] border-r border-gray-200 w-1/3">{row.field}</td>
                            <td className="px-6 py-4 text-gray-500">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* ═══ RELATED PRODUCTS ═══ */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">Explore Portfolio</h2>
              <p className="text-[#64748B] text-[15px]">Discover our complete range of certified charging solutions.</p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex text-sm font-bold text-[#F04F54] hover:text-[#D43D42] transition-colors items-center gap-2">
              View All 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <Link
                to={`/product/${relProduct.id}`}
                key={relProduct.id}
                className="group block rounded-3xl border border-gray-100 bg-white hover:border-[#F04F54]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-56 bg-[#F8FAFC] p-8 flex items-center justify-center overflow-hidden shrink-0 border-b border-gray-50">
                  <img
                    src={relProduct.image}
                    alt={relProduct.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#F04F54] shadow-sm border border-gray-100/50">
                      {relProduct.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-auto group-hover:text-[#F04F54] transition-colors leading-tight">
                    {relProduct.name}
                  </h3>
                  
                  {/* Subtle Call to Action */}
                  <div className="mt-6 flex items-center text-[13px] font-bold text-[#64748B] group-hover:text-[#F04F54] transition-colors uppercase tracking-wider">
                    View Specs
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/products" className="inline-flex text-sm font-bold text-[#F04F54] hover:text-[#D43D42] transition-colors items-center gap-2">
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
