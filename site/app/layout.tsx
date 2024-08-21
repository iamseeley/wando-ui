import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'wando-ui',
  description: 'Minimal, component collection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-2xl m-auto'>
          <Header />
          <main className=''>
            {children}
          </main>
          <Footer />
        </div>
        <Script src="https://esm.town/v/iamseeley/trackingScript" />
      </body>

    

    </html>
  )
}
