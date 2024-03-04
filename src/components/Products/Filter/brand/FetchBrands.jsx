import React, { useState } from "react";
import AllProduct from "../../AllProduct";
const FetchBrands = () => {
  const brandSet = new Set(AllProduct.map((data) => String(data.brand)));
  const uniqueBrands = [...brandSet];
  console.log(uniqueBrands);
  const [search, setSearch] = useState('');
  return (
    <>
        <input
          class="nosubmit"
          type="search"
          placeholder="Search Brands..."
          onChange={(e) => setSearch(e.target.value)}
        />
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.filter((item) => {
          return search === ''
            ? item.toLowerCase()
            : item.toLowerCase().includes(search);
        }).map((data, index) => (
          <li key={index}>
            <label>
              <input className="categories_checkbox" type="checkbox" value={data} />
              {/* {index + 1} &nbsp; */}
              {data}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchBrands;
