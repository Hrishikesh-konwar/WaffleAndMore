"use client";

import React from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is just a frontend demo - you can add backend functionality later
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 relative">
      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-[1]"></div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Header Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 text-balance uppercase tracking-wide">
                Visit Us Today
              </h2>
              <p className="text-lg text-gray-300">
                We'd love to welcome you! Find us at either location and indulge
                in our delicious creations.
              </p>
              <p className="text-lg text-white font-semibold">
                Our identity is not decorative — it is intentional.
              </p>
            </div>
          </section>

          {/* Locations Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bharuch Location */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition bg-gray-800 border border-gray-700">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <MapPin className="w-6 h-6" />
                    Bharuch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                      Address
                    </p>
                    <p className="text-white mt-2 leading-relaxed">
                      Nagarpalika Shopping Centre, Civil Hospital Road, Moficer
                      Jin Compound, Bharuch, Gujarat 392001
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href="tel:+919499678796"
                      className="text-primary font-semibold hover:underline text-lg"
                    >
                      +91 9499678796
                    </a>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">
                        10:00 AM - 10:00 PM
                      </p>
                      <p className="text-sm text-gray-400">Open All Days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ankleshwar Location */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition bg-gray-800 border border-gray-700">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <MapPin className="w-6 h-6" />
                    Ankleshwar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                      Address
                    </p>
                    <p className="text-white mt-2 leading-relaxed">
                      Orange Heights, Sardar Park, Golden Point Chowkdi Road,
                      GIDC, Ankleshwar, Gujarat 393002
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href="tel:+919499678796"
                      className="text-primary font-semibold hover:underline text-lg"
                    >
                      +91 9499678796
                    </a>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">
                        10:00 AM - 10:00 PM
                      </p>
                      <p className="text-sm text-gray-400">Open All Days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12 text-balance uppercase tracking-wider">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Do you offer delivery or takeout?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Yes! We offer both dine-in, takeout, and delivery options.
                  Please contact us directly for delivery details.
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    Can I place a catering order?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Absolutely! We do catering for events and parties. Please
                  contact us to discuss your requirements.
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    What are your opening hours?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  We're open from 10:00 AM to 10:00 PM every day of the week.
                  Check our locations page for more details.
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you have vegetarian options?</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground">
                  Yes! All our waffles are vegetarian. We have both savory and sweet options for
                  everyone.
                </CardContent>
              </Card> */}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
