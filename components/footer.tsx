import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Brigade Lumina</h3>
            <p className="text-slate-600">
              Premium residential living in West Bangalore by Brigade Group
            </p>
            {/* Social links removed as requested */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Quick Links</h4>
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Contact Info</h4>
            <div className="space-y-3 text-slate-600">
              <p className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-[#8b4513] mt-1"></i>
                <span className="text-sm">Tumkur Main Road, Chikkabidarakallu, West Bangalore - 560073</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-phone text-[#8b4513]"></i>
                <a href="tel:+919036747821" className="hover:text-[#8b4513] transition-colors">
                  +91 9036747821
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#8b4513]"></i>
                <a href="mailto:soniasrealtymedia@gmail.com" className="hover:text-[#8b4513] transition-colors">
                  soniasrealtymedia@gmail.com
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
          </div>
        </div>
      </div>
    </footer>
  )
}