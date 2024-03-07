import React from "react";

// css
import "./MainProduct.css";

// Components
import { Product } from "./product/Product.jsx";
import Filter from "./Filter/Filter.jsx";
import Navbar from '../Navbar1/Navbar.jsx'

export const MainProduct = () => {
    console.log(window.outerWidth);
    console.log(window.innerWidth);
  return (
    
    <>
    <Navbar/>
      <div className="ProductPageMainContainer ContainerDiv">
          <div className="ProductPageInnerContainer">
          <div className="ProductPageSideSort">
            <Filter />
          </div>
          <div className="ProductPageProductContainer">
            <Product />
          </div>
          </div>
      </div>
    </>
  );
};
