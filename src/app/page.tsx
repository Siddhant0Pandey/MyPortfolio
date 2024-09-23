import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import SkillPage from "./components/SkillPage";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Hero />
      <SkillPage />
      <Portfolio />
    </div>
  );
}
