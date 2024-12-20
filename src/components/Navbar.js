import Image from "next/image";
import Link from "next/link";
import React from "react";

const menus = [
  { name: "About", href: "/" },
  { name: "Our Vision", href: "/" },
  { name: "Contact Us", href: "/" },
];

function Navbar({ bg }) {
  return (
    <div
      className={`w-full text-text fixed h-[100px] z-40 ${
        bg > 80 ? "bg-background" : "bg-transparent"
      }`}
    >
      <div class="xl:max-w-5xl mx-auto flex flex-row justify-between h-[100px] items-center px-10 xl:px-0">
        <h1 className="text-[20px] uppercase font-[600] leading-[27.5]">
          ORID
        </h1>
        <ul className="hidden md:flex md:flex-row md:space-x-12 md:items-center">
          {menus.map((menu, index) => (
            <li className="" key={menu.name}>
              <Link href={menu.href}>{menu.name}</Link>
            </li>
          ))}
          <li className="font-[600]">
            {/* <Link
              href="/buy-nfts"
              className="flex flex-row items-center w-fit pr-3 bg-buttonPrimary justify-center rounded-full"
            >
              <Image
                src="/nft_buy.svg"
                alt="NFT Buy Icon"
                width={42}
                height={42}
              />
              <span>buy nfts</span>
            </Link> */}
          </li>
        </ul>
        <Image
          src="/hamburger_menu.svg"
          width={25}
          height={20}
          className="md:hidden cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
