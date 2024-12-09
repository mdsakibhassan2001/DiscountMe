"use client";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import Items from "../items/Items";
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
      <h2 className="text-[40px] mb-10 py-4 font-[500] border-b border-b-[var(--gray)]">
        <span className="text-[var(--primary)]">Villagio</span> Restaurant & Bar
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center">
            <MdLocationPin className="text-[var(--primary)] text-3xl" />
            <p className="text-2xl text-[var(--dark)] flex flex-col font-['Kumbh Sans']">
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
            <span className="font-bold font-['Urbanist'] tracking-wide text-4xl">
              4.3
            </span>
          </div>
        </div>
        <div className="items-start">
          <FaBars className="text-4xl text-[var(--primary)]" />
          <p className="text-[var(--dark)] text-xl text-justify">
            Villagio restaurant and bar has one mission: to provide guests with
            a fine and fresh seafood experience. Featuring seasonal and
            sustainable seafood that is flown in fresh daily, our chef-driven
            menu proves that no matter when you’re dining, seafood can be truly
            exceptional. to provide guests with a fine
            <strong> Read More...</strong>
          </p>
        </div>
      </div>
      <Items />
    </div>
  );
}
