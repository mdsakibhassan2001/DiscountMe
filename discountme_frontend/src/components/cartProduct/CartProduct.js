import React from "react";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";
import Link from "next/link";
export default function CartProduct() {
  return (
    <div>
      <div className="relative aspect-[18.57/1.2]">
        <Image
          alt="login"
          className="h-full w-full"
          fill
          src="/assets/categorieslider/cartslider.png"
        />
      </div>
      <div className="max-w-[1512px] w-[90%] mx-auto py-8 ">
        <h2 className="text-[#1a1a1a] text-[40px] font-bold font-['Figtree'] leading-[44px]">
          My Shopping Cart
        </h2>
        <div className="grid grid-cols-3 gap-8 py-8">
          <div className=" col-span-2 bg-white rounded-[9.22px] border border-[#e6e6e6]">
            <table className="w-full">
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-start p-4 text-[var(--font-color)] text-base font-medium font-['Poppins'] uppercase leading-none tracking-wide">
                  Product{" "}
                </th>
                <th className="p-4 text-[var(--font-color)] text-base font-medium font-['Poppins'] uppercase leading-none tracking-wide">
                  price{" "}
                </th>
                <th className="p-4 text-[var(--font-color)] text-base font-medium font-['Poppins'] uppercase leading-none tracking-wide">
                  Quantity{" "}
                </th>
                <th className="p-4 text-[var(--font-color)] text-base font-medium font-['Poppins'] uppercase leading-none tracking-wide">
                  Subtotal{" "}
                </th>
              </tr>
              <tr className="">
                <td className="p-5  flex gap-[13px] items-center">
                  <div className="relative aspect-[1/1] h-[115px] w-[115px]">
                    <Image
                      fill
                      className="h-full w-full"
                      src="/assets/cart/cart1.png"
                    />
                  </div>
                  <span className="text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                    Freezer
                  </span>
                </td>
                <td className="p-5 text-center text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                  $14.00
                </td>
                <td>
                  <div className="col-span-2 flex justify-between p-[9.212px] bg-white rounded-[195.76px] border border-[#e6e6e6]justify-center items-center">
                    <button className="bg-[#f2f2f2] rounded-[195.76px] h-[40px] w-[40px] flex items-center justify-center">
                      <FiMinus className="text-2xl text-[var(--gray)]" />
                    </button>
                    <span className=" text-center text-[var(---gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                      5
                    </span>
                    <button className=" bg-[#f2f2f2] rounded-[195.76px]  h-[40px] w-[40px] flex items-center justify-center">
                      <HiOutlinePlus className="text-2xl text-[var(--gray)]" />
                    </button>
                  </div>
                </td>
                <td className="p-5 text-center text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                  $70.00
                </td>
                <td className="p-5  text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                  <IoIosCloseCircleOutline className="w-[27.65px] h-[27.65px] text-[var(--gray)]" />
                </td>
              </tr>
              <tr className="">
                <td className="p-5  flex gap-[13px] items-center">
                  <div className="relative aspect-[1/1] h-[115px] w-[115px]">
                    <Image
                      fill
                      className="h-full w-full"
                      src="/assets/cart/cart1.png"
                    />
                  </div>
                  <span className="text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                    Freezer
                  </span>
                </td>
                <td className="p-5 text-center text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                  $14.00
                </td>
                <td>
                  <div className="col-span-2 flex justify-between p-[9.212px] bg-white rounded-[195.76px] border border-[#e6e6e6]justify-center items-center">
                    <button className="bg-[#f2f2f2] rounded-[195.76px] h-[40px] w-[40px] flex items-center justify-center">
                      <FiMinus className="text-2xl text-[var(--gray)]" />
                    </button>
                    <span className=" text-center text-[var(---gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                      5
                    </span>
                    <button className=" bg-[#f2f2f2] rounded-[195.76px]  h-[40px] w-[40px] flex items-center justify-center">
                      <HiOutlinePlus className="text-2xl text-[var(--gray)]" />
                    </button>
                  </div>
                </td>
                <td className="p-5 text-center text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                  $70.00
                </td>
                <td className="p-5  text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                  <IoIosCloseCircleOutline className="w-[27.65px] h-[27.65px] text-[var(--gray)]" />
                </td>
              </tr>
            </table>
            <div className="flex border-t justify-between p-5">
              <button className=" px-[36.87px] py-[16.13px] bg-[#f2f2f2] rounded-[49.55px] justify-center items-center gap-[13.83px] text-[#4c4c4c] text-base font-semibold font-['Poppins'] leading-tight">
                Return to shop
              </button>
              <button className=" px-[36.87px] py-[16.13px] bg-[#f2f2f2] rounded-[49.55px] justify-center items-center gap-[13.83px] text-[#4c4c4c] text-base font-semibold font-['Poppins'] leading-tight">
                Update Cart
              </button>
            </div>
          </div>
          <div>
            <div className=" p-5 bg-white rounded-[9.22px] border border-[var(--border-color)]">
              <h3 className=" text-[var(--gray-900)] text-[23.05px] font-medium font-['Poppins'] leading-[34.57px]">
                Cart Total
              </h3>
              <div className="border-b py-[13.83px] bg-white flex justify-between">
                <span className="text-[#4c4c4c] text-base font-normal font-['Poppins'] leading-normal">
                  Subtotal:
                </span>
                <span className="text-[#1a1a1a] text-base font-medium font-['Poppins'] leading-normal">
                  $84.00
                </span>
              </div>
              <div className="border-b py-[13.83px] bg-white flex justify-between">
                <span className="text-[#4c4c4c] text-base font-normal font-['Poppins'] leading-normal">
                  Shipping:
                </span>
                <span className="text-[#1a1a1a] text-base font-medium font-['Poppins'] leading-normal">
                  Free
                </span>
              </div>
              <div className="py-[13.83px] bg-white flex justify-between">
                <span className="text-[#4c4c4c] text-base font-normal font-['Poppins'] leading-normal">
                  Total:
                </span>
                <span className="text-[#1a1a1a] text-base font-medium leading-normal font-[700]">
                  $84.00
                </span>
              </div>
              <Link
                href="information"
                className="w-full mt-4 flex px-[46.09px] py-[18.44px] bg-[var(--theme-div)] text-white rounded-[49.55px] justify-center items-center gap-[18.44px] text-slate-50 text-base font-semibold font-['Poppins'] leading-tight"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
