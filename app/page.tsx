import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { GallerySection } from '@/components/GallerySection';
import { TrustSection } from '@/components/TrustSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TrustSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}