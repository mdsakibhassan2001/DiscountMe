import React from 'react'
import Image from 'next/image'
export default function Product() {
  return (
    <div className="py-10 border-t flex flex-col">
         <h2 className="text-3xl mb-4 font-[500] text-[var(--gray)">Product</h2>
         <div className="grid grid-cols-3 gap-2">
            <div className="">
                <div className="relative aspect-[551/287]">
                    <Image fill src="/assets/product/product1.png" alt="product"/>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="text-xl text-[var(--dark)] font-[500]">Skateboard Shoe</span>
                    <small className="text-[16px] text-[var(--gray)]">$125</small>
                </div>
            </div>
            <div className="">
                <div className="relative aspect-[551/287]">
                    <Image fill src="/assets/product/product1.png" alt="product"/>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="text-xl text-[var(--dark)] font-[500]">Skateboard Shoe</span>
                    <small className="text-[16px] text-[var(--gray)]">$125</small>
                </div>
            </div>
         </div>
    </div>
  )
}
