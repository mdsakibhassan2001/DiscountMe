import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';
export default function TopRestaurant() {
  return (
    <div className="py-10 flex flex-col">
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
