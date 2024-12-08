import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <div className="mx-w-[1512px] w-[90%] mx-auto flex items-center">
        {/* Logo Section */}
        <div className="relative w-[274px] h-[71px]">
          <Image
            alt="discountme"
            src="/assets/logo.png"
            fill
            className="object-contain" // Ensures the image fits well
          />
        </div>

        {/* Search Section */}
        <div className="ml-4 flex">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md px-2 py-1"
            />
            <button className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md">
              Search
            </button>
          </div>
          <div>
            <ul>
              <li>
                <Link>All Category</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
