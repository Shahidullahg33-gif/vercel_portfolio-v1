import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { personalInfo } from '@/data/personal'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: 'content writer, storyteller, copywriter, content strategy, digital marketing, creative writing',
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
      <body className={`${inter.className} antialiased`}>
        <CustomCursor />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
