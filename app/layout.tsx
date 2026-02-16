import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import ScrollToTop from '@/components/ScrollToTop'
import TopStrip from '@/components/TopStrip'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brigade Lumina',
  description: 'Premium Homes in Bangalore',
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
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
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