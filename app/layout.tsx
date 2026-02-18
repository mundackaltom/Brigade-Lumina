import type { Metadata } from 'next'
import { Inter, Montserrat, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import ScrollToTop from '@/components/ScrollToTop'
import TopStrip from '@/components/TopStrip'
import EOIStrip from '@/components/EOIStrip'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['800'],
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700'],
  style: ['italic'],
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['600'],
  style: ['normal'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Brigade Lumina | Luxury 2 & 3 BHK Apartments on Tumkur Road, Bangalore",
  description:
    "Discover Brigade Lumina, a premium residential project on Tumkur Main Road, West Bangalore. Spacious 2 & 3 BHK apartments with world-class amenities and modern design.",
  keywords: [
    "Brigade Lumina",
    "Brigade Lumina Tumkur Road",
    "Brigade Lumina Bangalore",
    "2 BHK Tumkur Road",
    "3 BHK Tumkur Road",
    "Apartments in West Bangalore",
  ],
  metadataBase: new URL("https://brigadeluminaofficial.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brigade Lumina – Premium Homes in Bangalore",
    description:
      "Luxury 2 & 3 BHK apartments on Tumkur Main Road.",
    url: "https://brigadeluminaofficial.com",
    siteName: "Brigade Lumina",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,700&family=Cormorant+Garamond:wght@400;600;700&family=Cinzel:wght@400;600;700;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        <link 
          href="https://unpkg.com/aos@2.3.1/dist/aos.css" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ApartmentComplex",
              name: "Brigade Lumina",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tumkur Main Road",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "India",
              },
              url: "https://brigadeluminaofficial.com",
              description: "Premium residential project with luxury 2 & 3 BHK apartments",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Swimming Pool"
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  name: "Gymnasium"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Kids Play Area"
                }
              ]
            }),
          }}
        />
      </head>
  <body className={`${inter.className} ${montserrat.variable} ${playfair.variable} ${cormorantGaramond.variable}`}>
  <ScrollToTop />
  <Navbar />
  <EOIStrip />
  <TopStrip />
  <main>{children}</main>
  <Footer />
        <Script 
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="lazyOnload"
        />
        <Script id="aos-init" strategy="lazyOnload">
          {`
            if (typeof AOS !== 'undefined') {
              AOS.init({
                duration: 700,
                easing: 'ease-out-cubic',
                once: true,
                offset: 50,
                delay: 100
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}