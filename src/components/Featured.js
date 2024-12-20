import Image from "next/image";
import React from "react";
import Link from "next/link";

function Featured() {
  return (
    <div className="w-full mt-24 text-text">
      <div class="xl:max-w-5xl mx-auto flex flex-col justify-center items-center space-x-18 px-10 xl:px-0">
        <h1 className="leading-[41.2px] text-[29.9px]">Powered By</h1>

        <div class="flex flex-row items-center justify-center space-x-16 mt-8 overflow-x-auto md:overflow-visible scrollbar-hide md:px-0 px-48">
          <Link href = "https://www.dojima.foundation/" target="_blank">
          <Image
            src="/featureds/dojima-logo.png"
            alt="Featured 1"
            width={100}
            height={100}
            className="md:w-[250px] w-[150px] h-fit object-contain md:ml-0 ml-48"
          /></Link>
          
          
          
        </div>
      </div>
    </div>
  );
}

export default Featured;
