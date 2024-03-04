import React, { useState } from "react";
import FetchCategory from "./category/FetchCategory";
import FetchPrice from "./price/FetchPrice";
import FetchBrands from "./brand/FetchBrands";
import HandleFetchPrice from "./price/HandleFetchPrice";
import HandleFetchCategory from "./category/HandleFetchCategory";
import HandleFetchBrand from "./brand/HandleFetchBrand";
import "./Filter.css";
import { createContext, useContext } from "react";
import downArrow from "../product/assets/images/downarrow.jpg"
export const MyContext = createContext();

const Filter = () => {
  const [view_more, setView_more] = useState(false);
  const [showmore, setShowmore] = useState(false);
  const [view, setView] = useState(false);
  const contextValue = useContext(MyContext);
  const { basename } = contextValue || { basename: "defaultValue" };
  console.log(contextValue);
  console.log("basename : " + basename);

  return (
    <>
      <div className="container1" id="container">
        <div className="heading" id="heading">
          
          <p>Refine Your Search</p>
        </div>

        <div className="in-stock" id="in-stock">
          <input type="checkbox" />
          <label>In Stock</label>
        </div>

        <div className="underline" id="underline">
        </div>

        <div>
          <div className="categories">

          <div className="categories_title">
          <img src={downArrow} alt="img"></img>
          <p>Categories</p>
          </div>
          {view ? <FetchCategory /> : <HandleFetchCategory />}
          <button
            htmlFor="cateogries"
            onClick={() => setView(!view)}
            className="btn-less-more"
          >
            {view === true ? "- View Less Options" : "+ View More Options"}
          </button>
        </div>
        </div>
        <div className="underline" id="underline">
        </div>

        <div className="brand">
        <div className="brand_title">
          <img src={downArrow} alt="img"></img>
          <p>Brands</p>
          </div>
          {view_more ? <FetchBrands /> : <HandleFetchBrand />}
          <button
            onClick={() => setView_more(!view_more)}
            className="btn-less-more"
          >
            {view_more === true ? "- View Less Options" : "+ View More Options"}
          </button>
        </div>

        <div className="underline" id="underline">
        </div>

        <div className="price">
        <div className="price_title">
          <img src={downArrow} alt="img"></img>
          <p>Price</p>
          </div>

          {showmore ? <FetchPrice /> : <HandleFetchPrice />}
          <button
            onClick={() => setShowmore(!showmore)}
            className="btn-less-more"
          >
            {showmore === true ? "- View Less Options" : "+ View More Options"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
