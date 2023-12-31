export const metadata = {
  title: 'James Dong',
  description: 'James Dong\'s personal website',
}

import Intro from '@/components/intro'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Intro />
      {/* <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}
