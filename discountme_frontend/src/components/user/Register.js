import React from 'react'
import Image from 'next/image'
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
export default function Register() {
  return (
    <div>
        <div className="relative aspect-[18.57/1.2]">
             <Image alt="login" className="h-full w-full" fill src="/assets/banner/banner.jpg "/>
        </div>
        
        <form className="bg-white flex flex-col w-[687px] mx-auto gap-[20px]">
        <h2 className="text-center py-[70px] text-5xl font-[600]">Create Account</h2>
            <input className="text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)] " placeholder='Email'/>
            <div className="relative">
              <input className=" text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)]" placeholder='Password'/>
              <IoEyeOutline className="absolute top-4 right-4 text-3xl "/>
            </div>
            <div className="relative">
              <input className=" text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)]" placeholder='Confirm Password'/>
              <IoEyeOutline className="absolute top-4 right-4 text-3xl "/>
            </div>
          <div className="flex justify-between ">
            <div className="flex gap-2"> <input type="radio"/>
            <span className="text-xl text-[var(--gray)]">Accept all terms & Conditons</span>
            </div>

          </div>
          <button className="bg-[var(--theme)] rounded-[50px] p-4 text-white text-2xl">Create Account</button>
          <button className="font-[600] border border-[var(--border-color)] rounded-[8px] p-4 text-2xl  text-center relative"> <FcGoogle className="absolute top-4 left-4 text-3xl"/> Continue with Google</button>
         
        </form>
    </div>
  )
}
