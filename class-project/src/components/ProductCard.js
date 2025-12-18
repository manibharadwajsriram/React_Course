import React, { useState } from "react";
import './ProductCard.css';

function ProductCard({product, onPurchase, isFavorite,onFavorite}){
    const [showMore,setShowMore]=useState(false);
    const [summary,setSummary] = useState('');
    const [isLoading,setIsLoading]= useState(false);

    function handleFavoriteClick(){
        onFavorite(product.id)
    }
    function handleGenAISummary(){

    }
    const handlePurchaseSingeItem = () =>{
        onPurchase(product.id,product.stockCount -1,-1);
    }

    const handlePurchaseTwoItem = () =>{
        onPurchase(product.id,product.stockCount -2,-2);
    }
    return (
        <>
            <div className="Container">
                <button className="Favorite" onClick={handleFavoriteClick}>
                {isFavorite? "❤️" : "🩶"}
                </button>
                <h2>{product.title}</h2>
                <img
                    src={product.imageSrc}
                    alt={product.title}
                    width={128}
                    height={128}
                />
                <p> specifications:
                    <button onClick={()=>{setShowMore(!showMore)}}>{showMore ? "Hide" : "Show"} </button>
                </p>
                {showMore &&
                    <ul className="Specifications">
                        {product.specifications.map((spec,index)=>
                            <li key={index}>{spec}</li>
                        )}
                    </ul>
                }
                <button onClick={handleGenAISummary} disabled={isLoading}>{isLoading ? 'Generating...': 'Get GenAI Summary'}</button>
                {summary &&(
                    <div>
                        <h4>Ai Response</h4>
                        <p>{summary}</p>
                    </div>
                )}

                <StockCount count={product.stockCount}/>
                <>
                    <p>Price: ${product.price}</p>
                    {product.stockCount>0 &&
                    <button onClick={handlePurchaseSingeItem}>Buy</button>
                    }
                    {product.stockCount>1 &&
                    <button onClick={handlePurchaseTwoItem}>Buy2</button>
                    }
                </>
                
                

            </div>
        </>

    );
}

function StockCount({count}){
    const NotAvailable=(<p>No Stock is Not Available</p>);
    const Available=(<p>{count}: Available</p>);
    return (count>=0?Available : NotAvailable);
}

export default ProductCard;