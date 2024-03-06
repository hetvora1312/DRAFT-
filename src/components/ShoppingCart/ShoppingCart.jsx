import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import "./assets/css/ShoppingCart.css";
import Navbar from "../Navbar1/Navbar";
import bin from "./assets/images/bin.png";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity + 1 }
          : item
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

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));

    // Remove item from local storage
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.pricePerUnit * item.quantity,
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
            {cartItems.length === 0 ? (
              <div className="CartPageEmptyCartText">
                Your Cart is Empty!!
              </div>
            ) : (
              <table
                cellSpacing="100"
                className="CartPageProductInfoTable"
              >
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
                    <td colSpan={6}>
                      <hr />
                    </td>
                  </tr>
                  {cartItems.map((item) => (
                    <tr className="CartPageItemInfo" key={item.id}>
                      <td className="CartPageItemDiv">
                        <div className="CartPageItem">
                          <div className="CartPageProductImageDiv">
                            <img
                              src={item.img}
                              className="CartPageProductImage"
                              alt="product"
                            ></img>
                          </div>
                          <div className="CartPageItemSpecsDiv">
                            <p className="CartPageItemSpecsName">
                              {item.name}
                            </p>
                            <p className="CartPageItemSpec">{item.spec1}</p>
                          </div>
                        </div>
                      </td>
                      <td className="CartPageItemAvailability">
                        <div>
                          {item.quantity ? (
                            <span style={{ color: "green" }}>In Stock</span>
                          ) : (
                            <span style={{ color: "red" }}>Out of Stock</span>
                          )}
                        </div>
                      </td>
                      <td className="CartPageProductPrice">
                        <span>${item.pricePerUnit.toFixed(2)}</span>
                      </td>
                      <td className="CartPageProductQuantityDiv">
                        <span className="CartPageProductQuantitySubDiv">
                          <button
                            className="CartPageProductQuantityButton"
                            onClick={() => handleDecrement(item.id)}
                          >
                            -
                          </button>
                          <p className="CartPageProductQuantityInput">
                            {item.quantity}
                          </p>
                          <button
                            className="CartPageProductQuantityButton"
                            onClick={() => handleIncrement(item.id)}
                          >
                            +
                          </button>
                        </span>
                      </td>
                      <td className="CartPageItemTotal">
                        <span className="CartPageItemTotalPrice">{`$${(
                          item.pricePerUnit * item.quantity
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
            )}
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
              <button className="CartPageOrderSummaryCheckoutButton">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* cart page inner div */}
    </>
  );
};

export default ShoppingCart;
