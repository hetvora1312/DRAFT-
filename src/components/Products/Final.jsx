import React from "react";
import "./assets/css/Final.css";
import { Product } from "./product/Product.jsx";
import Filter from "./Filter/Filter.jsx";
import HomeNav from "./HomeNav.jsx";


export const Final = () => {
    console.log(window.outerWidth);
    console.log(window.innerWidth);
  return (
    
    <>
      <div className="product_final">
        <HomeNav/>
        <div className="final_body">
          <div className="fetch_">
            <Filter />
          </div>
          <div className="product_">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};
