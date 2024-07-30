import React from "react";
import './modal.css'

const Modal=(props)=>{
    let showClasses=['modal']
    if(props.show){
        showClasses.push('showmodal')
    }
    else{
        showClasses.push('closemodal') 
    }

    return(
        <div className={showClasses.join(' ')} 
          
        
        >
            {props.children}

        </div>

    )
}
export default React.memo(Modal);