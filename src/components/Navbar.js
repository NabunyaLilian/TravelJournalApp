import React from 'react';
import earth from "../images/earth.png"

function Navbar(){
    return(
      <nav>
          <img src={earth} alt="app logo"/>
          <span>my travel journal.</span>
      </nav>
    )
}


export default Navbar;