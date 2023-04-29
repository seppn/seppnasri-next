import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}

export default HomePage;
