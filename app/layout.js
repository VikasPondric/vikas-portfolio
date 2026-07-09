import { Inter, Bricolage_Grotesque, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from '@/components/portfolio/ThemeProvider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const serif = Instrument_Serif({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata = {
  title: 'Vikas Pondric — Frontend Developer & Creative Web Architect',
  description: 'Award-winning frontend developer crafting premium, interactive web experiences. Specializing in React, Next.js, WordPress, and creative animations.',
  keywords: ['Vikas Pondric', 'Frontend Developer', 'Creative Developer', 'WordPress Expert', 'React', 'Next.js', 'Web Designer'],
  authors: [{ name: 'Vikas Pondric' }],
  openGraph: {
    title: 'Vikas Pondric — Frontend Developer',
    description: 'Premium interactive web experiences, handcrafted.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#0a0a0a', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${display.variable} ${serif.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <Providers>
            {children}
            <Toaster position="bottom-right" theme="dark" richColors />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
