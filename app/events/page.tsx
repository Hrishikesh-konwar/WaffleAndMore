"use client";

import React, { FormEvent, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EventsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    additionalDetails: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Event inquiry submitted:", formData);

    // Format the message for WhatsApp
    const message = `*Event Inquiry*
    
 *Name:* ${formData.fullName}
 *Company:* ${formData.companyName || "N/A"}
 *Email:* ${formData.email}
 *Phone:* ${formData.phone}
 *Event Type:* ${formData.eventType}
 *Date:* ${formData.eventDate}
 *Location:* ${formData.eventLocation}

 *Additional Details:*
${formData.additionalDetails || "None"}
    `;

    // WhatsApp business number (replace with your actual number)
    const whatsappNumber = "917028333337"; // Your business number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Reset form after sending
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      eventLocation: "",
      additionalDetails: "",
    });
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      eventType: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance uppercase tracking-wider">
              Event Inquiries
            </h1>
            <p className="text-xl text-foreground">
              Make your special occasions sweeter with our premium waffles and
              desserts!
            </p>
          </div>
        </section>

        {/* Event Inquiry Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 text-8xl">🧇</div>
            <div className="absolute top-40 right-20 text-6xl">☕</div>
            <div className="absolute bottom-20 left-20 text-7xl">🍰</div>
            <div className="absolute bottom-40 right-10 text-8xl">🧁</div>
            <div className="absolute top-1/2 left-1/3 text-5xl">🍓</div>
            <div className="absolute top-1/3 right-1/3 text-6xl">🍫</div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <Card className="border border-border shadow-2xl bg-background/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-4xl font-bold text-center mb-8 text-primary uppercase tracking-wider">
                  Event Inquiries
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="bg-background border-border text-foreground"
                      />
                    </div>

                    {/* Event Type */}
                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Event Type
                      </label>
                      <Select
                        onValueChange={handleSelectChange}
                        value={formData.eventType}
                        required
                      >
                        <SelectTrigger className="bg-background border-border text-foreground">
                          <SelectValue placeholder="Corporate Event" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">
                            Corporate Event
                          </SelectItem>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="birthday">
                            Birthday Party
                          </SelectItem>
                          <SelectItem value="anniversary">
                            Anniversary
                          </SelectItem>
                          <SelectItem value="social">
                            Social Gathering
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company/Organization Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company/Organization Name
                      </label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company/Organization Name"
                        className="bg-background border-border text-foreground"
                      />
                    </div>

                    {/* Date of Event */}
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Date of Event
                      </label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="bg-background border-border text-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="bg-background border-border text-foreground"
                      />
                    </div>

                    {/* Event Location */}
                    <div>
                      <label
                        htmlFor="eventLocation"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Event Location (City)
                      </label>
                      <Input
                        id="eventLocation"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        required
                        placeholder="Enter your event location"
                        className="bg-background border-border text-foreground"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="bg-background border-border text-foreground"
                    />
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label
                      htmlFor="additionalDetails"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Additional Details (Optional)
                    </label>
                    <Textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      placeholder="Tell us more about your event requirements..."
                      rows={4}
                      className="bg-background border-border text-foreground"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto px-16 bg-primary hover:bg-primary/90 text-white text-lg font-semibold"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8 uppercase tracking-wider">
              Catering Services
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We specialize in making your events memorable with our delicious
              waffles and desserts. Whether it's a corporate event, wedding,
              birthday party, or any special occasion, we've got you covered!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  All Events
                </h3>
                <p className="text-foreground/80">
                  Corporate, weddings, birthdays & more
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Expert Chefs
                </h3>
                <p className="text-foreground/80">Professional catering team</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🧇</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Fresh & Premium
                </h3>
                <p className="text-foreground/80">
                  Quality ingredients guaranteed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
