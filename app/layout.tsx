import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@layout/Footer'
import Header from '@layout/Header'

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
        {/* <Header /> */}
          <main className=''>
            {children}
          </main>
        <Footer />
      </body>

    

    </html>
  )
}
