"use client";

import { useState, useEffect } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div
          className={`w-full h-full bg-gradient-to-br from-marble-light via-soft-rose/20 to-ivory transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/80 via-transparent to-ivory/60 dark:from-deep-navy/80 dark:to-deep-navy/60" />
        <div className="absolute inset-0 bg-gradient-gold opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center glass-card">
          <Sparkles className="w-8 h-8 text-gold" />
        </div>
      </div>
      <div className="absolute bottom-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-soft-rose/20 rounded-full glass-card" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-8 leading-tight">
            <span className="text-deep-navy dark:text-ivory">Redefining</span>
            <br />
            <span className="text-gradient-gold">Aesthetic Excellence</span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="font-cormorant text-2xl md:text-3xl text-deep-navy/80 dark:text-ivory/80 mb-4 italic">
            "Where science meets artistry in the pursuit of natural beauty"
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="font-montserrat text-lg md:text-xl text-deep-navy/70 dark:text-ivory/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience discreet, personalized care from board-certified specialists. 
            Your aesthetic journey begins with evidence-based treatments in our luxury clinic.
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-deep-navy font-semibold px-8 py-4 text-lg hover-gold-glow transition-all duration-300 group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Book Private Consultation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-deep-navy px-8 py-4 text-lg font-semibold transition-all duration-300 group glass-card hover-gold-glow"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch Our Story
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-in-up mt-16" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-montserrat text-deep-navy/60 dark:text-ivory/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-deep-navy font-bold text-xs">FDA</span>
              </div>
              <span>FDA Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-deep-navy font-bold text-xs">ISO</span>
              </div>
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold font-bold text-2xl">98%</span>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}