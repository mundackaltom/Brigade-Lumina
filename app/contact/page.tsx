import { Contact2 } from "@/components/ui/contact-2"

export default function ContactPage() {
  return (
    <Contact2 
      title="Contact Brigade Lumina"
      description="Schedule a site visit or get more details about our premium residences."
      phone="+91 9876543210"
      email="info@brigadelumina.com"
      className="pt-32" // Add padding to account for fixed navbar
    />
  )
}