import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clinic Launch Academy',
  description: 'Turn connections into cash-flowing income streams. Master the connector economy and build a six or seven-figure peptide facilitation business with proven systems and elite support.',
  keywords: ['clinic launch academy', 'peptide business', 'connector economy', 'facilitation business', 'healthcare entrepreneurship', 'passive income'],
  authors: [{ name: 'Clinic Launch Academy' }],
  openGraph: {
    title: 'Clinic Launch Academy',
    description: 'Turn connections into cash-flowing income streams. The connector economy for elite entrepreneurs.',
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
    description: 'Turn connections into cash-flowing income streams. The connector economy for elite entrepreneurs.',
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
        <Loader />
        {children}
      </body>
    </html>
  )
}

