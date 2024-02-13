import React from 'react'
import All_product from '../../All_product';
const Fetch_price = () => {
  const brandSet = new Set(All_product.map((data) => String(data.price)));
  const uniqueBrands = [...brandSet];
  return (
    <div>
       <div>
      <ul style={{ listStyleType: "none" }}>
        {uniqueBrands.map((data, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" style={{ margin: "5px" }} value={data} />
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Fetch_price;
