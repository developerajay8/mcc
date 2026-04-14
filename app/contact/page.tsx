import React from 'react';
import ContactHero from '@/app/contact/components/contact-hero';
// import ContactForm from '@/app/contact/components/contact-form';
import ContactInfo from '@/app/contact/components/contact-info';
import ContactSupport from '@/app/contact/components/contact-support';
import Contact from '../components/contact';

export default function Page() {
  return (
    <main>
      <ContactHero />
      {/* <ContactForm /> */}
      <Contact/>
      <ContactInfo />
      <ContactSupport />
    </main>
  );
}
