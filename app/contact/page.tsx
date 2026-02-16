
export const dynamic = "force-dynamic";


import { Contact2 } from "@/components/ui/contact-2"

export default function ContactPage() {
  return (
    <>
      <Contact2 
        title="Contact Brigade Lumina"
        description="Schedule a site visit or get more details about our premium residences."
        phone="+91 9036747821"
        email="soniasrealtymedia@gmail.com"
        className="pt-32" // Add padding to account for fixed navbar
      />
      
  {/* Expression of Interest Section */}
  <section className="mt-2 bg-gray-50 p-10 rounded-2xl shadow-sm text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Expression of Interest
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Secure your preferred unit at Brigade Lumina by submitting an official Expression of Interest form.
            Complete the form digitally and reserve your interest in this premium residential project.
          </p>

          <a
            href="https://app.documenso.com/d/L1Q7iioFWeYwjQeVQ4CYB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-700 hover:bg-amber-800 hover:scale-105 shadow-lg text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            Submit Expression of Interest
          </a>
        </div>
      </section>
    </>
  )
}