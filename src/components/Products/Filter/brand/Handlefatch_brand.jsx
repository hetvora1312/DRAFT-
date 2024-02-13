import React, { useState } from "react";
import All_product from "../../All_product";
const Fetch_brands = () => {
  const [search, setSearch] = useState('');
  const brandSet = new Set(All_product.map((data) => String(data.brand)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
      <form className="nosubmit">
        <input
          class="nosubmit"
          type="search"
          placeholder="Search Brands..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.filter((item) => {
          return search === ''
            ? item.toLowerCase()
            : item.toLowerCase().includes(search);
        }).slice(0, 4).map((data, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" style={{ margin: "5px" }} value={data} />
              {/* {index + 1} &nbsp; */}
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch_brands;
