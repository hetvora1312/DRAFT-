import React from "react";
import searchIcon from "./assets/images/search-icon.jpg";
import pic from "./assets/images/unsplash_R7UEEvjAEkc.jpg";
import "./Product.css";

export const Product = () => {
  return (
    <>
      <div className="product_body">
        <div className="product_searchbar">
          <div className="product_search">
            <select id="search" name="">
              <option value="all">All</option>
              <option value="laptop">Laptop</option>
              <option value="pc">PC</option>
            </select>
            <input type="text" placeholder="Search here" />
          </div>
          <img src={searchIcon} alt="img"></img>
        </div>
        <div className="product_sort">
          <p>Sort</p>
          <select id="sort" name="">
            <option value="New">New</option>
            <option value="best match">Best Match</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
          </select>
        </div>
        <div className="product_data">
          <div className="product_img">
            <img src={pic} alt="img"/>
            <div className="prouct_info">
              <p className="product_title">Bose Sleepbuds</p>
              <p className="product_imf">
                Wireless Sports LED Bluetooth in-ear
              </p>
            </div>
          </div>
          <div className="product_price">
            <div className="product_price_1">
              <p>$99.00</p>
              <input type="number" min={1} placeholder="1" />
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
