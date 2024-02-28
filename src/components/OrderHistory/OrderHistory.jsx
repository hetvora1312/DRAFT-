import React from "react";
import "./assets/css/OrderHistory.css";
import OrderHistorySide from "./OrderHistorySide";
import OrderHistoryMain from "./OrderHistoryMain";

function OrderHistory() {
  return (
    <>
      <div className="Good-EveningMain">
        <div className="Good-Evening">
          <h1>Good Evening!</h1>
        </div>
      </div>

      <div className="orderHistory containerDiv">
        <div className="orderHistoryMain">
          <OrderHistorySide />
          <OrderHistoryMain/>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
