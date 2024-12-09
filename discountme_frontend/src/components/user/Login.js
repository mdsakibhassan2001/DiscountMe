import React from 'react'
import Image from 'next/image'
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';
export default function Login() {
  return (
    <div>
        <div className="relative aspect-[18.57/1.2]">
             <Image alt="login" className="h-full w-full" fill src="/assets/banner/banner.jpg "/>
        </div>
        <h2 className="text-center py-[70px] text-5xl font-[600]">Sign In</h2>
        <form className=" flex flex-col w-[687px] mx-auto gap-[20px]">
            <input className="text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)] " placeholder='Email'/>
            <div className="relative">
              <input className=" text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)]" placeholder='Password'/>
              <IoEyeOutline className="absolute top-4 right-4 text-3xl "/>
            </div>
           
          <div className="flex justify-between ">
            <div className="flex gap-2"> <input type="radio"/>
            <span className="text-xl text-[var(--gray)]">Remember me</span>
            </div>
            <Link href="forgot-password" className="text-xl text-[var(--gray)]">Forget Password</Link>
          </div>
          <button className="bg-[var(--theme)] rounded-[50px] p-4 text-white text-2xl">Login</button>
          <span className="text-center mt-2 text-xl text-[var(--gray)]">Don't have account? <Link href="register" className="text-black font-[600]">Register</Link></span>
        </form>
    </div>
  )
}
