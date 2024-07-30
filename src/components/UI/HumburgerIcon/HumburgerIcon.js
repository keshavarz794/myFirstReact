import React from "react";
import './HumburgerIcon.css'

const HumburgerIcon=(props)=>{
    return (
        <div onClick={props.clicked}>
            <div className="hunburger"></div>
            <div className="hunburger"></div>
            <div className="hunburger"></div>
        </div>
    )
}
export  default HumburgerIcon;