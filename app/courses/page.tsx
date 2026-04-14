import React from 'react';
import CoursesHero from '@/app/courses/components/courses-hero';
import CoursesList from '@/app/courses/components/courses-list';
import CoursesFeatures from '@/app/courses/components/courses-features';
// import CoursesTestimonials from '@/app/courses/components/courses-testimonials';
import CoursesFAQ from '@/app/courses/components/courses-faq';
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';

export default function Page() {
  return (
    <main>
      <CoursesHero />
      <CoursesList />
      <CoursesFeatures />
      {/* <CoursesTestimonials /> */}
      <Testimonials/>
      <CoursesFAQ />
      <Contact/>
    </main>
  );
}
