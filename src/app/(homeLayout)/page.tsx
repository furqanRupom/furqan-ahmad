import SmoothScroll from "@/animation/hooks/smoothScroll";
import About from "@/components/home/about/About";
import Banner from "@/components/home/banner/Banner";
import BlogsSection from "@/components/home/blogs/Blogs";
import ContactMe from "@/components/home/contact/Contact";
import EducationExperience from "@/components/home/eduandex/EduAndEx";
import Project from "@/components/home/project/Project";
import Services from "@/components/home/services/Services";
import Skills from "@/components/home/skills/Skills";


export default function Home() {
  return (
  <main className=" mt-20 lg:mt-32 mb-8 max-w-7xl mx-auto">
      <Banner />
      <About />
      <Services />
      <Project />
      <Skills />
      <EducationExperience />
      <BlogsSection />
      <ContactMe />
     

  </main>
  );
}
