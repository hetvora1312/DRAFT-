import React, { useState } from "react";
import FetchCategory from "./category/FetchCategory";
import FetchPrice from "./price/FetchPrice";
import FetchBrands from "./brand/FetchBrands";
import HandleFetchPrice from "./price/HandleFetchPrice";
import HandleFetchCategory from "./category/HandleFetchCategory";
import HandleFetchBrand from "./brand/HandleFetchBrand";
import "./Filter.css";
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'; // Importing arrow icons

const Filter = () => {
  const [categoryView, setCategoryView] = useState(false);
  const [brandView, setBrandView] = useState(false);
  const [priceView, setPriceView] = useState(false);

  const toggleCategoryView = () => {
    setCategoryView(!categoryView);
  };

  const toggleBrandView = () => {
    setBrandView(!brandView);
  };

  const togglePriceView = () => {
    setPriceView(!priceView);
  };

  const renderCategoryContent = () => {
    return categoryView ? <FetchCategory /> : <HandleFetchCategory />;
  };

  const renderBrandContent = () => {
    return brandView ? <FetchBrands /> : <HandleFetchBrand />;
  };

  const renderPriceContent = () => {
    return priceView ? <FetchPrice /> : <HandleFetchPrice />;
  };

  const renderArrowIcon = (isOpen) => {
    return isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />;
  };

  return (
    <>
      <div className="ProductFilterContainer" id="container">
        <div className="ProductFilterHeading" id="heading">
          <p>Refine Your Search</p>
        </div>

        <div className="ProductFilterInStock" id="in-stock">
          <input name="InStockCheckbox" type="checkbox" />
          <label>In Stock</label>
        </div>

        <div className="underline" id="underline"></div>

        <div className="ProductFilterCategories">
          <div className="ProductFilterCategoriesTitle" onClick={toggleCategoryView}>
            {renderArrowIcon(categoryView)}
            <p>Categories</p>
          </div>
          {renderCategoryContent()}
        </div>

        <div className="underline" id="underline"></div>

        <div className="ProductFilterBrands">
          <div className="ProductFilterBrandsTitle" onClick={toggleBrandView}>
            {renderArrowIcon(brandView)}
            <p>Brands</p>
          </div>
          {renderBrandContent()}
        </div>

        <div className="underline" id="underline"></div>

        <div className="ProductFilterPrice">
          <div className="ProductFilterPriceTitle" onClick={togglePriceView}>
            {renderArrowIcon(priceView)}
            <p>Price</p>
          </div>
          {renderPriceContent()}
        </div>
      </div>
    </>
  );
};

export default Filter;
