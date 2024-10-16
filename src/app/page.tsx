import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import SkillPage from "./components/SkillPage";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBarSection from "./components/NavBarSection";

export default function Home() {
  return (
    <div className="font-Poppins scroll-smooth focus:scroll-auto">
      <div className="z-50">
        <NavBarSection />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillPage />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
