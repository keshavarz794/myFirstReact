import React,{useState} from "react";
import Button from "../../../components/UI/botton/botton";
import MenuItems from "../menuItems/menuItems";
import './toolbar.css'
import Logo from "../../../components/logo/logo";
import Modal from '../../../components/UI/modal/modal';
import SignIn from "../../../components/user/signIn/signIn";
import BackDrop from "../../../components/UI/backDrop/backDrop";
import HumburgerIcon from "../../../components/UI/HumburgerIcon/HumburgerIcon";
import SideDrawer from "../SideDrawer/SideDrawer";
import { Link } from "react-router-dom";




const Toolbar=(props)=>{

    const[showModal,setShowMedal]=useState(false)
    const[sideDrawerShow,setSideDrawerShow]=useState(false)
    const[isLogIn,setIsLogIn]=useState(true)
    const modalHandler=()=>{
        setShowMedal(true)
    }
    const closeModalHandler=()=>{
        setShowMedal(false)
    }

    const SideDrawerHandler=()=>{
        setSideDrawerShow(true)
    }
    const closingSideDrawerHandler=()=>{
        setSideDrawerShow(false)
    }

    return(
        <header className="toolbar" >
            
            <HumburgerIcon clicked={SideDrawerHandler} />
            
            {
                !sideDrawerShow?
                <React.Fragment>
                    

                        <Link to='/home' >
                            <Logo height= '100%'/>
                            
                        </Link>
                    
                    
                    <nav >
                       <MenuItems/>
                    </nav>
                    
                    <Button buttonType='sucsses' clicked={modalHandler}
                    >
                    {
                        isLogIn?'ورود' : 'ثبت نام'


                    }
                         
                         
                    </Button>
                </React.Fragment>: 
                <React.Fragment>
                    <SideDrawer show={sideDrawerShow} clicked={closingSideDrawerHandler}/>
                    
                </React.Fragment>

            }
            
            
            
            
                
            <   Modal show={showModal}>
                <h3>خوش آمدید </h3>
                <SignIn></SignIn>
                </Modal>
                {
                    showModal?
                    <BackDrop clicked={closeModalHandler}/>:null

                }


            
        </header>
    )
}
export default Toolbar;