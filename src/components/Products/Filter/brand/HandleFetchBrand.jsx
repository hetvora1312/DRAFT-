import React from "react";
import "./Brand.css";
import AllProduct from "../../ProductData";

const HandleBrandFilter = () => {
  const brandSet = new Set(AllProduct.map((data) => String(data.brand)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.slice(0, 4).map((data, index) => (
          <li key={index}>
            <label>
              <input name={data} type="checkbox" value={data} className="BrandCheckbox" />
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HandleBrandFilter;
