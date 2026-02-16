
import React from "react"
import Link from "next/link"

export function ApartmentTypologySection() {
  return (
    <section className="pt-14 pb-8 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
            Apartment Typology
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow" data-aos="slide-up" data-aos-duration="600" data-aos-delay="100">
            <div className="text-[#8b4513] text-4xl mb-4 text-center">
              <i className="fas fa-home"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">2 BHK</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-600">SBA Range</span>
                <span className="font-semibold text-slate-800">1,090–1,150 sq ft</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-slate-600">Price Range</span>
                <span className="font-bold text-[#8b4513] text-lg">₹1.45–1.59 Cr</span>
              </div>
            </div>
            <Link href="/contact" passHref legacyBehavior>
              <button className="w-full mt-6 bg-[#8b4513] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#7a3d11] transition-colors">
                Enquire Now
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow" data-aos="slide-up" data-aos-duration="600" data-aos-delay="200">
            <div className="text-[#8b4513] text-4xl mb-4 text-center">
              <i className="fas fa-building"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">3 BHK (2T)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-600">SBA Range</span>
                <span className="font-semibold text-slate-800">1,440–1,520 sq ft</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-slate-600">Price Range</span>
                <span className="font-bold text-[#8b4513] text-lg">₹1.90–2.05 Cr</span>
              </div>
            </div>
            <Link href="/contact" passHref legacyBehavior>
              <button className="w-full mt-6 bg-[#8b4513] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#7a3d11] transition-colors">
                Enquire Now
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow" data-aos="slide-up" data-aos-duration="600" data-aos-delay="300">
            <div className="text-[#8b4513] text-4xl mb-4 text-center">
              <i className="fas fa-city"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">3 BHK (3T)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-600">SBA Range</span>
                <span className="font-semibold text-slate-800">1,770–1,815 sq ft</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-slate-600">Price Range</span>
                <span className="font-bold text-[#8b4513] text-lg">₹2.28–2.45 Cr</span>
              </div>
            </div>
            <Link href="/contact" passHref legacyBehavior>
              <button className="w-full mt-6 bg-[#8b4513] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#7a3d11] transition-colors">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
