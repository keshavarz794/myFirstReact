import React from "react";
import { NavLink } from "react-router-dom";

import './menuItem.css'

const MenuItem=(props)=>{
    
    
    return(
        
        <li className="menuItem" >
            <NavLink to={props.link}  >
               {props.children} 
             </NavLink>
        </li>
                
    )
}
export default React.memo(MenuItem);