import React from "react";
import TopRestaurant from "./TopRestaurant";
import Product from "./Product";

export default function HomeMain() {
  return <div className="max-w-[1512px] w-[90%] mx-auto ">
    <TopRestaurant/>
    <Product/>
  </div>;
}
