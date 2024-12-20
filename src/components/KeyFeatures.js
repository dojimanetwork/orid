import Card from "./Card";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "./FeatureCard";

const testimonials = [
  {
    id: 1,
    name: "Identity Aggregation",
    img: "ravi.jpg",
    testi:
      "Combine multiple blockchain identities into a single, accessible profile to streamline user management. This consolidation enhances security, simplifies verification and improves overall usability across platforms.",
  },
  {
    id: 2,
    name: "Reputation Scoring",
    img: "srinath.jpg",
    testi:
      "Provide transparent, cross-chain reputation metrics by utilizing verified on-chain activity to ensure trustworthiness. These metrics offer a comprehensive view of user behavior, enhancing accountability and fostering confidence across platforms.",
  },
  {
    id: 3,
    name: "Developer Tools",
    img: "srinath.jpg",
    testi:
      "APIs and SDKs enable seamless integration of ORID into both existing and new applications. This flexibility allows developers to easily implement decentralized identity solutions while maintaining compatibility with their current systems.",
  },
 
];

function KeyFeatures() {
  return (
    <div className="w-full text-text font-outfit pt-[10vh] md:pt-[2.5vh] mt-5 md:mt-10 mb-16">
      
      <div className="xl:max-w-6xl mx-auto flex items-center space-x-18 px-10 xl:px-0 flex-col space-y-28">
        <article>
          {/* <h1 className="text-[16px] text-subText text-center md:text-[20px] leading-[110%] uppercase">
            Testimonials
          </h1> */}
          <h1 className="text-[3rem] text-center md:text-[4rem] font-bold leading-[110%] mt-5">
            Key Features
          </h1>
        </article>
        <div class="xl:flex xl:flex-row xl:space-x-6 mt-5 grid md:grid-cols-2 md:gap-5 grid-cols-1">
          {testimonials.map((testimonial) => (
            <FeatureCard data={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
