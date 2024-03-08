import React from "react";
import "./Category.css";
import AllProduct from "../../ProductData";

const CategoryFilter = () => {
  const categorySet = new Set(AllProduct.map((data) => String(data.category)));
  const uniqueCategories = [...categorySet];
  return (
    <div>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {uniqueCategories.map((data, index) => (
            <li key={index}>
              <label>
                <input name={data} type="checkbox" className="CategoryCheckbox" value={data} />
                {data}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
