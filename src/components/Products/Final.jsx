import React from "react";
import "./Final.css";
import { Product } from "./product/Product.jsx";
import Filter from "./Filter/Filter.jsx";

export const Final = () => {
    console.log(window.outerWidth);
    console.log(window.innerWidth);
  return (
    
    <>
      <div className="product_final">
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
