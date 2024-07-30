import React from "react";
import MenuItems from '../menuItems/menuItems'
import Logo from "../../../components/logo/logo";
import Button from "../../../components/UI/botton/botton";
import BackDrop from "../../../components/UI/backDrop/backDrop";
import './SideDrawer.css'

const SideDrawer=(props)=>{
    let calsses=['SideDrawer','Close']
    if(props.show){
        calsses=['SideDrawer','Open']
    }
    
    return (
        <React.Fragment>
            <BackDrop show={props.show} clicked={props.clicked} />
            <div className={calsses.join(' ')}>
            <Logo height= '10%' />
            {
                props.show?
                
            <nav>
            <MenuItems/>
            </nav>:null


            }
            {
                props.show?
                
                <div className="BoxButton" >

            <Button buttonType='sucsses' clicked={()=>{alert('salam')}} >وروود/ ثبت نام</Button>
            </div>:null

            }

            
            



            </div>
        </React.Fragment>
        

    )
}

export default SideDrawer;