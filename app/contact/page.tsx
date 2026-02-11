'use client'

import React from "react"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // This is just a frontend demo - you can add backend functionality later
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-4 text-balance">
              Visit Our Chocolate Cafes
            </h1>
            <p className="text-xl text-secondary-foreground/90">
              We'd love to welcome you! Find us at either location and indulge in our chocolate creations.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-secondary mb-12 text-balance">
                  Visit Us Today
                </h2>

                {/* Bharuch Location */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition bg-white">
                  <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <MapPin className="w-6 h-6" />
                      Bharuch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 pt-6">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Address</p>
                      <p className="text-foreground mt-2 leading-relaxed">
                        Nagarpalika Shopping Centre, Civil Hospital Road, Moficer Jin Compound, Bharuch, Gujarat 392001
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+919499678796" className="text-primary font-semibold hover:underline text-lg">
                        +91 9499678796
                      </a>
                    </div>
                    <div className="flex items-start gap-3 pt-2">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground font-semibold">10:00 AM - 10:00 PM</p>
                        <p className="text-sm text-muted-foreground">Open All Days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ankleshwar Location */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition bg-white">
                  <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <MapPin className="w-6 h-6" />
                      Ankleshwar
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 pt-6">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Address</p>
                      <p className="text-foreground mt-2 leading-relaxed">
                        Orange Heights, Sardar Park, Golden Point Chowkdi Road, GIDC, Ankleshwar, Gujarat 393002
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+919499678796" className="text-primary font-semibold hover:underline text-lg">
                        +91 9499678796
                      </a>
                    </div>
                    <div className="flex items-start gap-3 pt-2">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground font-semibold">10:00 AM - 10:00 PM</p>
                        <p className="text-sm text-muted-foreground">Open All Days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-8 text-balance">Send us a Message</h2>
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="bg-background border-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="bg-background border-border"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us what you think..."
                          rows={5}
                          className="bg-background border-border"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-balance">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer delivery or takeout?</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground">
                  Yes! We offer both dine-in, takeout, and delivery options. Please contact us
                  directly for delivery details.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I place a catering order?</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground">
                  Absolutely! We do catering for events and parties. Please contact us to discuss
                  your requirements.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What are your opening hours?</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground">
                  We're open from 10:00 AM to 10:00 PM every day of the week. Check our locations
                  page for more details.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you have vegetarian options?</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground">
                  Yes! All our waffles are vegetarian. We have both savory and sweet options for
                  everyone.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
