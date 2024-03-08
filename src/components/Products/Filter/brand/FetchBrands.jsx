import React from "react";
import "./Brand.css";
import AllProduct from "../../ProductData";

const BrandFilter = () => {
  const brandSet = new Set(AllProduct.map((data) => String(data.brand)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.map((data, index) => (
          <li key={index}>
            <label>
              <input name={data} type="checkbox" className="BrandCheckbox" value={data} />
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
