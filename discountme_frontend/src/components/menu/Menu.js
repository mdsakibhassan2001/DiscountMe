import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Menu() {
  return (
    <div className="lg:py-[35px] py-[20px] border-b border-b-[var(--border-color)]">
      <div className="max-w-[1512px] w-[90%] mx-auto flex justify-between items-center ">
        {/* Logo Section */}
        <Link
          href="/"
          className="relative aspect-[274/71] w-[150px] lg:w-[274px]"
        >
          <Image
            alt="discountme"
            src="/assets/logo.png"
            fill
            className="h-full w-full object-contain"
          />
        </Link>

        {/* Search Section */}
        <form className="lg:flex hidden">
          <div className="flex w-[400px]  rounded-tl-[50px] rounded-bl-[50px]  font-['Poppins'] border border-[var(--border-color)] gap-2 flex  items-center border-r-0">
            <div className="pl-5">
              <FiSearch className="text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-[12px_18px_12px_16px] bg-[var(--Primary-White)] outline-0"
            />
          </div>
          <button className="px-[30px] text-[16px] bg-[var(--theme)] rounded-[0px_50px_50px_0px] text-[var(--Primary-White)]  justify-center items-center gap-3 inline-flex">
            Search
          </button>
        </form>
        <div className="lg:flex hidden gap-[40px] item-center">
          <li className="list-none flex items-center gap-[8px]">
            <Link
              className="opacity-80 text-[var(--text-color)]  text-lg font-normal font-['Figtree'] leading-tight"
              href="/"
            >
              All Category
            </Link>{" "}
            <MdKeyboardArrowDown className="text-[var(--text-color)] text-3xl " />
          </li>
          <li className="list-none flex items-center gap-[8px]">
            <Link
              className="opacity-80 text-[var(--text-color)]  text-lg font-normal font-['Figtree'] leading-tight"
              href="/"
            >
              About Us{" "}
            </Link>
          </li>
          <li className="list-none flex items-center gap-[8px]">
            <Link
              className="opacity-80 text-[var(--text-color)]  text-lg font-normal font-['Figtree'] leading-tight"
              href="/"
            >
              Contact Us{" "}
            </Link>
          </li>
        </div>
        <div className="flex lg:gap-[29.54px] gap-[18px] justify-start items-center">
          <Link href="">
            <FaRegHeart className="lg:w-[25.85px] w-[20px] lg:h-[25.85px] h-[20px]" />
          </Link>
          <Link href="cart">
            <FiShoppingCart className="lg:w-[25.85px] w-[20px] lg:h-[25.85px] h-[20px]" />
          </Link>
          <Link href="login">
            <RiUserLine className="lg:w-[25.85px] w-[20px] lg:h-[25.85px] h-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
