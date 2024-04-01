import About from "@/components/About/About";
import ProjectContainer from "@/components/projects/ProjectContainer";
import ServicesContainer from "@/components/services/ServicesContainer";
import Testimony from "@/components/testimony/Testimony";





export default function Home() {
  return (
    <>
      <ServicesContainer />
      <ProjectContainer />
      <About />
      <Testimony />
    </>
  );
}
