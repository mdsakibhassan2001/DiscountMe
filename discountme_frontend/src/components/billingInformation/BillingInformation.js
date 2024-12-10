"use client" 
import React from 'react'
import Image from 'next/image'
import Select from 'react-select'
import Link from 'next/link'
export default function BillingInformation() {
    const customStyles = {
        control: (provided) => ({
          ...provided,
          fontSize: "17px",
          padding: "12px",
          borderRadius: "0.375rem",
        }),
        option: (provided) => ({
          ...provided,
          fontSize: "17px",
          padding: "12px",
          border:"#E6E6E6"
        }),
      };
    const options = [
        { value: 'Md Sakib Hassan', label: 'Md Sakib Hassan' },
        { value: '01991468590', label: '01991468590' },
      
      ]
  return (
    <div>
        <div className="relative aspect-[18.57/1.2]">
            <Image alt="login" className="h-full w-full" fill src="/assets/categorie_slider/information.png"/>
        </div>
        <div className="max-w-[1512px] w-[90%] mx-auto py-8 ">
            <h2 className="text-[var(--gray-900)] text-[32px] font-bold font-['Figtree'] leading-9">Billing Information</h2>
            <form className="grid grid-cols-3">
                <div className=" py-6 grid grid-cols-3 col-span-2 gap-[18px]">
                    <div className="flex flex-col   gap-[9.02px]">
                        <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">First name</label>
                        <input className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg " placeholder="Your first name"/>
                    </div>
                    <div className="flex flex-col   gap-[9.02px]">
                        <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">Last name</label>
                        <input type="text" className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg " placeholder="Your last name"/>
                    </div>
                    <div className="flex flex-col   gap-[9.02px]">
                        <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">Company Name (optional)</label>
                        <input type="text" className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg " placeholder="Company name"/>
                    </div>           
                    <div className="flex flex-col col-span-3   gap-[9.02px]">
                        <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">Street Address</label>
                        <input type="text" className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg " placeholder="Street Address"/>
                      
                    </div>
                    <div className="flex flex-col    gap-[9.02px]">
                        <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">Country / Region</label>
                        <Select styles={customStyles} options={options} />
                      
                    </div>
                    <div className="flex flex-col    gap-[9.02px]">
                        <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">States</label>
                        <Select styles={customStyles} options={options} />
                      
                    </div>
                   
                    
                    <div className="col-span-3 grid grid-cols-2  gap-[18px]">
                        <div className="flex flex-col   gap-[9.02px]">
                            <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">Email</label>
                            <input className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg " placeholder="Email Address"/>
                        </div>
                        <div className="flex flex-col   gap-[9.02px]">
                            <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">Phone</label>
                            <input className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg " placeholder="Phone number"/>
                        </div>
                    </div>
                   
                  
                </div>
                <div className="">
                    <h3>Order Summery</h3>
                    <div className="flex justify-between">
                        <div>
                            <div className="relative aspect-[1/1] h-[115px] w-[115px]">
                            <Image fill className="h-full w-full" src="/assets/cart/cart1.png"/>
                            </div>
                            <span className="text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">Freezer</span>
                        </div>
                        <span>$14.00</span>
                    </div>
                    <h4>Payment Method</h4>
                    <div>
                    <input type="radio" />
                    <label for="html">Cash on Delivery</label>
                    </div>
                    <Link href="information" className="w-full mt-4 flex px-[46.09px] py-[18.44px] bg-[var(--theme-div)] text-white rounded-[49.55px] justify-center items-center gap-[18.44px] text-slate-50 text-base font-semibold font-['Poppins'] leading-tight">Place Order</Link>
                </div>
              
            </form>
        </div>
    </div>
  )
}
