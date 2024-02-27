import React from 'react'
import All_product from '../../All_product';
const Handlefatch_price = () => {
  const brandSet = new Set(All_product.map((data) => String(data.price)));
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
    
  )
}

export default Handlefatch_price
