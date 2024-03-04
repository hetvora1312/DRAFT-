import React, { useState } from "react";
import sr from "./assets/images/search-icon.jpg";
import pic1 from "./assets/images/unsplash_R7UEEvjAEkc.jpg";
import pic2 from "./assets/images/unsplash_R7UEEvjAEkc.jpg";
import "./Product.css";

export const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Bose Sleepbuds", pricePerUnit: 99, quantity: 1 },
    { id: 2, name: "Another Product", pricePerUnit: 79, quantity: 1 }
  ]);

  const handleIncrement = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecrement = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  const handleChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: newQuantity >= 1 ? newQuantity : 1 } : product
      )
    );
  };

  return (
    <>
      <div className="product_body">
        <div className="product_searchbar">
          <div className="product_search">
            <select id="search" name="">
              <option value="all">All</option>
              <option value="laptop">Laptop</option>
              <option value="pc">PC</option>
            </select>
            <input type="text" placeholder="Search here" />
          </div>
          <img src={sr} alt="search icon" />
        </div>
        <div className="product_sort">
          <p>Sort</p>
          <select id="sort" name="">
            <option value="New">New</option>
            <option value="best match">Best Match</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
          </select>
        </div>
        <div className="product_data">
          {products.map(product => (
            <div className="product_item" key={product.id}>
              <div className="product_img">
                <img src={product.id === 1 ? pic1 : pic2} alt={product.name} />
                <div className="product_info">
                  <p className="product_title">{product.name}</p>
                  <p className="product_info">Description goes here</p>
                </div>
              </div>
              <div className="product_price">
                <div className="product_price_1">
                  <p>${(product.pricePerUnit * product.quantity).toFixed(2)}</p>
                  <div className="product_price_1_input">
                    <button onClick={() => handleDecrement(product.id)}>-</button>
                    <input
                      type="counter"
                      min={1}
                      value={product.quantity}
                      onChange={(e) => handleChange(product.id, e)}
                    />
                    <button onClick={() => handleIncrement(product.id)}>+</button>
                  </div>
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
