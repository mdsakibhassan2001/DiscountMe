"use client";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import Items from "../items/Items";
import Link from "next/link";
export default function ShopDetails() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="max-w-[1512px] w-[90%] mx-auto py-10">
      <div className="relative">
        <Slider {...settings}>
          <div className="relative aspect-[2951/1209]">
            <Image
              className="h-full w-full "
              alt="slider"
              fill
              src="/assets/shop_slider/villagio1.png"
            />
          </div>
          <div className="relative   aspect-[2951/1209]">
            <Image
              className="h-full w-full"
              alt="slider"
              fill
              src="/assets/shop_slider/villagio1.png"
            />
          </div>
        </Slider>
        <Image
          className="p-[12px] pb-[16px]"
          alt="slider"
          src="/assets/shop_slider/Rectangle.png"
          fill
          priority
        />
      </div>

      <h2 className="text-[40px] mb-10 py-4 font-[500] border-b border-b-[var(--gray)]">
        <span className="text-[var(--primary)]">Villagio</span> Restaurant & Bar
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[18.11px]">
            <MdLocationPin className="text-[var(--primary)] w-[36.23px] h-[36.23px]" />
            <p className="text-2xl text-[#334a55] flex flex-col font-['Kumbh Sans']">
              <span>360 San Lorenzo Avenue, Suite</span>
              <span>1430 Coral Gables, FL 33146-1865 |</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap">
              <IoMdStar className="text-5xl text-[var(--theme)]" />
              <IoMdStar className="text-5xl text-[var(--theme)]" />
              <IoMdStar className="text-5xl text-[var(--theme)]" />
              <IoMdStar className="text-5xl text-[var(--theme)]" />
              <IoMdStar className="text-5xl text-[var(--light-gray)]" />
            </div>
            <span className="text-[#1d242d] text-[38.60px] font-bold font-['Urbanist'] tracking-wide">
              4.3
            </span>
          </div>
        </div>
        <div className="flex gap-5 items-start">
          <div className="mt-2">
            <FaBars className="w-[30.19px] h-[30.19px] text-[var(--primary)]" />
          </div>

          <p className="text-[var(--dark)] text-xl text-justify">
            Villagio restaurant and bar has one mission: to provide guests with
            a fine and fresh seafood experience. Featuring seasonal and
            sustainable seafood that is flown in fresh daily, our chef-driven
            menu proves that no matter when you’re dining, seafood can be truly
            exceptional. to provide guests with a fine
            <Link className="font-bold" href="">
              {" "}
              Read More...
            </Link>
          </p>
        </div>
      </div>
      <Items />
    </div>
  );
}
