import React from "react";
import { Link } from "react-router-dom";
import "../Filter.css";
import All_product from "../../All_product";

const Fetch_catagory = () => {
  const brandSet = new Set(All_product.map((data) => String(data.catagory)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.map((data,index) => (
          <li key={index}>
             <Link to={data.id} className="link_1">
              {data}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Fetch_catagory;
