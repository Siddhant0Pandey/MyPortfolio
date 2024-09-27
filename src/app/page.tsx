import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import SkillPage from "./components/SkillPage";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="font-Poppins scroll-smooth focus:scroll-auto">
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
