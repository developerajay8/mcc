import React from 'react';
import GalleryHero from '@/app/gallery/components/gallery-hero';
import GalleryGrid from '@/app/gallery/components/gallery-grid';
import GalleryCategories from '@/app/gallery/components/gallery-categories';
import GalleryCTA from '@/app/gallery/components/gallery-cta';
import Contact from '../components/contact';

export default function Page() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
      <GalleryCategories />
      <GalleryCTA />
      <Contact/>
    </main>
  );
}
