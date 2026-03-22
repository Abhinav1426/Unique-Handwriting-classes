import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Unique Handwriting Classes | Cursive Handwriting Classes in Hyderabad',
  description:
    'Unique Handwriting Classes offers cursive handwriting and handwriting improvement classes for children in Hyderabad. Improve neatness, spacing, letter formation, and writing confidence.',
  keywords:
    'handwriting classes in Hyderabad, cursive handwriting classes in Hyderabad, handwriting improvement for kids, kids handwriting classes Hyderabad, good handwriting classes Hyderabad, handwriting coaching Sanath Nagar',
  metadataBase: new URL('https://uniquehandwritingclasses.com'),
  openGraph: {
    title: 'Unique Handwriting Classes | Cursive Handwriting Classes in Hyderabad',
    description:
      'Unique Handwriting Classes offers cursive handwriting and handwriting improvement classes for children in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Unique Handwriting Classes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Handwriting Classes | Cursive Handwriting Classes in Hyderabad',
    description: "Improve your child's handwriting with expert guided classes in Hyderabad.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Unique Handwriting Classes',
  description:
    'Cursive handwriting and handwriting improvement classes for children in Hyderabad, Telangana.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shivaji Nagar',
    addressLocality: 'Sanath Nagar',
    addressRegion: 'Hyderabad, Telangana',
    postalCode: '500018',
    addressCountry: 'IN',
  },
  telephone: '+919989016831',
  email: 'mgoud7786@gmail.com',
  areaServed: {
    '@type': 'City',
    name: 'Hyderabad',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://uniquehandwritingclasses.com" />
      </head>
      <body className="font-jakarta antialiased bg-cream text-charcoal">{children}</body>
    </html>
  )
}
