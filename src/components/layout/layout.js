import React from "react";
import './Layout.module.css'
import Toolbar from "../../container/Header/toolbar/toolbar";
import Footer from "../footer/footer";  


const Layout=(props)=>{
    return(
        <React.Fragment>

            <Toolbar/>
            <main className="content">

             {/* {props.children} */}
            </main>
    
            <Footer/>


        </React.Fragment>

    )
}

export default Layout;