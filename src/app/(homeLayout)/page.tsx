import About from "@/components/home/about/About";
import Banner from "@/components/home/banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
  <main className="mt-32 mb-8 max-w-7xl mx-auto">
      <Banner />
      <About />
  </main>
  );
}
