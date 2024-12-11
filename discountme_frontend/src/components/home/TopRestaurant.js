import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import Link from "next/link";
export default function TopRestaurant() {
  return (
    <div className="py-10 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col md:gap-[40px] gap-[20px]">
          <h2 className="text-[#0c0c0c] text-4xl md:text-8xl font-bold font-['Roboto'] md:leading-[105.60px]">
            Good{" "}
            <span className="text-[#ff7d29] text-4xl md:text-8xl font-bold font-['Roboto'] md:leading-[105.60px]">
              food
            </span>
            , great memories
          </h2>
          <p className="text-[#232323] md:text-[45px] text-[25px] font-normal font-['DM Sans']">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>
          <div className="flex border w-[100%] md:w-[755px] rounded-[54px]  border border-[#232323]">
            <button className="p-2 m-[3px] flex items-center bg-[var(--primary)] text-white rounded-tl-[30px] rounded-tr rounded-bl-[30px] rounded-br text-slate-50 text-xl font-normal font-['Kumbh Sans'] leading-snug">
              <MdLocationPin />{" "}
              <span className="md:ml-[51px] text-[14px] md:text-2xl ml-[5px] md:mr-[8px] mr-[4px]">
                Location
              </span>{" "}
              <IoMdArrowDropdown />
            </button>
            <input
              className="md:p-4 p-2 w-full rounded-[54px]  outline-0 bg-[var(--Primary-White)]"
              type="search"
            />
            <button className="w-[50px] m-[8px] h-[50px] p-3 bg-[var(--primary)] rounded-[100px]">
              <CgSearch className="text-white w-[26px] h-[26px]" />
            </button>
          </div>
        </div>
        <div className="relative aspect-[1/1]">
          <Image
            alt="discountme"
            src="/assets/items/Coffee shop-amico 1.svg"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="py-4 m-[60px] md:px-[61.19px] px-[10px] md:py-[43.71px] py-[10px]  md:max-w-[1153.86px] w-[100%] bg-[var(--white)] mx-auto grid md:grid-cols-4 grid-cols-2 gap-3 rounded-[10.49px]">
        <div className="flex gap-[13.986px]">
          <div className="relative w-[40px] h-[40px]">
            <Image
              fill
              className="h-full  w-full"
              alt="discount"
              src="/assets/icon/box.svg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#272343] text-base font-medium capitalize leading-[17.31px]">
              Discount
            </span>
            <small className="text-[#999caa] text-[13.11px] font-normal leading-[14.42px]">
              Every week new sales
            </small>
          </div>
        </div>
        <div className="flex gap-[13.986px]">
          <div className="relative w-[40px] h-[40px]">
            <Image
              fill
              className="h-full  w-full"
              alt="discount"
              src="/assets/icon/delivery-truck.svg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#272343] text-base font-medium capitalize leading-[17.31px]">
              Free Delivery{" "}
            </span>
            <small className="text-[#999caa] text-[13.11px] font-normal leading-[14.42px]">
              100% Free for all orders
            </small>
          </div>
        </div>
        <div className="flex gap-[13.986px]">
          <div className="relative w-[40px] h-[40px]">
            <Image
              alt="product"
              fill
              className="h-full  w-full"
              src="/assets/icon/hours.svg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#272343] text-base font-medium capitalize leading-[17.31px]">
              Great Support 24/7{" "}
            </span>
            <small className="text-[#999caa] text-[13.11px] font-normal leading-[14.42px]">
              We care your experiences
            </small>
          </div>
        </div>

        <div className="flex gap-[13.986px]">
          <div className="relative w-[40px] h-[40px]">
            <Image
              alt="product"
              fill
              className="h-full  w-full"
              src="/assets/icon/shield.svg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#272343] text-base font-medium capitalize leading-[17.31px]">
              secure Payment
            </span>
            <small className="text-[#999caa] text-[13.11px] font-normal leading-[14.42px]">
              100% Secure Payment Method{" "}
            </small>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="mb-2 md:mb-0">
          <h2 className="md:text-5xl text-3xl md:mb-4 font-[500] text-[var(--gray)">
            Explore <span className="text-[var(--theme)]">Top Restaurants</span>
          </h2>
          <span className="md:text-2xl text-xl text-[var(--gray)]">
            Check your city Near by
          </span>
          <span className="md:text-2xl text-xl text-[var(--gray)]">
            Restaurant
          </span>
        </div>
        <button className="float-right text-[#232323] md:text-xl text-[16px] font-normal font-['Kumbh Sans'] leading-snug flex items-center gap-[8px]">
          See All <BsChevronRight className="md:w-[21px] md:h-[21px]" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-[40px] mt-10">
        <div className="rounded-3xl shadow border border-[#959697] p-3 ">
          <div className="relative aspect-[433/308]">
            <Image alt="product" fill src="/assets/restaurant/Rectangle2.png" />
          </div>
          <div>
            <div className="mt-2 flex flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-[var(--dark)] md:text-[32px] text-[24px] text-[24px] font-medium font-['Roboto'] leading-9">
                  Trattoria dal'Oste
                </h3>
                <div className="flex items-center gap-2">
                  <IoIosStar className="md:w-[33px] md:h-[33px] w-[24px] h-[24px] text-[#FFC60B]" />
                  <span className="text-[var(--dark)] text-2xl font-medium font-['Kumbh Sans'] leading-relaxed">
                    (4.5)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiLocationOn className="w-[27px] h-[27px] " />
                <span className="w-[262px] text-[#232323] text-base font-normal font-['Kumbh Sans'] leading-[17.60px]">
                  Via Luigi Alamanni, 3, 50123 Firenze
                </span>
              </div>
              <p className="text-[#758888] text-xs font-normal font-['Kumbh Sans'] leading-[14.40px]">
                Featuring seasonal and sustainable seafood that is flown in
                fresh daily, our chef-driven menu proves that no matter when
                you’re dining, seafood can be truly exceptional.{" "}
                <strong className=" text-[var(--dark)]">Read More...</strong>
              </p>
              <Link
                href="shop-details"
                className=" px-4 py-[18px] bg-[#00b047] rounded-lg justify-center items-center gap-2.5 inline-flex text-[var(--white)]"
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-3xl shadow border border-[#959697] p-3 ">
          <div className="relative aspect-[433/308]">
            <Image alt="product" fill src="/assets/restaurant/Rectangle2.png" />
          </div>
          <div>
            <div className="mt-2 flex flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-[var(--dark)] md:text-[32px] text-[24px] font-medium font-['Roboto'] leading-9">
                  Trattoria dal'Oste
                </h3>
                <div className="flex items-center gap-2">
                  <IoIosStar className="md:w-[33px] md:h-[33px] w-[24px] h-[24px] text-[#FFC60B]" />
                  <span className="text-[var(--dark)] text-2xl font-medium font-['Kumbh Sans'] leading-relaxed">
                    (4.5)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiLocationOn className="w-[27px] h-[27px] " />
                <span className="w-[262px] text-[#232323] text-base font-normal font-['Kumbh Sans'] leading-[17.60px]">
                  Via Luigi Alamanni, 3, 50123 Firenze
                </span>
              </div>
              <p className="text-[#758888] text-xs font-normal font-['Kumbh Sans'] leading-[14.40px]">
                Featuring seasonal and sustainable seafood that is flown in
                fresh daily, our chef-driven menu proves that no matter when
                you’re dining, seafood can be truly exceptional.{" "}
                <strong className=" text-[var(--dark)]">Read More...</strong>
              </p>
              <Link
                href="shop-details"
                className=" px-4 py-[18px] bg-[#00b047] rounded-lg justify-center items-center gap-2.5 inline-flex text-[var(--white)]"
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-3xl shadow border border-[#959697] p-3 ">
          <div className="relative aspect-[433/308]">
            <Image alt="product" fill src="/assets/restaurant/Rectangle2.png" />
          </div>
          <div>
            <div className="mt-2 flex flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-[var(--dark)] md:text-[32px] text-[24px] font-medium font-['Roboto'] leading-9">
                  Trattoria dal'Oste
                </h3>
                <div className="flex items-center gap-2">
                  <IoIosStar className="md:w-[33px] md:h-[33px] w-[24px] h-[24px] text-[#FFC60B]" />
                  <span className="text-[var(--dark)] text-2xl font-medium font-['Kumbh Sans'] leading-relaxed">
                    (4.5)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiLocationOn className="w-[27px] h-[27px] " />
                <span className="w-[262px] text-[#232323] text-base font-normal font-['Kumbh Sans'] leading-[17.60px]">
                  Via Luigi Alamanni, 3, 50123 Firenze
                </span>
              </div>
              <p className="text-[#758888] text-xs font-normal font-['Kumbh Sans'] leading-[14.40px]">
                Featuring seasonal and sustainable seafood that is flown in
                fresh daily, our chef-driven menu proves that no matter when
                you’re dining, seafood can be truly exceptional.{" "}
                <strong className=" text-[var(--dark)]">Read More...</strong>
              </p>
              <Link
                href="shop-details"
                className=" px-4 py-[18px] bg-[#00b047] rounded-lg justify-center items-center gap-2.5 inline-flex text-[var(--white)]"
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
