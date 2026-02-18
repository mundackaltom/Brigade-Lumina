"use client"

import React from "react"
import Link from "next/link"
import SafeMotion from "@/components/SafeMotion"

export function ApartmentTypologySection() {
  const apartments = [
    {
      id: 1,
      icon: "fas fa-home",
      title: "2 BHK",
      sbaRange: "1,090–1,150 sq ft",
      priceRange: "₹1.45–1.59 Cr"
    },
    {
      id: 2,
      icon: "fas fa-building",
      title: "3 BHK (2T)",
      sbaRange: "1,440–1,520 sq ft",
      priceRange: "₹1.90–2.05 Cr"
    },
    {
      id: 3,
      icon: "fas fa-city",
      title: "3 BHK (3T)",
      sbaRange: "1,770–1,815 sq ft",
      priceRange: "₹2.28–2.45 Cr"
    }
  ]

  return (
    <section className="pt-14 pb-8 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <SafeMotion
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Apartment Typology
            </h2>
          </SafeMotion>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {apartments.map((apartment, index) => (
            <div key={apartment.id} className="bg-white rounded-lg p-8 shadow-sm">
              <SafeMotion
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <div className="text-[#8b4513] text-4xl mb-4 text-center">
                  <i className={apartment.icon}></i>
                </div>
              </SafeMotion>
              <SafeMotion
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 + 0.1, duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
                  {apartment.title}
                </h3>
              </SafeMotion>
              <SafeMotion
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-slate-600">SBA Range</span>
                    <span className="font-semibold text-slate-800">{apartment.sbaRange}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-slate-600">Price Range</span>
                    <span className="font-bold text-[#8b4513] text-lg">{apartment.priceRange}</span>
                  </div>
                </div>
              </SafeMotion>
              <SafeMotion
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <Link href="/contact" passHref legacyBehavior>
                  <button className="w-full mt-6 bg-[#8b4513] text-white py-3 px-6 rounded-lg font-semibold">
                    Enquire Now
                  </button>
                </Link>
              </SafeMotion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
