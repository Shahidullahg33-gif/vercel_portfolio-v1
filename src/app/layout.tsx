import './globals.css'
import './tokens.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { personalInfo } from '@/data/personal'
import CustomCursor from '@/components/CustomCursor'
import Enhancements from '@/components/Enhancements'
import Navigation from '@/components/Navigation'
import ReadingControls from '@/components/ReadingControls'
import ParallaxDecor from '@/components/ParallaxDecor'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <div id="scroll-progress" aria-hidden="true" />
  <Navigation />
        <CustomCursor />
        <Enhancements />
  <ParallaxDecor />
        <main id="main" className="site-main max-w-6xl mx-auto px-4">{children}</main>
  <ReadingControls />
        <script dangerouslySetInnerHTML={{__html:`(()=>{const k='pref-theme-v2';const r=document.documentElement;const s=localStorage.getItem(k);if(s)r.dataset.theme=s;else if(matchMedia('(prefers-color-scheme: dark)').matches) r.dataset.theme='dark';})();`}} />
  <script defer type="module" dangerouslySetInnerHTML={{__html:`const bar=document.getElementById('scroll-progress');function u(){const h=document.documentElement;const p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;bar.style.width=p+'%'};addEventListener('scroll',u,{passive:true});u();
// nav shrink
const nav=document.querySelector('.site-nav');let last=0;addEventListener('scroll',()=>{const y=scrollY; if(!nav) return; if(y>40) nav.classList.add('nav-scrolled'); else nav.classList.remove('nav-scrolled'); last=y;},{passive:true});
// idle prefetch simple heuristic: prefetch links in viewport not current
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const a=e.target;io.unobserve(a);const href=a.getAttribute('href');if(href && href.startsWith('/') && href.split('#')[0]!==location.pathname){const l=document.createElement('link');l.rel='prefetch';l.href=href;document.head.appendChild(l);}}})});document.querySelectorAll('a[href^="/"]').forEach(a=>io.observe(a));}
`}} />
      </body>
    </html>
  )
}
