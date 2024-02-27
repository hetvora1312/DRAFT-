import React from "react";
import "./Final.css";
import { Product } from "./product/Product.jsx";
import Filter from "./Filter/Filter.jsx";
import pr from "./product/assets/images/Profile-Section (1).jpg";
import cr from "./product/assets/images/Cart-Button.png";

export const Final = () => {
    console.log(window.outerWidth);
    console.log(window.innerWidth);
  return (
    
    <>
      <div className="product_final">
        <div className="product_header">
          <img src={pr} alt="" />
          <img src={cr} alt="" />
        </div>
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
