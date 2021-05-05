import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/upload'>Upload your recipe</Link>
        </div>
    );
}

export default Navbar;