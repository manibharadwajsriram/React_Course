import React, { useState } from "react";
import { products as productData } from "../data/product-mock";


function DashBoard(){
    const [products,setProducts]=useState(productData);

    return (
        <>
        {products.map(product=>(
            <p>Product is {product.title}</p>
        ))}
        </>
    );
}

export default DashBoard;