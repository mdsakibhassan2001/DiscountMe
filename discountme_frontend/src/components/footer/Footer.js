import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className="bg-[var(--Primary-Black)] py-8">
        <div className="max-w-[1512px] w-[90%] mx-auto grid grid-cols-4 ">
            <div className="flex flex-col gap-[26.39px] p-[63.34px]">
            <Link href="/" className="relative w-[234px] h-[61px]">
                <Image
                    alt="discountme"
                    src="/assets/logo.png"
                    fill
                    className="object-contain"
                />
            </Link> 
                <p className="text-[14.78px] font-[400] text-[var(--Primary-White)]  leading-normal opacity-50 text-justify">Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.</p>
                <div className="flex  gap-[10.557px]">
                    <input className="p-[10px] border opacity-50  rounded-[211.144px] bg-[var(--Primary-Black)] outline-none " type="email" placeholder="Type your email address"/>
                    <button className="p-[10px_30px] bg-[var(--Primary-White)] rounded-[211.14px] ">Submit</button>
                </div>
            </div>  
            <div className="col-span-2 p-[63.34px]  grid grid-cols-3 gap-[112px]">
                <div className="flex flex-col gap-6 ">
                    <h3 className="text-slate-50 text-xl font-bold font-['Figtree'] leading-snug">Account</h3>

                    <div className="gap-4 flex flex-col">
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">My Account</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">Login / Register</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">Cart</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">Wishlist</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">Shop</span>
                    </div>
                
                </div>
                <div className="flex flex-col gap-6 ">
                    <h3 className="text-slate-50 text-xl font-bold font-['Figtree'] leading-snug">Quick Link</h3>

                    <div className="gap-4 flex flex-col">
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">Privacy Policy</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">Terms Of Use</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">FAQ</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">Contact</span>
                     
                    </div>
                
                </div>
                <div className="flex flex-col gap-6 ">
                    <h3 className="text-slate-50 text-xl font-bold font-['Figtree'] leading-snug">Support</h3>

                    <div className="gap-4 flex flex-col">
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">exclusive@gmail.com</span>
                    <span className="text-slate-50 text-lg font-normal font-['Figtree'] leading-tight">+88015-88888-9999</span>
                   
                    </div>
                
                </div>
            </div>
            <div className="p-[63.34px] pr-[0px] flex flex-col gap-6 ">
                    <h3 className="text-slate-50 text-xl font-bold font-['Figtree'] leading-snug">Download App</h3>
                    <div className="flex gap-[6px]">
                        <div className="relative  w-[80px] h-[80px]"><Image fill className="h-full w-full" src="/assets/qrcode/qrcode1.png"/>
                        </div>
                        <div>
                        <div className="  p-[3px] relative h-[40px] w-[110px]"><Image fill className="h-full w-full" src="/assets/qrcode/GooglePlay.png"/>
                        </div>
                        <div className=" p-[3px] relative h-[40px] w-[110px]"><Image fill className="h-full w-full" src="/assets/qrcode/AppStore.png"/>
                        </div>
                        </div>
                    </div>
             </div>
        </div>
    </div>
  )
}
