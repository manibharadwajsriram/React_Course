import React from "react";
import './Content.css';
function Content(Props){
    return(
        <>
            <div className="content">
                {Props.children}
            </div>
        </>
    );
}

export default Content;