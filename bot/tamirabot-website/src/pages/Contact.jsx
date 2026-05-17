import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', company: '', phone: '', message: '' })
  }

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-[110px] pb-24 md:pt-[140px] md:pb-28 px-6 overflow-hidden" style={{ background: '#24125F' }}>
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: '#F04F54' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp()}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: '#F04F54' }}>Contact Us</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
              Let's Build the<br /><span style={{ color: '#F04F54' }}>Future</span> Together
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Ready to discuss your EV charging requirements? Our engineering team is here to help you find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT FORM + INFO ═══ */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form - takes 3 cols */}
          <motion.div {...fadeUp()} className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#24125F' }}>Send Us a Message</h2>
            <p className="text-sm mb-8" style={{ color: '#7D7D8C' }}>Fill out the form and our team will respond within 24 hours.</p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl border text-sm font-medium" style={{ background: 'rgba(240,79,84,0.05)', borderColor: 'rgba(240,79,84,0.2)', color: '#F04F54' }}>
                ✓ Thank you! Your enquiry has been submitted. We'll get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#24125F' }}>Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors" style={{ borderColor: '#E5E7EB', color: '#24125F' }} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#24125F' }}>Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors" style={{ borderColor: '#E5E7EB', color: '#24125F' }} placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#24125F' }}>Company</label>
                  <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors" style={{ borderColor: '#E5E7EB', color: '#24125F' }} placeholder="Company Name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#24125F' }}>Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors" style={{ borderColor: '#E5E7EB', color: '#24125F' }} placeholder="+91 81486 82557" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#24125F' }}>Message *</label>
                <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none transition-colors resize-none" style={{ borderColor: '#E5E7EB', color: '#24125F' }} placeholder="Tell us about your EV charging requirements..." />
              </div>
              <button type="submit" className="px-8 py-3.5 rounded-full font-semibold text-sm text-white hover:opacity-90 active:scale-95 transition-all shadow-sm" style={{ background: '#F04F54' }}>
                Send Enquiry
              </button>
            </form>
          </motion.div>

          {/* Info - takes 2 cols */}
          <motion.div {...fadeUp(0.15)} className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-10 flex flex-col">
              <div className="bg-[#24125F] px-6 py-4 flex items-center justify-between shrink-0">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Contact Information</h3>
                <span className="w-2 h-2 rounded-full bg-[#F04F54]" />
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left text-[14px]">
                  <tbody>
                    {[
                      { icon: '📍', title: 'Office Address', text: 'IIT Madras Research Park, Chennai, Tamil Nadu 600113, India' },
                      { icon: '✉️', title: 'Email', text: 'info@tamirabot.com' },
                      { icon: '📞', title: 'Phone', text: '+91 81486 82557' },
                      { icon: '🕐', title: 'Working Hours', text: 'Mon – Fri: 9:00 AM – 6:00 PM IST' },
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-[#24125F] border-r border-gray-200 w-2/5 sm:w-1/3 align-top">
                          <div className="flex items-center gap-2.5">
                            <span className="text-[#F04F54] text-base">{item.icon}</span>
                            <span>{item.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 align-top leading-relaxed">{item.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border h-56 flex items-center justify-center" style={{ borderColor: '#E5E7EB', background: '#F7F7F7' }}>
              <div className="text-center">
                <p className="text-sm font-medium" style={{ color: '#7D7D8C' }}>📍 IIT Madras Research Park</p>
                <p className="text-xs mt-1" style={{ color: '#7D7D8C' }}>Chennai, Tamil Nadu</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[{ val: '<24h', lbl: 'Response Time' }, { val: '100%', lbl: 'Client Satisfaction' }].map((s) => (
                <div key={s.lbl} className="rounded-2xl p-5 border text-center" style={{ borderColor: '#E5E7EB', background: '#F7F7F7' }}>
                  <p className="text-xl font-bold" style={{ color: '#24125F' }}>{s.val}</p>
                  <p className="text-[11px] font-medium mt-1" style={{ color: '#7D7D8C' }}>{s.lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


    </>
  )
}
