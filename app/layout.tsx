import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _montserrat = Montserrat({ subsets: ["latin"] });
const _openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Smartclues',
  description: 'A stunning hero section template with animated floating lines background',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_montserrat.className} ${_openSans.className}`}>
        {children}
        
      </body>
    </html>
  )
}
