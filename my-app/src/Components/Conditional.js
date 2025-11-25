import React from "react";

function ConditionalRendering(Props){
    if(Props.isLoggedIn === "ADMIN"){
        return (
            <>
                <p>Hi {Props.isLoggedIn}</p>
            </>
        );
    }
    return(
        <>
            <p>Hi {Props.isLoggedIn}</p>
        </>
    );
}


function TerniaryCondition(Props){
    return (
        <>
            <p>{Props.isLoggedIn === "ADMIN" ? "Hi "+ Props.isLoggedIn : "Hi " + Props.isLoggedIn}</p>
        </>
    );
}

function AndOperator(Props){
    return (
        <>
            {Props.isLoggedIn === "ADMIN" && <p>Hi { Props.isLoggedIn}</p>}
        </>
        
    );    
}
export { ConditionalRendering,TerniaryCondition,AndOperator} ;