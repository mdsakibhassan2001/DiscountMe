import React from 'react'
import Image from 'next/image'
import { IoEyeOutline } from "react-icons/io5";
export default function SetNewPassword() {
  return (
    <div>
        <div className="relative aspect-[18.57/1.2]">
             <Image alt="login" className="h-full w-full" fill src="/assets/banner/banner.jpg "/>
        </div>
      
        <form className=" flex flex-col w-[687px] mx-auto gap-[20px]">
        <h2 className="text-center py-[70px] text-5xl font-[600]">Set New Password</h2>
          <div className="relative">
              <input className=" text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)]" placeholder='Enter new password'/>
              <IoEyeOutline className="absolute top-4 right-4 text-3xl "/>
            </div>
          <div className="relative">
              <input className=" text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)]" placeholder='Confirm new password'/>
              <IoEyeOutline className="absolute top-4 right-4 text-3xl "/>
            </div>
           
        
          <button className="bg-[var(--theme)] rounded-[50px] p-4 text-white text-2xl">Create Account</button>
        
        </form>
    </div>
  )
}
