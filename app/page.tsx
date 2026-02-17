"use client"


import Image from 'next/image'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { Gallery } from '@/components/gallery'
import { ApartmentTypologySection } from '@/components/ApartmentTypologySection'

export default function Home() {
  useEffect(() => {
    // Re-initialize AOS animations after navigation
    const initAOS = () => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.refreshHard();
      }
    };
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(initAOS, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative w-full aspect-video max-h-screen overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Brigade Lumina Hero"
            fill
            priority
            className="object-cover"
          />
          {/* Premium dark gradient overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="block font-extrabold uppercase tracking-[0.25em] text-5xl md:text-7xl lg:text-8xl"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                BRIGADE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.85, ease: 'easeOut' }}
                className="block font-medium text-6xl md:text-8xl lg:text-9xl mt-2 drop-shadow-lg bg-gradient-to-r from-amber-300 via-white to-amber-100 bg-clip-text text-transparent tracking-normal"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Lumina
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="font-light tracking-wide text-lg md:text-xl text-white/90"
            >
              Premium Homes in Bangalore
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-[2fr_1fr] gap-4 md:gap-8 items-center">
            <div className="md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 md:mb-8">About Us</h2>
              <p className="text-slate-600 text-lg leading-relaxed text-justify max-w-3xl md:max-w-4xl">
                Brigade Lumina is a premium residential project that redefines upscale living along the bustling Tumkur Main Road. Crafted with meticulous attention to detail, it combines modern architectural design, world-class amenities, and serene living environments. Designed for discerning homeowners, this development offers more than just a home—it presents an elevated lifestyle. From picturesque views to contemporary comforts and a secure, thoughtfully planned community, Brigade Lumina promises a living experience that is both sophisticated and harmonious.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Image 
                src="/images/authorised.png" 
                alt="Authorised Brigade Channel Partner"
                width={320}
                height={240}
                className="max-w-[320px] md:max-w-[320px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Snapshot Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
              Project Snapshot
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <div className="text-[#8b4513] text-4xl mb-4">
                <i className="fas fa-map"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Total Project Land Area</h3>
              <p className="text-2xl font-bold text-[#8b4513]">4 Acres</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <div className="text-[#8b4513] text-4xl mb-4">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No. of Towers</h3>
              <p className="text-2xl font-bold text-[#8b4513]">3</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
              <div className="text-[#8b4513] text-4xl mb-4">
                <i className="fas fa-home"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No. of Units</h3>
              <p className="text-2xl font-bold text-[#8b4513]">416</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
              <div className="text-[#8b4513] text-4xl mb-4">
                <i className="fas fa-layer-group"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No. of Floors</h3>
              <p className="text-lg font-bold text-[#8b4513]">2B + Stilt + G + 19 Floors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
              Location Advantage
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left Side - Text Content */}
            <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Strategically Located in Bangalore</h3>
              <p className="text-lg text-slate-600 mb-6">
                Brigade Lumina enjoys excellent connectivity to key transport, IT hubs, schools, and healthcare facilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Manjunatha Nagara Metro Station', time: '4 min' },
                  { name: 'Inventure Academy', time: '2 min' },
                  { name: 'Delhi Public International School', time: '10 min' },
                  { name: 'IKEA', time: '5 min' },
                  { name: 'Orion Mall', time: '20 min' },
                  { name: 'Vaishnavi Sapphire Mall', time: '17 min' },
                  { name: 'People Tree Hospital', time: '14 min' },
                  { name: 'Sparsh Hospital', time: '15 min' },
                  { name: 'Kempegowda International Airport', time: '1 hr' }
                ].map((location, index) => (
                  <div key={location.name} className={`py-3 ${index % 3 === 2 ? 'border-b border-slate-200' : ''}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 text-sm font-medium">{location.name}</span>
                      <span className="text-[#8b4513] font-semibold text-sm">{location.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Google Map */}
            <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=13.0502626,77.4913510&z=16&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  style={{ border: 0 }}
                  title="Brigade Lumina Project Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
              Project Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
              <div className="text-[#8b4513] text-5xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Net Zero Project</h3>
            </div>
            <div className="text-center p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
              <div className="text-[#8b4513] text-5xl mb-4">
                <i className="fas fa-tree"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">80% Open Space</h3>
            </div>
            <div className="text-center p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
              <div className="text-[#8b4513] text-5xl mb-4">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Clubhouse with 20+ Amenities</h3>
            </div>
            <div className="text-center p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
              <div className="text-[#8b4513] text-5xl mb-4">
                <i className="fas fa-train-subway"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Near Manjunatha Nagar Metro</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#8b4513] font-semibold tracking-wider text-sm uppercase">AMENITIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2" data-aos="fade-up" data-aos-duration="600">
              Amenities that Define Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Swimming Pool', image: 'swimmingpool.jpg' },
              { name: 'Kids Play Area', image: 'kidsplayarea.jpg' },
              { name: 'Gym', image: 'gym.jpg' },
              { name: 'Walking Path', image: 'walkingpath.jpg' },
              { name: 'Convenience Store', image: 'conveniencestore.jpg' },
              { name: 'Multipurpose Hall', image: 'multipurposehall.webp' },
              { name: 'Spa', image: 'spa.jpg' },
              { name: 'Reflexology Track', image: 'reflexologypath.jpg' }
            ].map((amenity, index) => (
              <div key={amenity.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay={100 + index * 50}>
                <div className="aspect-[4/3] relative">
                  <Image 
                    src={`/amenities/${amenity.image}`}
                    alt={amenity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-800 text-center">{amenity.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typology & Pricing Section */}
      <ApartmentTypologySection />

  {/* Gallery Section */}
  <section className="pt-8 pb-16 bg-slate-50">
    <Gallery />
  </section>
    </div>
  )
}