import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import WestIcon from "@mui/icons-material/West";

// css
import "./assets/css/ShoppingCart.css";

// componentss and images
import Navbar from "./Navbar";
import ProductPhoto from "./assets/images/unsplash_R7UEEvjAEkc.jpg";
import bin from "./assets/images/bin.png";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bose Sleepbuds II",
      price: 99,
      quantity: 1,
      available: true,
      spec1: "Wireless sports LED Bluetooth in-ear",
    },
    {
      id: 2,
      name: "Bose Sleepbuds II",

      price: 79,
      quantity: 1,
      available: false,
      spec1: "Wireless sports LED Bluetooth in-ear",
    },
    {
      id: 3,
      name: "Bose Sleepbuds II",
      price: 99,
      quantity: 1,
      available: true,
      spec1: "Wireless sports LED Bluetooth in-ear",
    },
    // Add more items as needed
  ]);

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value) || 0;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="CartPageDiv containerDiv">
        <div className="CartPageInnerDiv">
          <div className="CartPageLinkDiv">
            <WestIcon />{" "}
            <Link className="CartPageShoppingLink" to="/products">
              Continue Shopping
            </Link>
          </div>

          <div className="CartPageShoppingDiv">
            <div className="CartPageShoppingHeadingDiv">
              <p className="CartPageShoppingHeading">Shopping Bag</p>
            </div>
            <div className="CartPageCouponDiv">
              <p className="CartPageCouponHeading">APPLY COUPON CODE</p>
              <div className="CartPageApplyCoupon">
                <input
                  type="text"
                  className="CartPageCouponInput"
                  placeholder="EX. CDW#"
                ></input>
                <button className="CartPageApplyCouponButton">APPLY</button>
              </div>
            </div>
          </div>

          <div className="CartPageItemSummaryDiv">
            <table className="CartPageProductInfoTable">
              <thead>
                <tr className="CartPageHeadInfoRow">
                  <th className="CartPageHeadTabs">ITEM</th>
                  <th className="CartPageHeadTabs">AVAILABILITY</th>
                  <th className="CartPageHeadTabs">PRICE</th>
                  <th className="CartPageHeadTabs">QUANTITY</th>
                  <th className="CartPageHeadTabs">ITEM TOTAL</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan={5}>
                    <hr />
                  </td>
                </tr>
                {cartItems.map((item) => (
                  <tr className="CartPageItemInfo" key={item.id}>
                    <td className="CartPageItem">
                      <div className="CartPageProductImageDiv">
                        <img
                          src={ProductPhoto}
                          className="CartPageProductImage"
                          alt="product"
                        ></img>
                      </div>
                      <div className="CartPageItemSpecsDiv">
                        <p className="CartPageItemSpecsName">{item.name}</p>
                        <p className="CartPageItemSpec">{item.spec1}</p>
                      </div>
                    </td>
                    <td className="CartPageItemAvaibility">
                      {item.available ? (
                        <span style={{ color: "green" }}>In Stock</span>
                      ) : (
                        <span style={{ color: "red" }}>Out of Stock</span>
                      )}
                    </td>
                    <td className="CartPageProductPrice">
                      <span>${item.price.toFixed(2)}</span>
                    </td>
                    <td className="CartPageProductQuantityDiv">
                      <div className="CartPageProductQuantitySubDiv">
                        <button
                          className="CartPageProductQuantityButton"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="counter"
                          value={item.quantity}
                          onChange={(e) => handleChange(e, item.id)}
                          className="CartPageProductQuantityInput"
                          min={1}
                        />
                        <button
                          className="CartPageProductQuantityButton"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="CartPageItemTotal">
                      <span className="CartPageItemTotalPrice">{`$${(
                        item.price * item.quantity
                      ).toFixed(2)}`}</span>
                    </td>
                    <td className="CartPageDeleteItem">
                      <button onClick={() => removeItem(item.id)}>
                        <img src={bin} alt="delete"></img>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="CartPageOrderSummaryDiv">
              <p className="CartPageOrderSummaryHeading">Order Summary</p>
              <div className="CartPageOrderSummarySubtotal">
                <p>Subtotal:</p>
                <p>${getTotalPrice().toFixed(2)}</p>
              </div>
              <div className="CartPageOrderSummaryTaxText">
                <p>Tax and Shipping calculated at checkout</p>
              </div>
              <hr />
              
              <button className="CartPageOrderSummaryCheckoutButton">Checkout</button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* cart page inner div */}
    </>
  );
};
