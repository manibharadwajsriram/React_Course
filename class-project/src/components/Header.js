import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';


function Header(){
    return (
        <header className="headerStyle">
            <h1>My Product Store</h1>
            <div className="linkStyle">
                <Link className="cartColor">Cart</Link>
            </div>
        </header>
    );
}

export default Header;