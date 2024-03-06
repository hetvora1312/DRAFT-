import React from "react";

// css
import "./Final.css";

// Components
import { Product } from "./product/Product.jsx";
import Filter from "./Filter/Filter.jsx";
import Navbar from '../Navbar1/Navbar.jsx'

export const Final = () => {
    console.log(window.outerWidth);
    console.log(window.innerWidth);
  return (
    
    <>
    <Navbar/>
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
