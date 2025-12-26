import React from "react";

function ProductFilter({onFliter,filters}){
    return(
        <div>
            Price: $
            <input
                defaultValue={filters.price.min}
                type="number"
                min={0}
                max={999}
                placeholder="Min Price"
                onChange={(e)=>{onFliter("min",e.target.value)}}
            />
            - $
            <input 
                defaultValue={filters.price.max}
                type="number"
                min={0}
                max={999}
                placeholder="Max Price"
                onChange={(e)=>{onFliter("max",e.target.value)}}
            />
        </div>
    );
}

export default ProductFilter;