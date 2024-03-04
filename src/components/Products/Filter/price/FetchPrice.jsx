import React from 'react'
import AllProduct from '../../AllProduct';
const FetchPrice = () => {
  const brandSet = new Set(AllProduct.map((data) => String(data.price)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
       <div>
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.map((data, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" className="categories_checkbox" value={data} />
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default FetchPrice;
