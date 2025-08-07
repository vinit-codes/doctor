import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Luxe Aesthetics - Premier Cosmetic Dermatology Clinic',
  description: 'Redefining aesthetic excellence with board-certified specialists. Experience discreet, personalized cosmetic treatments in our luxury clinic.',
  keywords: 'cosmetic dermatology, laser treatments, aesthetic procedures, botox, fillers, luxury clinic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-montserrat">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}