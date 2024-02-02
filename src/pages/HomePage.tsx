import About from "./about/About";
import Contact from "./contact/Contact";
import ExampleProjects from "./exampleProjects/ExampleProjects";
import Skills from "./skills/Skills";

const HomePage = () => {
  return (
    <main>
      <About />
      <Skills />
      <ExampleProjects />
      <Contact />
    </main>
  );
};

export default HomePage;
