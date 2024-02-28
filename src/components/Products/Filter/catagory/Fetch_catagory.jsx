import React from "react";
import "../Filter.css";
import All_product from "../../All_product";

const Fetch_catagory = () => {
  const brandSet = new Set(All_product.map((data) => String(data.catagory)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
    <div>
   <ul style={{ listStyleType: "none" }}>
     {uniqueBrands.map((data, index) => (
       <li key={index}>
         <label>
           <input type="checkbox" className="categories_checkbox"  value={data} />
           {data}
         </label>
       </li>
     ))}
   </ul>
 </div>
 </div>
  );
};
export default Fetch_catagory;
