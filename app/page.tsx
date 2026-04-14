import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Courses from "./components/courses";
import Results from "./components/results";
import WhyChooseUs from "./components/why-choose-us";
import AboutUs from "./components/about-us";
import Faculty from "./components/faculty";
import Testimonials from "./components/testimonials";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import FinalCTA from "./components/final-cta";
import Footer from "./components/footer";

export default function Home() {
  return (
 <div className="">
    <Navbar/>
    <Hero/>
    <Courses/>
    <Results/>
    <WhyChooseUs/>
    <AboutUs/>
    <Faculty/>
    <Testimonials/>
    <Gallery/>
    <Contact/>
    <FinalCTA/>
    <Footer/>
 </div>
  );
}
