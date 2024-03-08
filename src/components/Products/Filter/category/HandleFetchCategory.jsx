import React from "react";
import "./Category.css";
import AllProduct from "../../ProductData";

const HandleCategoryFilter = () => {
  const categorySet = new Set(AllProduct.map((data) => String(data.category)));
  const uniqueCategories = [...categorySet];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {uniqueCategories.slice(0, 4).map((data, index) => (
          <li key={index}>
            <label>
              <input name={data} type="checkbox" value={data} className="CategoryCheckbox" />
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HandleCategoryFilter;
