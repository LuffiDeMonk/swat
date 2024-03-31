import About from "@/components/About/About";
import ProjectContainer from "@/components/projects/ProjectContainer";
import ServicesContainer from "@/components/services/ServicesContainer";





export default function Home() {
  return (
    <>
      <ServicesContainer />
      <ProjectContainer />
      <About />
    </>
  );
}
