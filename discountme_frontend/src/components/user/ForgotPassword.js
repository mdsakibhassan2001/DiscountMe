"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
export default function ForgotPassword() {
  const router=useRouter();
  function onSubmitClick(){
    e.preventDefault();
    router.push("/forgot-password/new-password");
  }
  return (
    
    <div>
        <div className="relative aspect-[18.57/1.2]">
             <Image alt="login" className="h-full w-full" fill src="/assets/banner/banner.jpg "/>
        </div>
      
          <form onSubmit={onSubmitClick} className=" flex flex-col w-[687px] mx-auto gap-[20px]">
          <h2 className="text-center py-[70px] text-5xl font-[600]">Forgot password</h2>
              <input className="text-2xl w-full rounded-[8px] p-[16px] border border-[var(--border-color)] " placeholder='Email'/>
            
            
          
            <button type="submit" className="bg-[var(--theme)] rounded-[50px] p-4 text-white text-2xl">Submit</button>
        
        </form>
    </div>
  )
}
