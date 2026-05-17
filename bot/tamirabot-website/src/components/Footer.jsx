import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#24125F' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/images/logo.png" alt="Tamirabot" className="h-9 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-white/50 leading-relaxed">
              Crafting EV connectors that exceed international standards. Engineering excellence for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Pages</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-white/50 hover:text-white transition-colors">About Us</Link>
              <Link to="/products" className="text-sm text-white/50 hover:text-white transition-colors">Products</Link>
              <Link to="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Products</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/product/type2-connector" className="text-sm text-white/50 hover:text-white transition-colors">TYPE 2 — Vehicle Connector</Link>
              <Link to="/product/ccs2-connector" className="text-sm text-white/50 hover:text-white transition-colors">CCS2 — Vehicle Connector</Link>
              <Link to="/product/type6-connector" className="text-sm text-white/50 hover:text-white transition-colors">TYPE 6 — Vehicle Connector</Link>
              <Link to="/product/type6-inlet" className="text-sm text-white/50 hover:text-white transition-colors">TYPE 6 — Vehicle Inlet</Link>
              <Link to="/product/ccs2-inlet" className="text-sm text-white/50 hover:text-white transition-colors">CCS2 — Vehicle Inlet</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <p>IIT Madras Research Park</p>
              <p>Chennai, Tamil Nadu, India</p>
              <p>info@tamirabot.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Tamirabot. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
