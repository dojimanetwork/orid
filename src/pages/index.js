import {
  Hero,
  Navbar,
  Featured,
  Section,
  AreYouReady,
  Footer,
} from "@/components";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import KeyFeatures from "@/components/KeyFeatures";

const sections = [
  {
    id: 1,
    subHeading: "The Problem",
    heading: "Why to streamline digital identity management?",
    desc: "Managing digital identities is challenging due to fragmented systems, causing inefficiencies and limiting trust and privacy. A unified approach is essential for seamless, secure cross-platform interactions.",
    
    img: "digital-identity-management.jpg",
  },
  {
    id: 2,
    subHeading: "Why ORID ?",
    heading: "Unified Identity Across Blockchains",
    desc: "Consolidate identities across chains into a single profile for easier management and verification. Simplify access while enhancing security and trust.",
    button: "Download on IOS",
    img: "Unified-identity.jpg",
  },
  {
    id: 3,
    subHeading: "24/7 Assurity",
    heading: "Privacy Assurance and Interoperability",
    desc: "Secure interactions with advanced privacy-preserving methods and bridge blockchain ecosystems for a unified user experience.",
    button: "Get Started",
    img: "privacy-assurance.png",
  },
  {
    id: 4,
    subHeading: "Scalable and Reliable",
    heading: "Designed for Blockchain Evolution",
    desc: "Built to adapt and grow with the blockchain landscape, our solutions offer scalability and flexibility. We ensure seamless integration as blockchain evolves. Stay ahead with a platform that evolves with the industry.",
    button: "Download on IOS",
    img: "blockchain-evolution.jpg",
  },
];

export default function Home() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Head>
        <title>ORID Responsive</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background font-outfit overflow-hidden relative z-20 pb-[50vh] md:pb-[25vh]">
        <Navbar bg={clientWindowHeight} />
        <div class="flex flex-col bg-background pt-[15vh] z-30">
          <Hero />
          <Featured />
          <div class="mt-24 md:pt-5 w-full text-text">
            <div class="xl:max-w-5xl mx-auto space-y-14 px-10 xl:px-0">
              {sections.map((section) => (
                <Section key={section.id} data={section} />
              ))}
            </div>
          </div>
          <KeyFeatures/>
          <Testimonial />
          <AreYouReady />
          <Footer />
        </div>
        <Image
          src="/ellipse_bg_1.png"
          alt="Ellipse Background"
          width={700}
          height={700}
          className="absolute -top-80 md:-top-96 md:-left-24 animate-pulse"
        />

        <Image
          src="/ellipse_bg_2.png"
          alt="Ellipse Background"
          width={450}
          height={450}
          className="absolute -right-48 top-80 animate-pulse"
        />
      </main>
    </>
  );
}
