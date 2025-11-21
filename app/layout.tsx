import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
// import Loader from '@/components/Loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clinic Launch Academy',
  description: 'Your Turnkey Peptide Empire Opportunity. We\'ve Built it. You Sell it. You Own it. The biggest opportunity since online advertising, dropshipping, & crypto.',
  keywords: ['clinic launch academy', 'peptide business', 'connector economy', 'facilitation business', 'healthcare entrepreneurship', 'passive income'],
  authors: [{ name: 'Clinic Launch Academy' }],
  openGraph: {
    title: 'Clinic Launch Academy',
    description: 'Your Turnkey Peptide Empire Opportunity. We\'ve Built it. You Sell it. You Own it.',
    url: 'https://cliniclaunchacademy.com',
    siteName: 'Clinic Launch Academy',
    type: 'website',
    images: [
      {
        url: '/cla-logo.png',
        width: 1200,
        height: 630,
        alt: 'Clinic Launch Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic Launch Academy',
    description: 'Your Turnkey Peptide Empire Opportunity. We\'ve Built it. You Sell it. You Own it.',
    images: ['/cla-logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon_io/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon_io/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1284267006801087');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display: 'none'}} 
            src="https://www.facebook.com/tr?id=1284267006801087&ev=PageView&noscript=1" 
            alt="" />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {/* ContentSquare Tracking */}
        <Script 
          src="https://t.contentsquare.net/uxa/67c77c02b8866.js" 
          strategy="afterInteractive"
        />
        {/* End ContentSquare Tracking */}
        
        {/* <Loader /> */}
        {children}
      </body>
    </html>
  )
}

