import React from 'react'
import Image from 'next/image'
import { SlArrowDown } from "react-icons/sl";
import { IoMdStar } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";
import { PiDotOutlineFill } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
export default function CategorieDetails() {
  return (
    <div>
        <div className="relative aspect-[18.57/1.2]">
            <Image alt="login" className="h-full w-full" fill src="/assets/categorie_slider/category_slider.png "/>
        </div>
        <div  className="max-w-[1512px] w-[90%] mx-auto py-8 ">
            <div className="grid grid-cols-2 gap-[28px]">
                <div className="grid grid-cols-7 ">
                    <div className=" flex flex-col justify-between  h-auto mr-4 gap-[32px]">
                        <button className="flex items-center justify-center text-xl text-[var(--gray)] "><SlArrowUp /></button>
                        <div className="flex flex-col gap-[13.8px]">
                        <div className=" border border-[var(--primary)] rounded-[4px] p-[4px] relative aspect-[93/104]">
                            <Image alt="login" className="rounded-[4px] h-full w-full" fill src="/assets/categorie_small/categorie_small_image.png "/>
                        </div>
                        <div className="relative aspect-[93/104]">
                            <Image alt="login" className="rounded-[4px] h-full w-full" fill src="/assets/categorie_small/categorie_small_image.png "/>
                        </div>
                        <div className="relative aspect-[93/104]">
                            <Image alt="login" className="rounded-[4px] h-full w-full" fill src="/assets/categorie_small/categorie_small_image.png "/>
                        </div>
                        </div>
                       
                        <button className="flex items-center justify-center text-xl text-[var(--gray)]"><SlArrowDown /></button>
                    </div>
                    <div className="col-span-6 relative flex  aspect-[641/453]">
                        <Image alt="login" className="h-full w-full" fill src="/assets/details_image/details_img.png "/>
                    </div>
                </div>
                <div>
                    <div className="mb-[13.818px] flex items-center gap-[9.21px]"><h3 className="text-[var(----gray-900)] text-5xl font-semibold font-['Figtree'] leading-[67.20px]">Smart Freezer</h3> <span className="px-[9.21px] py-[4.61px] bg-[#fdeee9] rounded text-[var(--theme)] text-base font-normal font-['Poppins'] leading-normal">In Stock</span></div>
                    <div className="flex items-center gap-3">
                    <div className="flex gap">
                    <IoMdStar className="text-3xl text-[var(--theme)]" />
                    <IoMdStar className="text-3xl text-[var(--theme)]" />
                    <IoMdStar className="text-3xl text-[var(--theme)]" />
                    <IoMdStar className="text-3xl text-[var(--theme)]" />
                    <IoMdStar className="text-3xl text-[var(--theme)]" />
                    </div>
                    <span className="flex gap-2 justify-center items-center font-normal font-['Poppins'] leading-normal text-[16.121px] text-[var(--gray)]">
                    4 Review  <span className="font-[500] text-[16px] text-[#b3b3b3]  leading-normal"><PiDotOutlineFill /></span>
                    </span>
                  </div>
                  <div className=" mt-[11px] text-[var(--theme)] text-[27.64px] font-medium font-['Poppins'] leading-[41.45px]">$17.28</div>
                  <div className="flex border-t flex-col mt-[27.64px] pt-[27.64px] gap-[27.64px]">
                    <div className="text-[var(----gray-900)] text-base font-medium font-['Poppins'] leading-normal">Category: <spna className="text-[#808080] text-base font-normal font-['Poppins'] leading-normal">Freeze</spna></div>
                    <p className="text-[#808080] text-base font-normal font-['Poppins'] leading-normal">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
                    <div className="grid grid-cols-8 gap-[13.818px]">
                        <div className="col-span-2 flex justify-between p-[9.212px] bg-white rounded-[195.76px] border border-[#e6e6e6]justify-center items-center"><button className="bg-[#f2f2f2] rounded-[195.76px] h-[40px] w-[40px] flex items-center justify-center"><FiMinus className='text-2xl text-[var(--gray)]'/></button><span className=" text-center text-[var(---gray-900)] text-lg font-normal font-['Poppins'] leading-7">5</span><button  className=" bg-[#f2f2f2] rounded-[195.76px]  h-[40px] w-[40px] flex items-center justify-center"><HiOutlinePlus className='text-2xl text-[var(--gray)]' /></button></div>
                        <button className="col-span-5 px-[46.06px] py-[18.42px] bg-[var(--theme)] rounded-[49.52px] flex items-center justify-center items-center gap-[18.42px] text-white text-lg font-semibold font-['Poppins'] leading-snug ">  Checkout  <HiOutlineShoppingBag className="text-white text-2xl" /> </button>
                        <button className="w-[59px] h-[59px] flex justify-center items-center  bg-[#dfe1e3] rounded-full"><FiShoppingCart className="text-2xl"/></button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}