"use client";

import { useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    age: 42,
    location: 'Beverly Hills, CA',
    treatment: 'Facial Rejuvenation Package',
    rating: 5,
    quote: "The level of care and attention to detail at Luxe Aesthetics is unparalleled. Dr. Williams and her team made me feel comfortable throughout the entire process, and the results exceeded my expectations.",
    fullReview: "I was hesitant about cosmetic treatments, but the consultation process was so thorough and educational. The clinic feels more like a luxury spa than a medical facility. Six months later, I look refreshed and natural - exactly what I wanted.",
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    videoThumbnail: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    name: 'Jennifer Chen',
    age: 38,
    location: 'Manhattan Beach, CA',
    treatment: 'Laser Skin Resurfacing',
    rating: 5,
    quote: "After years of sun damage, I thought there was no hope for my skin. The fractional CO2 treatment has given me back my confidence. The downtime was minimal and the results are incredible.",
    fullReview: "The team's expertise with laser technology is evident. They explained every step of the process and provided excellent aftercare instructions. My skin looks 10 years younger and feels amazing.",
    image: 'https://images.pexels.com/photos/3985172/pexels-photo-3985172.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    videoThumbnail: 'https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    name: 'Maria Rodriguez',
    age: 35,
    location: 'Santa Monica, CA',
    treatment: 'Body Contouring & Skin Tightening',
    rating: 5,
    quote: "Post-pregnancy, I struggled with loose skin and stubborn fat. The combination treatments at Luxe Aesthetics have transformed not just my body, but my self-confidence. I feel like myself again.",
    fullReview: "The non-invasive approach was perfect for my busy lifestyle. The staff understood my goals as a mother and created a treatment plan that fit my schedule. The results speak for themselves.",
    image: 'https://images.pexels.com/photos/8142020/pexels-photo-8142020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    videoThumbnail: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showFullReview, setShowFullReview] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setShowFullReview(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setShowFullReview(false);
  };

  const currentClient = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-br from-soft-rose/10 via-ivory to-marble-light dark:from-deep-navy dark:to-marble-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-deep-navy dark:text-ivory mb-6">
            Client <span className="text-gradient-gold">Success Stories</span>
          </h2>
          <p className="font-montserrat text-xl text-deep-navy/70 dark:text-ivory/70 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued clients who have experienced the Luxe Aesthetics difference. 
            Their authentic testimonials reflect our commitment to excellence.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Client Video/Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden luxury-shadow">
                <img
                  src={currentClient.videoThumbnail}
                  alt={`${currentClient.name} testimonial`}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Play Overlay */}
                <div className="absolute inset-0 bg-deep-navy/20 flex items-center justify-center group hover:bg-deep-navy/10 transition-all duration-300 cursor-pointer">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-deep-navy ml-1" />
                  </div>
                </div>

                {/* Client Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card dark:glass-card-dark rounded-2xl p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={currentClient.image}
                        alt={currentClient.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                      />
                      <div>
                        <h4 className="font-montserrat font-semibold text-deep-navy dark:text-ivory">
                          {currentClient.name}
                        </h4>
                        <p className="text-sm text-deep-navy/70 dark:text-ivory/70">
                          {currentClient.treatment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-8">
              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
                <span className="ml-3 font-montserrat text-deep-navy/70 dark:text-ivory/70">
                  Verified Review
                </span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-12 h-12 text-gold/30 absolute -top-2 -left-2" />
                <blockquote className="font-cormorant text-2xl md:text-3xl leading-relaxed text-deep-navy dark:text-ivory italic pl-8">
                  {currentClient.quote}
                </blockquote>
              </div>

              {/* Full Review - Expandable */}
              <div className={`transition-all duration-500 overflow-hidden ${
                showFullReview ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="font-montserrat text-deep-navy/80 dark:text-ivory/80 leading-relaxed border-l-2 border-gold pl-6 py-4">
                  {currentClient.fullReview}
                </p>
              </div>

              <Button
                variant="ghost"
                onClick={() => setShowFullReview(!showFullReview)}
                className="text-gold hover:bg-gold/10 font-medium"
              >
                {showFullReview ? 'Show Less' : 'Read Full Review'}
              </Button>

              {/* Client Info */}
              <div className="border-t border-gold/20 pt-6">
                <div className="flex justify-between items-center text-sm text-deep-navy/60 dark:text-ivory/60">
                  <div>
                    <span className="font-medium">{currentClient.name}</span>, Age {currentClient.age}
                  </div>
                  <div>
                    {currentClient.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gold/10 hover:bg-gold hover:text-deep-navy rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setShowFullReview(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-gold scale-125' : 'bg-gold/30 hover:bg-gold/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gold/10 hover:bg-gold hover:text-deep-navy rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 text-center">
          {[
            { number: '98%', label: 'Client Satisfaction Rate' },
            { number: '500+', label: 'Successful Treatments' },
            { number: '15+', label: 'Years of Excellence' },
            { number: '24/7', label: 'Aftercare Support' }
          ].map((stat, index) => (
            <div key={index} className="glass-card dark:glass-card-dark rounded-2xl p-6">
              <div className="text-4xl font-playfair font-bold text-gradient-gold mb-2">
                {stat.number}
              </div>
              <div className="font-montserrat text-deep-navy/70 dark:text-ivory/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-2xl text-deep-navy/80 dark:text-ivory/80 italic mb-8">
            "Join our community of satisfied clients and start your transformation today"
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-deep-navy font-semibold px-8 py-4 hover-gold-glow transition-all duration-300"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
}