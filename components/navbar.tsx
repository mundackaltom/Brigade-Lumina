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
    <nav className={`sticky top-0 w-full z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
      isScrolled ? 'h-16' : 'h-[90px]'
    }`}>
      <div className="flex items-center w-full h-full pl-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 mr-12 hover:opacity-80 transition-opacity">
          <Image 
            src="/images/brigade.png" 
            alt="Brigade Logo" 
            width={isScrolled ? 40 : 70}
            height={isScrolled ? 40 : 70}
            className="object-contain transition-all duration-300"
          />
          <h2 className={`text-gray-900 font-bold m-0 transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-[1.75rem]'
          }`}>
            Brigade Lumina
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 ml-auto pr-5">
          <ul className="flex items-center gap-5 list-none m-0 p-0">
            <li>
              <Link 
                href="/" 
                className="no-underline text-gray-900 font-semibold text-[0.95rem] hover:text-gray-600 hover:bg-gray-100 py-3 px-3 rounded-lg whitespace-nowrap transition-all duration-200 relative group"
              >
                Home
                <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="no-underline text-gray-900 font-semibold text-[0.95rem] hover:text-gray-600 hover:bg-gray-100 py-3 px-3 rounded-lg whitespace-nowrap transition-all duration-200 relative group"
              >
                Contact Us
                <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          </ul>
          <Link
            href="https://app.documenso.com/d/L1Q7iioFWeYwjQeVQ4CYB"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg font-medium transition duration-300 whitespace-nowrap"
          >
            Submit Expression of Interest
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col cursor-pointer mr-5 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-900 my-0.5 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-900 my-0.5 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-900 my-0.5 transition-all duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 w-full">
          <div className="flex flex-col p-4">
            <Link 
              href="/" 
              className="py-3 text-gray-900 font-semibold hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/contact" 
              className="py-3 text-gray-900 font-semibold hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="https://app.documenso.com/d/L1Q7iioFWeYwjQeVQ4CYB"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 bg-amber-700 hover:bg-amber-800 text-white px-4 py-3 rounded-lg font-medium transition duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Submit Expression of Interest
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}