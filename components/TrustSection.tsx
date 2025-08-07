"use client";

import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const certifications = [
  { name: 'FDA Approved', icon: Shield, description: 'All treatments use FDA-approved devices' },
  { name: 'Board Certified', icon: Award, description: 'Dermatologists with specialized training' },
  { name: 'ISO 9001', icon: CheckCircle, description: 'Quality management system certified' },
  { name: 'AACD Member', icon: Star, description: 'American Academy of Cosmetic Dentistry' }
];

const mediaLogos = [
  { name: 'Vogue', width: 120 },
  { name: 'Harper\'s Bazaar', width: 140 },
  { name: 'Elle', width: 80 },
  { name: 'Allure', width: 100 },
  { name: 'Marie Claire', width: 130 }
];

const teamMembers = [
  {
    name: 'Dr. Sarah Williams',
    title: 'Medical Director & Board-Certified Dermatologist',
    credentials: 'MD, FAAD, Fellowship in Mohs Surgery',
    experience: '15+ years',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    specialties: ['Injectable Treatments', 'Laser Therapy', 'Medical Dermatology']
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Cosmetic Surgeon & Aesthetic Medicine Specialist',
    credentials: 'MD, FACS, Board Certified Plastic Surgeon',
    experience: '12+ years',
    image: 'https://images.pexels.com/photos/6749772/pexels-photo-6749772.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    specialties: ['Body Contouring', 'Facial Aesthetics', 'Reconstructive Surgery']
  },
  {
    name: 'Dr. Emma Rodriguez',
    title: 'Aesthetic Dentist & Smile Design Expert',
    credentials: 'DDS, AACD Accredited, Fellowship in Aesthetic Dentistry',
    experience: '10+ years',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    specialties: ['Veneers', 'Smile Makeovers', 'Dental Implants']
  }
];

export function TrustSection() {
  return (
    <section id="trust" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Certifications */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-deep-navy dark:text-ivory mb-6">
            Why <span className="text-gradient-gold">Trust</span> Luxe Aesthetics
          </h2>
          <p className="font-montserrat text-xl text-deep-navy/70 dark:text-ivory/70 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is recognized by leading medical boards, 
            featured in prestigious publications, and trusted by discerning clients.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            
            return (
              <div
                key={index}
                className="glass-card dark:glass-card-dark rounded-2xl p-8 text-center hover-gold-glow transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-deep-navy dark:text-ivory mb-2">
                  {cert.name}
                </h3>
                <p className="font-montserrat text-sm text-deep-navy/70 dark:text-ivory/70 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured In Section */}
        <div className="text-center mb-20">
          <h3 className="font-playfair text-3xl font-semibold text-deep-navy dark:text-ivory mb-8">
            As Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {mediaLogos.map((logo, index) => (
              <div
                key={index}
                className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: logo.width }}
              >
                <div className="font-playfair font-bold text-2xl text-deep-navy dark:text-ivory">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="font-playfair text-4xl font-semibold text-deep-navy dark:text-ivory mb-6">
              Meet Our <span className="text-gradient-gold">Expert Team</span>
            </h3>
            <p className="font-montserrat text-lg text-deep-navy/70 dark:text-ivory/70 max-w-2xl mx-auto leading-relaxed">
              Board-certified specialists with decades of combined experience in aesthetic medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card dark:glass-card-dark rounded-2xl overflow-hidden hover-gold-glow transition-all duration-300 group"
              >
                {/* Member Photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-gold text-deep-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-8">
                  <h4 className="font-playfair text-2xl font-semibold text-deep-navy dark:text-ivory mb-2">
                    {member.name}
                  </h4>
                  <p className="font-montserrat text-gold font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="font-montserrat text-sm text-deep-navy/70 dark:text-ivory/70 mb-4">
                    {member.credentials}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <p className="font-montserrat text-sm font-medium text-deep-navy dark:text-ivory mb-2">
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 text-center">
          {[
            { icon: Users, number: '2,000+', label: 'Happy Clients' },
            { icon: Award, number: '50+', label: 'Industry Awards' },
            { icon: Clock, number: '15+', label: 'Years Experience' },
            { icon: Shield, number: '100%', label: 'Safety Record' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div key={index} className="glass-card dark:glass-card-dark rounded-2xl p-8">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-gold" />
                </div>
                <div className="text-4xl font-playfair font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-montserrat text-deep-navy/70 dark:text-ivory/70">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}