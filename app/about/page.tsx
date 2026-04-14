import React from 'react'
import AboutHero from '@/app/about/components/about-hero'
import AboutStats from '@/app/about/components/about-stats'
import AboutJourney from '@/app/about/components/about-journey'
import AboutValues from '@/app/about/components/about-values'
import Contact from '../components/contact'

export default function Page() {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutJourney />
      <Contact/>
    </main>
  )
}
