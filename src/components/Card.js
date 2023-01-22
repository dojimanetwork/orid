import Image from "next/image";
import React from "react";

function Card({ data }) {
  return (
    <div className="flex flex-col bg-card hover:bg-[#2B315A] group hover:scale-105 transition-all max-w-sm space-y-8 rounded-[30px] font-outfit items-center px-10 py-16 relative md:mt-0 mt-5">
      <Image
        src={`/testimonials/${data.img}`}
        width={100}
        height={100}
        alt={data.name}
        className="rounded-full absolute -top-10 right-0 left-0 mx-auto"
      />

      <article className="text-center">
        <p className="text-text font-[20px]">{data.testi}</p>
        <p className="font-[600] leading-[27.5px] text-subText text-[18px] uppercase mt-5">
          {data.name}
        </p>
      </article>
    </div>
  );
}

export default Card;
