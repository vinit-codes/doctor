"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Before & After', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Botox & Fillers', href: '/services/botox' },
    { label: 'Laser Treatments', href: '/services/laser' },
    { label: 'Chemical Peels', href: '/services/peels' },
    { label: 'Body Contouring', href: '/services/body' },
    { label: 'Hair Restoration', href: '/services/hair' },
    { label: 'Dental Aesthetics', href: '/services/dental' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-deep-navy text-ivory">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-3xl font-bold text-gradient-gold mb-6">
              Luxe Aesthetics
            </h3>
            <p className="font-montserrat text-ivory/80 leading-relaxed mb-6">
              Redefining aesthetic excellence with board-certified specialists and 
              cutting-edge treatments in the heart of Beverly Hills.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>123 Rodeo Drive, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>(555) 123-LUXE</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>info@luxeaesthetics.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-montserrat text-ivory/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="font-montserrat text-ivory/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-gold mb-6">
              Stay Connected
            </h4>
            <p className="font-montserrat text-ivory/80 text-sm mb-4">
              Subscribe to receive exclusive offers and aesthetic tips from our experts.
            </p>
            
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-ivory/10 border border-gold/30 rounded-lg px-3 py-2 text-sm font-montserrat text-ivory placeholder-ivory/60 focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-deep-navy px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-deep-navy transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-montserrat text-sm text-ivory/60">
              © 2024 Luxe Aesthetics. All rights reserved. | Licensed Medical Practice
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/hipaa" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}