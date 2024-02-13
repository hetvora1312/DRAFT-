import React from "react";
import "./Final.css";
import { Product } from "./product/Product.jsx";
import Filter from "./Filter/Filter.jsx";

export const Final = () => {
    return (
        <>
            <div className="final_body">
                <div className="fetch_">
                 <Filter/>
                </div>
                <div className="product_">
                    <Product/>
                </div>
            </div>
        </>
    );
};
