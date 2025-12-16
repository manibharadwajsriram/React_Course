import React,{useMemo, useState} from "react";

function Febonaci(c){
    let result=0;
    console.log("HIII");
    for(let i=0;i<100;i++){
        result+=c;
    }
    return result;
}
function UseMemo(){
    const [count,setCount]=useState(1);
    const [toggle,setToggle]=useState(false);

    const ren = useMemo(()=>Febonaci(count),[count]);
    function handleClick(){
        setCount(prev=> prev+1);
    }
    
    return (
        <>
        Count: {count};
        <br />
        {ren}
        <br />
        <button onClick={handleClick}>Incerase Count</button>
        <br/>
        Toggle:{toggle? 'on' : 'off'}
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </>

    );
}

export default UseMemo;