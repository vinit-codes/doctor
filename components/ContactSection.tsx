"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  // Added responsive styling classes to make the contact form more mobile-friendly
  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200";
  const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2";

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Clinic',
      details: ['123 Rodeo Drive', 'Beverly Hills, CA 90210'],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-LUXE', '24/7 Emergency Line'],
      link: 'tel:+15551235893'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@luxeaesthetics.com', 'consultations@luxeaesthetics.com'],
      link: 'mailto:info@luxeaesthetics.com'
    },
    {
      icon: Clock,
      title: 'Clinic Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Sat: 9:00 AM - 5:00 PM', 'Sun: By Appointment'],
      link: null
    }
  ];

  const services = [
    'Initial Consultation',
    'Botox & Injectable Fillers',
    'Laser Skin Treatments',
    'Chemical Peels',
    'Body Contouring',
    'Hair Restoration',
    'Dental Aesthetics',
    'Other Services'
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-ivory via-soft-rose/10 to-marble-light dark:from-deep-navy dark:to-marble-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-deep-navy dark:text-ivory mb-6">
            Begin Your <span className="text-gradient-gold">Aesthetic Journey</span>
          </h2>
          <p className="font-montserrat text-xl text-deep-navy/70 dark:text-ivory/70 max-w-3xl mx-auto leading-relaxed">
            Schedule a private consultation with our board-certified specialists. 
            Your transformation starts with a personalized treatment plan designed just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-card dark:glass-card-dark rounded-3xl p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="font-playfair text-3xl font-semibold text-deep-navy dark:text-ivory mb-4">
                Book Your Consultation
              </h3>
              <p className="font-montserrat text-deep-navy/70 dark:text-ivory/70">
                Complete the form below and our patient coordinator will contact you within 24 hours to schedule your appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat font-medium text-deep-navy dark:text-ivory mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/50 dark:bg-deep-navy/50 border-gold/30 focus:border-gold"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-medium text-deep-navy dark:text-ivory mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/50 dark:bg-deep-navy/50 border-gold/30 focus:border-gold"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Phone & Service Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-montserrat font-medium text-deep-navy dark:text-ivory mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/50 dark:bg-deep-navy/50 border-gold/30 focus:border-gold"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-medium text-deep-navy dark:text-ivory mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white/50 dark:bg-deep-navy/50 border border-gold/30 focus:border-gold rounded-md px-3 py-2 font-montserrat text-deep-navy dark:text-ivory"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-montserrat font-medium text-deep-navy dark:text-ivory mb-2">
                  Message or Questions
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/50 dark:bg-deep-navy/50 border border-gold/30 focus:border-gold rounded-md px-3 py-2 font-montserrat text-deep-navy dark:text-ivory resize-none"
                  placeholder="Tell us about your aesthetic goals or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-deep-navy font-semibold py-4 hover-gold-glow transition-all duration-300 group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Consultation Request
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-deep-navy/60 dark:text-ivory/60 font-montserrat text-center">
                Your information is confidential and HIPAA compliant. We will never share your personal details.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                
                return (
                  <div
                    key={index}
                    className="glass-card dark:glass-card-dark rounded-2xl p-6 hover-gold-glow transition-all duration-300 group cursor-pointer"
                    onClick={info.link ? () => window.open(info.link, '_blank') : undefined}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-playfair text-xl font-semibold text-deep-navy dark:text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="font-montserrat text-deep-navy/70 dark:text-ivory/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-deep-navy font-semibold py-4 hover-gold-glow transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Schedule Online Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full border-gold/30 text-gold hover:bg-gold hover:text-deep-navy py-4 font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-LUXE
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="glass-card dark:glass-card-dark rounded-2xl p-6 text-center">
              <div className="flex justify-center items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-montserrat text-deep-navy/70 dark:text-ivory/70 text-sm">
                Average response time: <span className="text-gold font-semibold">2 hours</span>
              </p>
              <p className="font-montserrat text-deep-navy/70 dark:text-ivory/70 text-sm">
                New patient welcome rate: <span className="text-gold font-semibold">98%</span>
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card dark:glass-card-dark rounded-2xl overflow-hidden h-64">
              <div
                className="w-full h-full bg-gradient-to-br from-marble-light to-soft-rose/20 flex items-center justify-center cursor-pointer group"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-montserrat font-semibold text-deep-navy dark:text-ivory">
                    View Location on Map
                  </p>
                  <p className="font-montserrat text-sm text-deep-navy/70 dark:text-ivory/70">
                    123 Rodeo Drive, Beverly Hills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}