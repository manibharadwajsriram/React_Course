import React from "react";

function Products(){
    const products=['Apple','Bannana','Mango'];
    return (
        <>  
            <ol>
                {products.map( n => <li>{n}</li>)}
            </ol>
        </>
    );
}

export default Products;