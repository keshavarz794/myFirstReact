import React from "react";
import siteLogo from '../../assest/images/snail-icon-free-vector.jpg'
import './logo.css'
const Logo=(props)=>{
    return(
        <div className="logo" style={{height:props.height}}>
            <img src={siteLogo} alt="logo of site"/>
            <h6>design by Hamid</h6>

        </div>
    )
}

export default React.memo(Logo);