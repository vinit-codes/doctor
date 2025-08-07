"use client";

import { useState } from 'react';
import { Sparkles, Zap, Smile, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Sparkles,
    title: 'Cosmetic Dermatology',
    description: 'Advanced skin rejuvenation treatments',
    details: 'Botox, fillers, chemical peels, microneedling, and laser resurfacing for a youthful, radiant complexion.',
    image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    treatments: ['Botox & Dysport', 'Dermal Fillers', 'Chemical Peels', 'Microneedling']
  },
  {
    icon: Zap,
    title: 'Laser Treatments',
    description: 'Cutting-edge laser technology solutions',
    details: 'IPL, fractional CO2, hair removal, and skin tightening using the latest FDA-approved laser systems.',
    image: 'https://images.pexels.com/photos/3985172/pexels-photo-3985172.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    treatments: ['IPL Photofacial', 'Laser Hair Removal', 'CO2 Resurfacing', 'Skin Tightening']
  },
  {
    icon: Smile,
    title: 'Dental Aesthetics',
    description: 'Complete smile transformation',
    details: 'Veneers, teeth whitening, and orthodontics for a perfect, confident smile that complements your facial features.',
    image: 'https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    treatments: ['Porcelain Veneers', 'Professional Whitening', 'Invisalign', 'Gum Contouring']
  },
  {
    icon: Heart,
    title: 'Hair Restoration',
    description: 'Revolutionary hair growth solutions',
    details: 'PRP therapy, mesotherapy, and advanced transplantation techniques for natural, lasting hair restoration.',
    image: 'https://images.pexels.com/photos/8142020/pexels-photo-8142020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    treatments: ['PRP Therapy', 'Mesotherapy', 'Hair Transplant', 'Scalp Micropigmentation']
  }
];

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold text-deep-navy dark:text-ivory mb-4 sm:mb-6">
            Our <span className="text-gradient-gold">Signature Services</span>
          </h2>
          <p className="font-montserrat text-xl text-deep-navy/70 dark:text-ivory/70 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of aesthetic treatments, each designed to enhance your natural beauty 
            with precision, artistry, and the highest safety standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Card */}
                <div className="glass-card dark:glass-card-dark rounded-2xl p-8 h-full transition-all duration-500 hover-gold-glow group-hover:scale-105 group-hover:border-gold/50">
                  {/* Service Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-deep-navy" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="font-playfair text-2xl font-semibold text-deep-navy dark:text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-montserrat text-deep-navy/70 dark:text-ivory/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Treatments List - Shows on Hover */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    hoveredService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-2 mb-6">
                      {service.treatments.map((treatment, idx) => (
                        <div key={idx} className="flex items-center text-sm text-deep-navy/60 dark:text-ivory/60">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                          {treatment}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-gold/30 text-gold hover:bg-gold hover:text-deep-navy transition-all duration-300 group-hover:border-gold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Floating Detail Card - Shows on Hover */}
                <div className={`absolute top-full left-0 right-0 mt-4 glass-card dark:glass-card-dark rounded-2xl p-6 transition-all duration-500 z-20 ${
                  hoveredService === index 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  <p className="font-montserrat text-deep-navy dark:text-ivory text-sm leading-relaxed">
                    {service.details}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gold/20">
                    <Button size="sm" className="bg-gold hover:bg-gold/90 text-deep-navy font-medium">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="font-cormorant text-2xl text-deep-navy/80 dark:text-ivory/80 italic mb-8">
            "Every treatment is tailored to your unique aesthetic goals"
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-deep-navy font-semibold px-8 py-4 hover-gold-glow transition-all duration-300"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}