import React, { useState } from "react";
import { products as productData } from "../data/product-mock";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";


function DashBoard({onAddToCart}){
    const [products,setProducts]=useState(productData);
    const [favorites, setFavorites] = React.useState([]);
    const [wishlist, setWishlist] = React.useState([]);
    const [filters,setFilters]=useState({
        price: {
            min : 0,
            max: 999,
        }
    });

    const handleOnPurchase = (productId,stockCount,purchaseCount)=>{
        const purchaseProduct = products.find((products)=> productId === products.id);
        if(purchaseProduct){
            purchaseProduct.count = purchaseProduct.count + purchaseCount;
        }
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                productId === product.id ? {...product,stockCount,count: purchaseProduct.count}: product)
        );
        if(purchaseProduct){
            onAddToCart(purchaseProduct);
        }
    }

    const handleOnFavorite = (productId) => {
      if(favorites.includes(productId)) {
        setFavorites((prevFavorites)=> prevFavorites.filter((id)=> id !== productId));
        setWishlist((prevWishlist)=> prevWishlist.filter((item)=> item.id !== productId));
      } else {
        setFavorites((prevFavorites)=> [...prevFavorites, productId]);
        const product = products.find((product)=> product.id === productId);
        setWishlist((prevWishlist)=> [...prevWishlist, product]);
        console.log(wishlist);
      }
    }

    const handleOnFilter=(key,value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            price:{
                ...prevFilters.price,
                [key] : value,
            }
        }) )
    }

    return (
        <>
            <ProductList>
                {products.map(product=>(
                    <ProductCard 
                        key={product.id}
                        product={product}
                        onPurchase={handleOnPurchase}
                        isFavorite={favorites.includes(product.id)}
                        onFavorite={handleOnFavorite}    
                    />
                ))}
            </ProductList>
            <h2>Products Filtered by Price</h2>
            <ProductFilter onFliter={handleOnFilter} filters={filters}/>
            <ProductList>
                {
                    (()=>{
                        const filterProducts= products.filter(
                            ({price})=>price >= filters.price.min && price <= filters.price.max
                        );

                        if(filterProducts.length===0){
                            return <p>No Products Available</p>;
                        }
                        return filterProducts.map((product)=>(
                            <ProductCard 
                                key={product.id}
                                product={product}
                                onPurchase={handleOnPurchase}
                                isFavorite={favorites.includes(product.id)}
                                onFavorite={handleOnFavorite}
                                
                            />
                        ));
                        
                    })()
                }
            </ProductList>
        </>
    );
}

export default DashBoard;