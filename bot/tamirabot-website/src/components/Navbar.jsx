import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-2xl shadow-[0_1px_2px_rgba(36,18,95,0.04),0_4px_16px_rgba(36,18,95,0.03)]'
          : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#24125F]/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Logo — left aligned */}
        <Link to="/" className="flex items-center" aria-label="Tamirabot Home">
          <img src="/images/logo.png" alt="Tamirabot" className="h-[36px] w-auto" />
        </Link>

        {/* Right Section: Nav links + CTA */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Nav links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-[14px] font-medium tracking-[-0.006em] transition-colors duration-200 ${
                    isActive ? 'text-[#F04F54]' : 'text-[#24125F]/80 hover:text-[#24125F]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-[2px] h-[2px] rounded-full bg-[#F04F54] transition-all duration-200 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-[40px] px-6 rounded-full text-[13px] font-semibold tracking-[-0.006em] text-white bg-[#F04F54] hover:bg-[#E5424A] shadow-[0_1px_3px_rgba(240,79,84,0.2),0_4px_12px_rgba(240,79,84,0.15)] hover:shadow-[0_2px_6px_rgba(240,79,84,0.3),0_8px_24px_rgba(240,79,84,0.2)] active:scale-[0.97] transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger — right aligned */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden justify-self-end w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#F8F9FA] transition-colors duration-200"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <div className="w-[18px] h-[14px] flex flex-col justify-between">
            <span className={`block w-full h-[1.5px] bg-[#24125F] rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.25px]' : ''}`} />
            <span className={`block w-full h-[1.5px] bg-[#24125F] rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-full h-[1.5px] bg-[#24125F] rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.25px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white ${
          mobileOpen ? 'max-h-[360px] opacity-100 border-t border-[#ECEDF3]' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center h-[48px] px-4 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                  isActive ? 'text-[#F04F54] bg-[#F04F54]/[0.04]' : 'text-[#24125F] hover:bg-[#F8F9FA]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-3 mt-2 border-t border-[#ECEDF3]">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center h-[48px] rounded-full text-[14px] font-semibold text-white bg-[#F04F54]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
