import Card from "./Card";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Ravi Koundilya",
    img: "ravi.jpg",
    // testi:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
  },
  {
    id: 2,
    name: "Srinath Murali",
    img: "srinath.jpg",
  //   testi:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
  },
 
];

function Testimonial() {
  return (
    <div className="w-full text-text font-outfit pt-[10vh] md:pt-[2.5vh] mt-5 md:mt-10 mb-16">
      <div className="xl:max-w-5xl mx-auto flex items-center space-x-18 px-10 xl:px-0 flex-col space-y-28">
        <article>
          {/* <h1 className="text-[16px] text-subText text-center md:text-[20px] leading-[110%] uppercase">
            Testimonials
          </h1> */}
          <h1 className="text-[3rem] text-center md:text-[4rem] font-bold leading-[110%] mt-5">
            Core Team Members
          </h1>
        </article>
        <div class="xl:flex xl:flex-row xl:space-x-6 mt-5 grid md:grid-cols-2 md:gap-5 grid-cols-1">
          {testimonials.map((testimonial) => (
            <Card data={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
