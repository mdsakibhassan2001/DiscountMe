"use client";
import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";
import OrderPop from "../orderPop/OrderPop";
export default function BillingInformation() {
  const [order, setOrder] = useState(false);
  function onOrderClick() {
    setOrder(true);
  }
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
      border: "#E6E6E6",
    }),
  };
  const options = [
    { value: "Md Sakib Hassan", label: "Md Sakib Hassan" },
    { value: "01991468590", label: "01991468590" },
  ];
  return (
    <div>
      {order ? <OrderPop /> : ""}
      <div className="relative aspect-[18.57/1.2]">
        <Image
          alt="login"
          className="h-full w-full"
          fill
          src="/assets/categorie_slider/information.png"
        />
      </div>
      <div className="max-w-[1512px] w-[90%] mx-auto py-8 ">
        <h2 className="text-[var(--gray-900)] text-[32px] font-bold font-['Figtree'] leading-9">
          Billing Information
        </h2>
        <form className="grid grid-cols-3 gap-10">
          <div className=" py-6 grid grid-cols-3 col-span-2 gap-[18px]">
            <div className="flex flex-col   gap-[9.02px]">
              <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                First name
              </label>
              <input
                className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg "
                placeholder="Your first name"
              />
            </div>
            <div className="flex flex-col   gap-[9.02px]">
              <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                Last name
              </label>
              <input
                type="text"
                className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg "
                placeholder="Your last name"
              />
            </div>
            <div className="flex flex-col   gap-[9.02px]">
              <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                Company Name (optional)
              </label>
              <input
                type="text"
                className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg "
                placeholder="Company name"
              />
            </div>
            <div className="flex flex-col col-span-3   gap-[9.02px]">
              <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                Street Address
              </label>
              <input
                type="text"
                className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg "
                placeholder="Street Address"
              />
            </div>
            <div className="flex flex-col    gap-[9.02px]">
              <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                Country / Region
              </label>
              <Select styles={customStyles} options={options} />
            </div>
            <div className="flex flex-col    gap-[9.02px]">
              <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                States
              </label>
              <Select styles={customStyles} options={options} />
            </div>

            <div className="col-span-3 grid grid-cols-2  gap-[18px]">
              <div className="flex flex-col   gap-[9.02px]">
                <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                  Email
                </label>
                <input
                  className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg "
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col   gap-[9.02px]">
                <label className="text-[var(--gray-900)] text-base font-normal font-['Poppins'] leading-normal">
                  Phone
                </label>
                <input
                  className="pl-[18.05px] pr-[160.79px] pt-[15.79px] pb-[16.48px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-lg "
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-[var(--gray-900)] text-2xl font-bold font-['Figtree']">
              Order Summery
            </h3>
            <div className="flex justify-between border-b gap-[13px] pb-4">
              <div className="flex items-center gap-[6px]">
                <div className="relative aspect-[1/1] w-[67.68px] h-[67.68px]">
                  <Image
                    fill
                    className="h-full w-full"
                    src="/assets/cart/cart1.png"
                  />
                </div>
                <span className="text-[var(--gray-900)] text-lg font-normal font-['Poppins'] leading-7">
                  Freezer xl
                </span>
              </div>
              <span className="text-[var(--gray-900)] text-lg font-normal font-['Poppins']">
                $14.00
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex  justify-between">
              <span className="text-[#4c4c4c] text-lg font-normal font-['Poppins'] ">
                Total:
              </span>
              <span className="text-[#1a1a1a] text-xl font-semibold font-['Poppins'] ">
                $84.00
              </span>
            </div>
            <h4 className="text-[#1a1a1a] text-[22.56px] font-medium font-['Poppins'] leading-[33.84px]">
              Payment Method
            </h4>
            <div className="flex gap-2">
              <input type="radio" className="bg-[#ea5326]" />
              <label
                className="text-[#232323] text-base font-normal font-['Poppins']"
                for="html"
              >
                Cash on Delivery
              </label>
            </div>
            <div className="flex gap-2">
              <input type="radio" />
              <label
                className="text-[#232323] text-base font-normal font-['Poppins']"
                for="html"
              >
                Paypal
              </label>
            </div>
            <button
              onClick={onOrderClick}
              href="information"
              className="w-full mt-4 flex px-[46.09px] py-[18.44px] bg-[var(--theme-div)] text-white rounded-[49.55px] justify-center items-center gap-[18.44px] text-slate-50 text-base font-semibold font-['Poppins'] leading-tight"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
