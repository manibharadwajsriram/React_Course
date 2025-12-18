import React from "react";
import './ProductList.css';
function ProductList(Props){
    return(
        <>
            <h2>Products</h2>
            <div className="List">
                {Props.children}
            </div>
        </>
    );
}

export default ProductList;