import Link from "next/link";
import React from "react";

function AreYouReady() {
  return (
    <div className="w-full text-text font-outfit pt-[10vh] md:pt-[2.5vh] mt-5 md:mt-10">
      <div className="xl:max-w-5xl mx-auto flex items-center space-x-18 px-10 xl:px-0 flex-col space-y-14">
        <article>
          {/* <h1 className="text-[16px] text-subText max-w-xl text-center md:text-[20px] leading-[110%] uppercase">
            Are you ready?
          </h1> */}
          <h1 className="text-[3rem] max-w-xl text-center md:text-[4rem] font-bold leading-[110%] mt-5">
            be a part of the <span className="text-label">next big thing</span>
          </h1>
          
        </article>

        {/* <Link
          href={`/get-started`}
          className="leading-[27.5px] font-[600] text-[15px] xl:text-[20px] uppercase bg-buttonPrimary text-text xl:content-start content-center py-3 px-4 xl:px-7 w-fit rounded-full"
        >
          Get Started
        </Link> */}
        <p className="font-light text-[18px] xl:text-[20px] leading-[27.5px]">To establish a globally trusted, interoperable identity framework that simplifies digital interactions for users and businesses, enabling a more connected decentralized ecosystem. This framework ensures security, privacy, and seamless cross-platform experiences and will impact Individuals, Businesses and Developers.</p>
      </div>
    </div>
  );
}

export default AreYouReady;
