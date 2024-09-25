import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import SkillPage from "./components/SkillPage";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Hero />
      <About />
      <SkillPage />
      <Portfolio />
      <Contact />
    </div>
  );
}
