import React from 'react';
import AllProduct from '../../ProductData';
import './Price.css';

const PriceFilter = () => {
  const priceSet = new Set(AllProduct.map((data) => String(data.price)));
  const uniquePrices = [...priceSet];
  return (
    <div>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {uniquePrices.map((data, index) => (
            <li key={index}>
              <label>
                <input name={data} type="checkbox" className="PriceCheckbox" value={data} />
                {data}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PriceFilter;
