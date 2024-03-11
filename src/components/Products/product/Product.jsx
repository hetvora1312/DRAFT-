import React, { useState } from "react";
import sr from "./assets/images/search-icon.jpg";
import pic1 from "./assets/images/unsplash_R7UEEvjAEkc.jpg";
import pic2 from "./assets/images/unsplash_R7UEEvjAEkc.jpg";
import "./Product.css";

export const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, img: pic1, name: "Bose Sleepbuds", pricePerUnit: 99, quantity: 1, spec1: "wireless headohones" },
    { id: 2, img: pic2, name: "Another Product", pricePerUnit: 79, quantity: 1, spec1: "wireless headohones" },
    { id: 3, img: pic2, name: "Another Product", pricePerUnit: 79, quantity: 1, spec1: "wireless headohones" },
    { id: 4, img: pic2, name: "Another Product", pricePerUnit: 79, quantity: 1, spec1: "wireless headohones" }
  ]);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      const updatedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingProductIndex = updatedCart.findIndex(item => item.id === productId);
      if (existingProductIndex !== -1) {
        // Product already exists in the cart, update its quantity
        updatedCart[existingProductIndex].quantity += productToAdd.quantity;
      } else {
        // Product not present in the cart, add it
        updatedCart.push(productToAdd);
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

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
      <div className="ProductPartBody">
        <div className="ProductPartSearchbar">
          <div className="ProductPartSearch">
            <select className="ProductPartSelectDropdown" id="search" name="">
              <option value="all">All</option>
              <option value="laptop">Laptop</option>
              <option value="pc">PC</option>
            </select>
            <input name="productSearch" className="ProductPartSearchInput" type="text" placeholder="Search here" />
          </div>
          <img src={sr} alt="search icon" />
        </div>
        <div className="ProductPartSort">
          <p>Sort</p>
          <select id="sort" name="ProductSort">
            <option value="New">New</option>
            <option value="best match">Best Match</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
          </select>
        </div>
        <div className="ProductPartData">
          {products.map(product => (
            <div className="ProductPartItemContainer" key={product.id}>
              
              <div className="ProductPartItemDetail">
              <div className="ProductPartImg">
                <img src={product.img} alt={product.name} />
                </div>
                <div className="ProductPartInfo">
                  <p className="ProductPartTitle">{product.name}</p>
                  <p className="ProductPartInfoText">Description goes here</p>
                  </div>
              </div>
              <div className="ProductPartPrice">
                <div className="ProductPartPrice1">
                  <p>${(product.pricePerUnit * product.quantity).toFixed(2)}</p>
                  <div className="ProductPartPrice1Input">
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
                <button onClick={() => addToCart(product.id)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
