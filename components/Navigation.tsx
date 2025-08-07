"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-deep-navy/95 backdrop-blur-lg shadow-luxury'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="font-playfair text-3xl font-bold text-gradient-gold">
                Luxe Aesthetics
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-montserrat font-medium text-deep-navy dark:text-ivory hover:text-gold transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 transition-colors duration-300"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-gold" />
                ) : (
                  <Moon size={20} className="text-gold" />
                )}
              </button>

              {/* CTA Button */}
              <Button className="bg-gold hover:bg-gold/90 text-deep-navy font-semibold px-6 py-2 hover-gold-glow transition-all duration-300">
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-gold" />
                ) : (
                  <Menu size={24} className="text-gold" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-deep-navy/95 backdrop-blur-lg border-t border-gold/20">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-montserrat font-medium text-deep-navy dark:text-ivory hover:text-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                <Button className="bg-gold hover:bg-gold/90 text-deep-navy font-semibold px-6 py-2">
                  Book Consultation
                </Button>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 transition-colors duration-300"
                >
                  {theme === 'dark' ? (
                    <Sun size={20} className="text-gold" />
                  ) : (
                    <Moon size={20} className="text-gold" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}