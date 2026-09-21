import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
 
import BackgroundEffects from "./common/BackgroundEffects"
import CursorHoverEffect from "./common/CursorHoverEffect";
import Loader from "./common/Loader";
const Header = lazy( () => import ("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const ProblemCount = lazy(() => import("./components/ProblemCount"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"))
const Services = lazy(() => import("./components/Services"))
const Experience = lazy(() => import("./components/Experience"))
const Contact = lazy( ()=> import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))
 

function getThemeAccentColor() {
  const rgbValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-blood-rgb")
    .trim();

  return `rgba(${rgbValue || "54,147,244"}, 0.95)`;
}

 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rootRef = useRef(null);

 

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <main ref={rootRef} className="relative isolate min-h-screen overflow-hidden bg-coal text-white">
      <BackgroundEffects position="top-right" />
      <CursorHoverEffect/>
      <Header
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((value) => !value)}
        onNavigate={scrollToSection}
      />
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ProblemCount />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Loader />}>
      <Footer/>
      </Suspense>
       
      
    </main>
  );
}
export default App;
