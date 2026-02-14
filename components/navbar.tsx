"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/96 backdrop-blur-[15px] shadow-md border-b border-purple-100/20 h-16' 
        : 'bg-white/96 backdrop-blur-[15px] border-b border-purple-100/20 shadow-sm h-[90px]'
    }`}>
      <div className="flex items-center w-full h-full pl-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 mr-12 hover:opacity-80 transition-opacity">
          <Image 
            src="/temp_backup/images/brigade.png" 
            alt="Brigade Logo" 
            width={isScrolled ? 40 : 70}
            height={isScrolled ? 40 : 70}
            className="object-contain transition-all duration-300"
          />
          <h2 className={`text-[#8b4513] font-bold m-0 transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-[1.75rem]'
          }`}>
            Brigade Lumina
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-10 ml-auto pr-5">
          <ul className="flex items-center gap-5 list-none m-0 p-0">
            <li>
              <Link 
                href="/" 
                className="no-underline text-slate-600 font-medium text-[0.95rem] hover:text-[#8b4513] hover:bg-[#8b4513]/8 py-3 px-3 rounded-lg whitespace-nowrap transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-[#8b4513] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="no-underline text-slate-600 font-medium text-[0.95rem] hover:text-[#8b4513] hover:bg-[#8b4513]/8 py-3 px-3 rounded-lg whitespace-nowrap transition-all duration-300 relative group"
              >
                Contact Us
                <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-[#8b4513] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col cursor-pointer mr-5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-slate-600 my-0.5 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-slate-600 my-0.5 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-slate-600 my-0.5 transition-all duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/96 backdrop-blur-[15px] border-t border-slate-200">
          <div className="flex flex-col p-4">
            <Link 
              href="/" 
              className="py-3 text-slate-600 hover:text-[#8b4513] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/contact" 
              className="py-3 text-slate-600 hover:text-[#8b4513] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}