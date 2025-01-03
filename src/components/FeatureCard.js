import Image from "next/image";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function FeatureCard({ data }) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 800,
    });
  });
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration={500 * data.id}
      className="flex flex-col bg-card hover:bg-[#2B315A] group hover:scale-105 transition-all max-w-sm space-y-8 rounded-[30px] font-outfit items-center px-10 py-16 relative md:mt-0 mt-5"
    >
      {/* <Image
        src={`/testimonials/${data.img}`}
        width={150}
        height={200}
        alt={data.name}
        className="rounded-full absolute -top-10 right-0 left-0 mx-auto"
      /> */}

      <article className="text-center p-1">
        <p className="font-[600] leading-[27.5px] text-subText text-[18px] uppercase mt-3 mb-3">{data.name}</p>
        <p className="text-text font-[20px]">
          {data.testi}
        </p>
      </article>
    </div>
  );
}

export default FeatureCard;
