import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';
export default function TopRestaurant() {
  return (
    <div className="py-10 flex flex-col">

        <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col gap-[40px]">
                <h2 className="text-[#0c0c0c] text-8xl font-bold font-['Roboto'] leading-[105.60px]">Good <span className="text-[#ff7d29] text-8xl font-bold font-['Roboto'] leading-[105.60px]">food</span>, great memories</h2>
                <p className="text-[#232323] text-[45px] font-normal font-['DM Sans']">
                    Enable diners to customize their booking by requesting a specific table location or view. 
                </p>
                <div className="flex border w-[755px] rounded-[54px]  border border-[#232323]">
                    <button className="p-2 m-[3px] flex items-center bg-[var(--primary)] text-white rounded-tl-[30px] rounded-tr rounded-bl-[30px] rounded-br text-slate-50 text-xl font-normal font-['Kumbh Sans'] leading-snug"><MdLocationPin /> <span className="ml-[51px] mr-[8px]">Location</span> <IoMdArrowDropdown /></button>
                    <input className="p-4 w-full rounded-[54px]  outline-0 bg-[var(--Primary-White)]" type="search"/>
                    <button className="w-[50px] m-[8px] h-[50px] p-3 bg-[var(--primary)] rounded-[100px]"><CgSearch className="text-white w-[26px] h-[26px]" /></button>
                    
                </div>
            </div>
            <div className="relative aspect-[1/1]">
                <Image
                    alt="discountme"
                    src="/assets/items/Coffee shop-amico 1.svg" 
                    fill
                    className="object-contain"
                />
            </div> 
        </div>

    

        <h2 className="text-5xl mb-4 font-[500] text-[var(--gray)">Explore <span className="text-[var(--theme)]">Top Restaurants</span></h2>
        <span className="text-2xl text-[var(--gray)]">Check your city Near by</span>
        <span className="text-2xl text-[var(--gray)]">Restaurant</span>
        <div className="grid grid-cols-3 gap-[40px] mt-10">
            <div className="border border-[var(--dark)] p-3 rounded-[8px]">
                <div className="relative aspect-[433/308]">
                     <Image fill src="/assets/restaurant/Rectangle2.png"/>
                </div>
                <div>
                    <div className="mt-2 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <h3 className="text-3xl text-[var(--dark)] font-[500]">Trattoria dal'Oste</h3>
                            <div className="flex items-center gap-2"><IoIosStar className="text-[var(--theme)] text-2xl "/><span className="text-[var(--dark)] text-2xl">(4.5)</span></div>
                        </div>
                       
                         <div className="flex items-center gap-1"><CiLocationOn className="text-2xl" /><span className="text-[var(--dark)]">Via Luigi Alamanni, 3, 50123 Firenze</span></div>
                         <p className="text-[var(--gray)]">Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  <strong className=" text-[var(--dark)]">Read More...</strong></p>
                         <Link href="shop-details" className="text-center bg-[var(--primary)] rounded-[8px] text-white py-3">Visit</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
