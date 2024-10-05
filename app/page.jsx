import Blog from "./components/blog/page";
import Hero from "./components/hero/page"; 
import Projects from "./components/projects/page";

export default function Home() {
  return (
    <>
      <Hero /> 
      <Projects />
      <Blog />
    </>
  );
}
