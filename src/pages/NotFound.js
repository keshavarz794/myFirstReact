import React from "react";
import Button from '../components/UI/botton/botton';
import './styles/notFound.css'
import { BsEmojiNeutral } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs"
import { useNavigate } from "react-router";


const NotFound=()=>{
    // const returnToHomepage=()=>{
    //     useNavigate('/home')
    // }


    return(
        <div className="notFound">
                <BsEmojiNeutral style={{fontSize:'60px',fontWeight:'bold',color:'red'}} />
            <h1>
                صفحه مورد نظر یافت نشد
            </h1>
            <h3>لطفا به صفحه اصلی برگردید </h3>

            <Button  >
                <BsArrowLeftCircle />
                بازکشت به صفحه اصلی

            </Button>

        </div>
    )
}

export default NotFound;