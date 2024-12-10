import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Items() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center"> 
        <h2 className="text-[var(--text-color)] text-5xl font-bold font-['Urbanist']">
          Items🔥
        </h2>
        <button className="bg-[#d9f3e3]  px-[33.94px] py-[8.55px] rounded-[72.73px]  gap-[24.24px] text-[var(--primary)] text-[29.09px] font-normal font-['Urbanist'] tracking-wide">See all</button>
      </div>
      
      <div className="grid grid-cols-3 py-8 gap-[21.19px] ">
        <Link href="categorie" className="shadow-custom rounded-[14.54px]">
          <div className="relative aspect-[493/223] ">
            <Image className="h-full w-full" fill alt="icon" src="/assets/items/item1.png" />
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-col gap-[7.27px] p-4">
              <span className="text-[32.71px] font-semibold font-['Urbanist'] leading-[45.79px] text-[var( --text-color)]">Long Sleeve T-Shirt</span>
              <small className="text-[21.81px] font-normal font-['Urbanist'] text-[#494c61]">Delicouse tackos, appetizing...</small>
            </div>
            <span className=" text-4xl font-bold font-['Urbanist'] leading-[43.61px]">$45.5</span>
          </div>
        </Link>
      </div>
    </div>
  );
}