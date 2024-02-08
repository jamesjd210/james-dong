import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/app/components/ui/header'
import Banner from '@/app/components/banner'
import Footer from '@/app/components/ui/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'James Dong\'s portfolio and website',
  description: 'Website to display all of James Dong\'s projects and experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
 