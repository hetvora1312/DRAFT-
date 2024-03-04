import React from "react";
import "../Filter.css";
import AllProduct from "../../AllProduct";

const FetchCategory = () => {
  const brandSet = new Set(AllProduct.map((data) => String(data.catagory)));
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
export default FetchCategory;
