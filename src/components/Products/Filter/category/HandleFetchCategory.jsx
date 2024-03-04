import React from "react";
import "../Filter.css";
import AllProduct from "../../AllProduct";

const HandleFetchCatagory = () => {
  const brandSet = new Set(AllProduct.map((data) => String(data.catagory)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.slice(0, 4).map((data,index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={data}
                className="categories_checkbox"
              />
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HandleFetchCatagory;
