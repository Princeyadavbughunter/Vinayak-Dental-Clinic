import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vinayak Dental Clinic | Best Dentist in Bilaspur, Chhattisgarh | Dental Braces & Aligners",
  description: "Dr. Rahul Singh - Teeth & Mouth Specialist with 16+ years experience. Advanced Dental Braces & Aligners in Bilaspur. Contact: 9244966707",
  keywords: "dentist Bilaspur, dental clinic Bilaspur, Dr. Rahul Singh, dental braces, aligners, dental braces & aligners, root canal treatment, best dentist Bilaspur",
  authors: [{ name: "Dr. Rahul Singh" }],
  creator: "Vinayak Dental Clinic",
  publisher: "Vinayak Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vinayakdentalclinic.com/'), // Placeholder URL, update if real one exists
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vinayak Dental Clinic | Best Dentist in Bilaspur",
    description: "Dr. Rahul Singh - 16+ years experience. Expert in Dental Braces & Aligners. Located at Imlipara Main Road, Bilaspur.",
    url: 'https://vinayakdentalclinic.com/',
    siteName: "Vinayak Dental Clinic",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Vinayak Dental Clinic",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vinayak Dental Clinic",
    description: "Advanced dental care by Dr. Rahul Singh in Bilaspur. Dental Braces & Aligners.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
