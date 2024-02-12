import React, { useState } from "react";
import Fetch_catagory from "./catagory/Fetch_catagory";
import Fetch_price from "./price/Fetch_price";
import Fetch_brands from "./brand/Fetch_brands";
import Handlefatch_price from "./price/Handlefatch_price";
import Handlefatch_catagory from "./catagory/Handlefatch_catagory";
import Handlefatch_brand from "./brand/Handlefatch_brand";
import "./Filter.css";
import { createContext, useContext } from "react";
export const MyContext = createContext();

const Filter = () => {
  const [view_more, setView_more] = useState(false);
  const [showmore, setShowmore] = useState(false);
  const [view , setView] = useState(false);
  const contextValue = useContext(MyContext);
  const { basename } = contextValue || { basename: "defaultValue" };
  console.log(contextValue);
  console.log("basename : " + basename);

  return (
    <>
      <div className="container1" id="container" >
        <div className="heading" id="heading">
          <h1>Refine your Search</h1>
        </div>

        <div className="in-stock" id="in-stock">
          <label>
            {" "}
            <input type="checkbox" />
            In Stock
          </label>
        </div>

        <div className="underline" id="underline">
          <hr />
        </div>

        <div id="categories">
          <h3>Categories</h3>
          {view ? <Fetch_catagory /> : <Handlefatch_catagory />}
          <button
            htmlFor="cateogries"
            onClick={() => setView(!view)}
            className="btn-less-more"
          >
            {view === true ? "- View Less Options" : "+ View More Options"}
          </button>
        </div>

        <div className="underline" id="underline">
          <hr />
        </div>

        <div className="brand">
          <h3>Brands</h3>

          
          {view_more ? <Fetch_brands /> : <Handlefatch_brand />}
          <button
            onClick={() => setView_more(!view_more)}
            className="btn-less-more"
          >
            {view_more === true ? "- View Less Options" : "+ View More Options"}
          </button>
        </div>

        <div className="underline" id="underline">
          <hr />
        </div>

        <div className="brand">
          <h3>Prices</h3>

          {showmore ? <Fetch_price /> : <Handlefatch_price />}
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
