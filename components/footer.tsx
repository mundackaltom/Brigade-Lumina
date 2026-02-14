import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Brigade Lumina</h3>
            <p className="text-slate-600 mb-4">
              Premium residential living in West Bangalore by Brigade Group
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-[#8b4513] transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-[#8b4513] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" aria-label="YouTube" className="text-slate-500 hover:text-[#8b4513] transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-[#8b4513] transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-600 hover:text-[#8b4513] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#8b4513] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Project Info</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#8b4513] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#8b4513] transition-colors">
                  RERA Details
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#8b4513] transition-colors">
                  Brochure Download
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Contact Info</h4>
            <div className="space-y-3 text-slate-600">
              <p className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-[#8b4513] mt-1"></i>
                <span className="text-sm">Tumkur Main Road, Chikkabidarakallu, West Bangalore - 560073</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-phone text-[#8b4513]"></i>
                <a href="tel:+919876543210" className="hover:text-[#8b4513] transition-colors">
                  +91 9876543210
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#8b4513]"></i>
                <a href="mailto:info@brigadelumina.com" className="hover:text-[#8b4513] transition-colors">
                  info@brigadelumina.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-clock text-[#8b4513]"></i>
                <span className="text-sm">Mon - Sun: 9:00 AM - 7:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              &copy; 2026 Brigade Lumina by Brigade Group. All rights reserved.
            </p>
            <div className="text-slate-500 text-xs">
              <span>RERA Registration: PRM/KA/RERA/1251/309/PR/190518/002212</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}