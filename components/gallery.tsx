import Image from 'next/image'
import { useMemo } from 'react'

export function Gallery() {
  // Array of gallery images
  const galleryImages = [
    { id: 1, src: '/gallery/1.jpg', alt: 'Brigade Lumina Interior View 1' },
    { id: 2, src: '/gallery/2.jpg', alt: 'Brigade Lumina Interior View 2' },
    { id: 3, src: '/gallery/3.jpg', alt: 'Brigade Lumina Interior View 3' },
    { id: 4, src: '/gallery/4.jpg', alt: 'Brigade Lumina Interior View 4' },
    { id: 5, src: '/gallery/5.jpg', alt: 'Brigade Lumina Interior View 5' },
    { id: 6, src: '/gallery/6.jpg', alt: 'Brigade Lumina Interior View 6' },
    { id: 7, src: '/gallery/7.jpg', alt: 'Brigade Lumina Interior View 7' },
    { id: 8, src: '/gallery/8.jpg', alt: 'Brigade Lumina Interior View 8' },
  ]

  // Shuffle images on each render
  const shuffledImages = useMemo(() => {
    const arr = [...galleryImages]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [])

  return (
    <section className="pt-12 pb-8 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Luxury Living Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the elegance and craftsmanship of Brigade Lumina.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {shuffledImages.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}