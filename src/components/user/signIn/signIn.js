import React from "react";
import Button from '../../UI/botton/botton';
import './signIn.css'
import logo from '../../../assest/images/snail-icon-free-vector.jpg';


const SignIn=()=>{
    const inputHandler=()=>{

    }
    return(
        <React.Fragment>
            <img src={logo}/>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <Button>ورود</Button>
        </React.Fragment>

    )
}
 export default SignIn;