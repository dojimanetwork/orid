import Image from "next/image";
import Link from "next/link";
import React from "react";

const menus = [
  {
    id: 1,
    name: "ORID",
    items: [
      { id: 1, name: "About", href: "/" },
      { id: 2, name: "Our Vision", href: "/" },
      
      
    ],
  },
  // {
  //   id: 2,
  //   name: "market",
  //   items: [
  //     { id: 1, name: "browse nfts", href: "/browse-nfts" },
  //     { id: 2, name: "buy nfts", href: "/buy-nfts" },
  //     { id: 3, name: "sell nfts", href: "/sell-nfts" },
  //   ],
  // },
  {
    id: 3,
    name: "contact",
    items: [
      { id: 1, name: "email", href: "/email" },
      { id: 2, name: "linkedin", href: "/linkedin" },
      { id: 3, name: "instagram", href: "/instagram" },
      { id: 3, name: "twitter", href: "/twitter" },
    ],
  },
];

function Footer() {
  return (
    <div className="w-full text-text h-[100px] mt-28">
      <div class="xl:max-w-5xl mx-auto flex xl:flex-row xl:space-x-20 px-10 xl:px-0 xl:justify-between flex-col items-center md:items-start xl:space-y-0 space-y-8">
        <h1 className="text-[20px] w-fit uppercase font-[600] leading-[27.5px]">
          ORID
        </h1>

        <div class="flex-row flex items-start space-x-16 justify-start content-start">
          {menus.map((menu) => (
            <span
              className="flex flex-col space-y-5 md:ml-0 ml-10"
              key={menu.id}
            >
              <p>{menu.name}</p>
              <ul>
                {menu.items.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </span>
          ))}

          <article className="md:flex-col space-y-8 hidden md:flex">
            <p>join our newsletter</p>
            <span className="flex flex-row space-x-5">
              <input
                type={"email"}
                className="flex flex-row items-start px-10 py-3 w-fit bg-[#8F8FDB] text-[#010922] justify-center rounded-full"
                placeholder="Enter your email address"
              />
              <Link
                href="/buy-nfts"
                className="flex flex-row items-center w-fit px-10 py-3 bg-buttonPrimary justify-center rounded-full"
              >
                <span>submit</span>
              </Link>
            </span>
          </article>
        </div>

        <article className="md:hidden flex-col space-y-8 flex">
          <p>join our newsletter</p>
          <span className="flex flex-row space-x-5">
            <input
              type={"email"}
              className="flex flex-row items-start px-10 py-3 w-fit bg-[#8F8FDB]text-[#010922] focus:border-buttonPrimary justify-center rounded-full"
              placeholder="Enter your email address"
            />
            <Link
              href="/buy-nfts"
              className="flex flex-row items-center w-fit px-10 py-3 bg-buttonPrimary justify-center rounded-full"
            >
              <span>submit</span>
            </Link>
          </span>
        </article>
      </div>
    </div>
  );
}

export default Footer;
