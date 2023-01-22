import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Section({ data }) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 800,
    });
  });

  return (
    <div
      className={`w-full text-text flex ${
        data.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col items-center md:justify-around md:space-x-12 font-outfit`}
    >
      <Image
        src={`/${data.img}`}
        width={452.5}
        height={541}
        alt={data.img}
        data-aos="zoom-in-up"
        data-aos-duration={500}
        className="object-contain xl:w-[452.5px] xl:h-[541px] w-[276.3px] h-[305px] md:w-[350px] md:h-[400px]"
      />
      <article className="flex flex-col space-y-6 xl:mt-0 mt-8 xl:items-start text-center md:text-start items-center md:items-start">
        <h2 className="text-[20px] leading-[27.5px] tracking-[10%] uppercase text-subText">
          {data.subHeading}
        </h2>
        <h1 className="leading-[110%] font-bold text-[3rem] xl:text-[4rem] text-text">
          {data.heading}
        </h1>
        <p className="font-light text-[18px] xl:text-[20px] leading-[27.5px]">
          {data.desc}
        </p>
        <Link
          href={`/${data.button}`}
          className="leading-[27.5px] font-[600] text-[15px] xl:text-[20px] uppercase bg-buttonPrimary text-text xl:content-start content-center py-3 px-4 xl:px-7 w-fit rounded-full"
        >
          {data.button}
        </Link>
      </article>
    </div>
  );
}

export default Section;
