import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import ThemeToggle from "./components/theme-toggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />

      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
      </main>
    </>
  );
}