import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      //  tailwind scrollbar definitions are here
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>NextJS Portfolio</title>
      </Head>
      <Header />

      {/*Hero  */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* sticky footer */}

      {/* <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
      an image here
          <img src="" alt="" />
        </div>
      </footer>
      </Link> */}
    </div>
  );
}
