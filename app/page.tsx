import About from "@/components/About/About";
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/contact/Contact";
import CarouselBanner from "@/components/home/CarouselBanner";
import ProjectContainer from "@/components/projects/ProjectContainer";
import ServicesContainer from "@/components/services/ServicesContainer";
import Testimony from "@/components/testimony/Testimony";





export default function Home() {
  return (
    <>
      <CarouselBanner />
      <ServicesContainer />
      <ProjectContainer />
      <About />
      <Testimony />
      <Blogs />
      <Contact />
    </>
  );
}
