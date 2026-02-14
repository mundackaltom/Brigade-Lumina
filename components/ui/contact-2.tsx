"use client"

import * as React from "react"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface Contact2Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  className?: string
}

export function Contact2({
  title = "Contact Us",
  description = "Get in touch with us for more information.",
  phone,
  email,
  className,
}: Contact2Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }
    console.log('Form data submitted:', data)
    // Here you would typically send the data to your backend
  }

  return (
    <section className={cn("py-24 bg-white", className)}>
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Contact Information */}
        {(phone || email) && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">{phone}</span>
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">{email}</span>
              </a>
            )}
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields - 2 columns on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Contact Fields - 2 columns on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Message Field - Full width */}
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your requirements, timeline, or any questions you have..."
              />
            </div>

            {/* Submit Button - Full width */}
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}