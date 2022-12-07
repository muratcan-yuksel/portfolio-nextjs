import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  About,
  BackgroundCircles,
  ContactMe,
  ExperienceCard,
  Header,
  Hero,
  Projects,
  Skill,
  Skills,
  WorkExperience,
} from "../components";
//sanity client from lib folder
import { client } from "../lib/client";

export default function Home({ experience, pageInfoData, skills, projects }) {
  return (
    <div
      //  tailwind scrollbar definitions are here
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Murat Can Yüksel - Full Stack Web3 Developer</title>
      </Head>
      <Header />

      {/*Hero  */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/*About */}
      <section id="about" className="snap-center">
        <About data={pageInfoData} />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-end">
        <WorkExperience data={experience} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills data={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects data={projects} />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      {/* sticky footer */}

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            Made by Murat Can Yüksel with love
            {/* <img src="" alt="" /> */}
          </div>
        </footer>
      </Link>
      {console.log(experience)}
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "experience"]';
  const experience = await client.fetch(query);

  const pageInfoQuery = '*[_type == "pageInfo"]';
  const pageInfoData = await client.fetch(pageInfoQuery);

  const skillQuery = '*[_type == "skill"]';
  const skills = await client.fetch(skillQuery);

  const projectQuery = '*[_type == "project"]';
  const projects = await client.fetch(projectQuery);

  return {
    props: { experience, pageInfoData, skills, projects },
  };
};
