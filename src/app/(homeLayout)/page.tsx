import SmoothScroll from "@/animation/hooks/smoothScroll";
import About from "@/components/home/about/About";
import Banner from "@/components/home/banner/Banner";
import Project from "@/components/home/project/Project";
import Image from "next/image";

export default function Home() {
  return (
  <main className=" mt-20 lg:mt-32 mb-8 max-w-7xl mx-auto">
      <SmoothScroll>
        <Banner />
        <About />
        <Project />
      </SmoothScroll>
  </main>
  );
}
