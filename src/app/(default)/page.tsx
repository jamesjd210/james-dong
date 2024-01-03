export const metadata = {
  title: 'James Dong',
  description: 'James Dong\'s personal website',
}

import Intro from '@/app/components/intro'
import Features from '@/app/components/features'
import Newsletter from '@/app/components/newsletter'
import Zigzag from '@/app/components/zigzag'
import Testimonials from '@/app/components/testimonials'

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
