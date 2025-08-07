"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const beforeAfterImages = [
  {
    category: 'Facial Rejuvenation',
    before: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    after: 'https://images.pexels.com/photos/3985172/pexels-photo-3985172.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    treatment: 'Botox + Dermal Fillers',
    duration: '3 months post-treatment'
  },
  {
    category: 'Laser Skin Resurfacing',
    before: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    after: 'https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    treatment: 'Fractional CO2 Laser',
    duration: '6 months post-treatment'
  },
  {
    category: 'Body Contouring',
    before: 'https://images.pexels.com/photos/8142020/pexels-photo-8142020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    after: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    treatment: 'CoolSculpting + RF Tightening',
    duration: '4 months post-treatment'
  }
];

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-marble dark:bg-deep-navy">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold text-deep-navy dark:text-ivory mb-4 sm:mb-6">
            Real <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="font-montserrat text-xl text-deep-navy/70 dark:text-ivory/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Witness the transformative power of our treatments through authentic before and after images 
            from our satisfied clients who have consented to share their journeys.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-deep-navy/60 dark:text-ivory/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>Patient Consent Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gold" />
              <span>Unretouched Images</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              <span>Medical Review Approved</span>
            </div>
          </div>
        </div>

        {/* Gallery Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Display */}
          <div className="relative overflow-hidden rounded-3xl luxury-shadow">
            <div className="relative aspect-[16/10] bg-gradient-to-r from-marble-light to-soft-rose/20">
              {/* Before/After Images */}
              <div className="absolute inset-0 flex">
                {/* Before Image */}
                <div className={`relative w-1/2 transition-all duration-700 ${showBefore ? 'opacity-100' : 'opacity-50'}`}>
                  <img
                    src={beforeAfterImages[currentSlide].before}
                    alt="Before treatment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-deep-navy/80 backdrop-blur-sm text-ivory px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className={`relative w-1/2 transition-all duration-700 ${!showBefore ? 'opacity-100' : 'opacity-50'}`}>
                  <img
                    src={beforeAfterImages[currentSlide].after}
                    alt="After treatment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-gold text-deep-navy px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gold transform -translate-x-1/2 z-10" />
              
              {/* Toggle Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={() => setShowBefore(!showBefore)}
                  className="w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Eye className="w-6 h-6 text-deep-navy" />
                </button>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold hover:text-deep-navy transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold hover:text-deep-navy transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Information */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-navy/90 to-transparent p-8">
              <div className="text-center text-ivory">
                <h3 className="font-playfair text-2xl font-semibold mb-2">
                  {beforeAfterImages[currentSlide].category}
                </h3>
                <p className="font-montserrat text-ivory/80 mb-1">
                  {beforeAfterImages[currentSlide].treatment}
                </p>
                <p className="font-montserrat text-sm text-ivory/60">
                  {beforeAfterImages[currentSlide].duration}
                </p>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-gold scale-125' : 'bg-gold/30 hover:bg-gold/60'
                }`}
              />
            ))}
          </div>

          {/* Treatment Categories */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {beforeAfterImages.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`glass-card dark:glass-card-dark rounded-2xl p-6 text-left transition-all duration-300 hover-gold-glow ${
                  currentSlide === index ? 'ring-2 ring-gold' : ''
                }`}
              >
                <h4 className="font-playfair text-xl font-semibold text-deep-navy dark:text-ivory mb-2">
                  {item.category}
                </h4>
                <p className="font-montserrat text-deep-navy/70 dark:text-ivory/70 text-sm mb-3">
                  {item.treatment}
                </p>
                <div className="flex items-center text-xs text-gold">
                  <Check className="w-3 h-3 mr-1" />
                  {item.duration}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-2xl text-deep-navy/80 dark:text-ivory/80 italic mb-8">
            "Your transformation awaits with our personalized treatment plans"
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-deep-navy font-semibold px-8 py-4 hover-gold-glow transition-all duration-300"
          >
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}