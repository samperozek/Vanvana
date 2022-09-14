
import React from "react";
import { Link } from "react-router-dom";


function Header () {
    return(
        <div>
            <img 
            onClick={()=> window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
            src="https://www.seekpng.com/png/detail/89-890024_red-volkswagen-camper-van-png-stickpng-transport-vw.png" alt="Captain Planet" id="main-header" />
           
            <h1 id = "headerText">Vanvana</h1>
            <h4 id = "headerText">When living in a van down by the river was a joke...</h4>
        </div>
    )
}

export default Header;