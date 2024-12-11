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
    <div className="py-[35px] border-b border-b-[var(--border-color)]">
      <div className="max-w-[1512px] w-[90%] mx-auto flex justify-between">
        {/* Logo Section */}
        <Link href="/" className="relative w-[274px] h-[71px]">
          <Image
            alt="discountme"
            src="/assets/logo.png"
            fill
            className="object-contain"
          />
        </Link> 

        {/* Search Section */}
        <div className="flex gap-[40px] item-center ">
          <div className="flex rounded-[50px] p-[12px_18px_12px_16px]  font-['Poppins'] border border-[var(--border-color)] gap-2 flex relative items-center">
            <input
              type="text"
              placeholder="Search"
              className=" px-2 py-1"
            />
            < FiSearch  className="absolute"/>
            <button className="ml-2 px-4 p-[14px_12px] bg-[var(--theme)] text-white rounded-md text-[16px] font-[400] font-[Figteer] leading-[17.60px]">
              Search
            </button>
          </div>
            <li className="list-none flex items-center gap-[8px]">
              <Link className="opacity-80 text-[var(--text-color)]  text-lg font-normal font-['Figtree'] leading-tight" href="/">All Category</Link> <MdKeyboardArrowDown className="text-[var(--text-color)] text-3xl "/>
            </li>
            <li className="list-none flex items-center gap-[8px]">
              <Link className="opacity-80 text-[var(--text-color)]  text-lg font-normal font-['Figtree'] leading-tight" href="/">About Us </Link>
            </li>
            <li className="list-none flex items-center gap-[8px]">
              <Link className="opacity-80 text-[var(--text-color)]  text-lg font-normal font-['Figtree'] leading-tight" href="/">Contact Us </Link>
            </li>
        </div>
        <div className="flex gap-[29.54px] justify-start items-center">
          <Link href=""><FaRegHeart className="w-[25.85px] h-[25.85px]" /></Link>
          <Link href="cart"><FiShoppingCart className="w-[25.85px] h-[25.85px]"/></Link>
          <Link href="login"><RiUserLine className="w-[25.85px] h-[25.85px]"/></Link>
        </div>
      </div>
    </div>
  );
}
