"use client"

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen h-screen flex items-end bg-white relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Brigade Lumina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 pb-20">
          <div className="text-left">
            <h1 className="text-white mb-4">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider">BRIGADE</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light italic">Lumina</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-medium">Premium Homes in Bangalore</p>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About Us – Brigade Lumina</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Brigade Lumina is a premium residential project that redefines upscale living along the bustling Tumkur Main Road. Crafted with meticulous attention to detail, it combines modern architectural design, world-class amenities, and serene living environments. Designed for discerning homeowners, this development offers more than just a home—it presents an elevated lifestyle. From picturesque views to contemporary comforts and a secure, thoughtfully planned community, Brigade Lumina promises a living experience that is both sophisticated and harmonious.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Image 
                src="/images/brigade.svg" 
                alt="Brigade Lumina Logo"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Snapshot Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
              Project Snapshot
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Project Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
              Project Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-[#8b4513] font-semibold tracking-wider text-sm uppercase">AMENITIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2" data-aos="fade-up" data-aos-duration="600">
              Amenities that Define Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Swimming Pool', image: 'amenity-pool.jpg' },
              { name: 'Kids Play Area', image: 'amenity-play.jpg' },
              { name: 'Gym', image: 'amenity-gym.jpg' },
              { name: 'Walking Path', image: 'amenity-walk.jpg' },
              { name: 'Convenience Store', image: 'amenity-store.jpg' },
              { name: 'Multipurpose Hall', image: 'amenity-hall.jpg' },
              { name: 'Spa', image: 'amenity-spa.jpg' },
              { name: 'Reflexology Track', image: 'amenity-reflexology.jpg' }
            ].map((amenity, index) => (
              <div key={amenity.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-duration="600" data-aos-delay={100 + index * 50}>
                <div className="aspect-[4/3] relative">
                  <Image 
                    src={`/images/${amenity.image}`}
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

      {/* Location Advantage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
              Location Advantage
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategically Located in Bangalore</h3>
              <p className="text-lg text-slate-600 mb-8">
                Brigade Lumina enjoys excellent connectivity to key transport, IT hubs, schools, and healthcare facilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Manjunatha Nagara Metro Station', time: '2 min' },
                  { name: 'Inventure Academy', time: '2 min' },
                  { name: 'Delhi Public International School', time: '2 min' },
                  { name: 'IKEA', time: '5 min' },
                  { name: 'Orion Mall', time: '15 min' },
                  { name: 'Vaishnavi Sapphire Mall', time: '15 min' },
                  { name: 'People Tree Hospital', time: '15 min' },
                  { name: 'Sparsha Hospital', time: '20 min' },
                  { name: 'Kempegowda International Airport', time: '45 min' }
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
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.126542167891!2d77.49548467508012!3d12.954412887373045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c31eb6a7e0b%3A0x72bcb750da6b8f95!2sBrigade%20Lumina%2C%20Tumkur%20Main%20Road%2C%20Chikka%20Bidarakallu%2C%20Bengaluru%2C%20Karnataka%20560073!5e0!3m2!1sen!2sin!4v1709996000000!5m2!1sen!2sin&iwloc=0&disableDefaultUI=true&gestureHandling=cooperative"
                  width="100%" 
                  height="420" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brigade Lumina Project Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typology & Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" data-aos="fade-up" data-aos-duration="600">
              Apartment Typology
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <button className="w-full mt-6 bg-[#8b4513] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#7a3d11] transition-colors">
                Enquire Now
              </button>
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
              <button className="w-full mt-6 bg-[#8b4513] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#7a3d11] transition-colors">
                Enquire Now
              </button>
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
              <button className="w-full mt-6 bg-[#8b4513] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#7a3d11] transition-colors">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}