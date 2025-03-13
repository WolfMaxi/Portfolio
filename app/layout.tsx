import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://maxiwolf.de'),
  title: {
    default: 'Maximilian Wolf',
    template: '%s | Maximilian Wolf'
  },
  description: 'Computer Science Student at the University of Ulm',
  keywords: ['Computer Science', 'Frontend Development', 'Machine Learning', 'Data Science', 'AI'],
  authors: [{ name: 'Maximilian Wolf' }],
  creator: 'Maximilian Wolf',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maxiwolf.de',
    title: 'Maximilian Wolf - CS Student',
    description: 'Computer Science Student at the University of Ulm currently pursuing my Bachelor degree',
    siteName: 'Maximilian Wolf Portfolio',
    images: [
      {
        url: '/assets/hero/avatar.jpg',
        width: 2169,
        height: 2169,
        alt: 'Maximilian Wolf - CS Student',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maximilian Wolf - CS Student',
    description: 'Computer Science Student at the University of Ulm currently pursuing my Bachelor degree',
    creator: '@MaxiWolf645',
    images: ['/assets/hero/avatar.jpg']
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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="canonical" href="https://maxiwolf.de"/>
      <title>Maximilian Wolf - CS Student</title>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maximilian Wolf",
              url: "https://maxiwolf.de",
              sameAs: [
                "https://github.com/WolfMaxi",
              ],
              jobTitle: "Bachelor Student",
              worksFor: {
                "@type": "Organization",
                name: "Ulm University"
              },
              alumniOf: {
                "@type": "Organization",
                name: "Ulm University"
              },
              description: "Computer Science Student at the University of Ulm"
            })
          }}
      />
    </head>
    <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}