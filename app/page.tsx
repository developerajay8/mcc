import Image from "next/image";
import Hero from "./components/hero";
import Courses from "./components/courses";
import Results from "./components/results";
import WhyChooseUs from "./components/why-choose-us";
import AboutUs from "./components/about-us";
import Faculty from "./components/faculty";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
// import Gallery from "./components/gallery";
import Contact from "./components/contact";
import FinalCTA from "./components/final-cta";

export default function Home() {
  return (
 <div className="">
    <Hero/>
    <Courses/>
    <Results/>
    <WhyChooseUs/>
    <FinalCTA/>
    <AboutUs/>
    <Faculty/>
    <Team/>
    <Testimonials/>
    {/* <Gallery/> */}
    <Contact/>
 </div>
  );
}
