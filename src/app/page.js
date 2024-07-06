import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import PersonalProjects from "./components/home/personalProjects/PersonalProjects";
import Projects from "./components/home/projects/Projects";
import Skills from "./components/home/skills/Skills";
import Work from "./components/home/work/Work";

export default function Home() {
  return (
    <>
         <Hero />
         <Projects />
         <PersonalProjects />
         <Skills />
         <Work />
         <Footer />
    </>
  );
}
