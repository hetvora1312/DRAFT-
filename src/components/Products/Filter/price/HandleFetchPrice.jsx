import React from 'react';
import AllProduct from '../../ProductData';
import './Price.css';

const HandlePriceFilter = () => {
  const priceSet = new Set(AllProduct.map((data) => String(data.price)));
  const uniquePrices = [...priceSet];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {uniquePrices.slice(0, 4).map((data, index) => (
          <li key={index}>
            <label>
              <input name={data} type="checkbox" value={data} className="PriceCheckbox" />
              {data}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HandlePriceFilter;
