import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { personalInfo } from '@/data/personal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: 'full stack developer, web developer, react, next.js, typescript, portfolio',
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalInfo.social.portfolio,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    images: ['/og-image.svg'],
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
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-arctic-50 via-ice-50 to-frost-50 text-arctic-900 antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
