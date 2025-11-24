import React from "react";
import { useState } from "react";

function State(){
    const [count,setCount]=useState(0);
    return(
        <>
            <h2>Count Value = {count}</h2>
            <button name="increment" onClick={()=> {setCount(preCount => preCount+1)}}>Incerment</button>
            <button name="reset" onClick={()=>{setCount(0)}}>Reset</button>
        </>
    );

}

export default State;