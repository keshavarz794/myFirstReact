import React from "react";
import './botton.css';
import PropTypes from 'prop-types';

const Button=(props)=>{
    let calsses=['button']
    switch(props.buttonType){
        case 'danger' :
            calsses.push('danger');
        break;
        case 'sucsses' :
            calsses.push('sucsses')
        break;
        case 'edit' :
            calsses.push('edit')
        break;
        default:
        break;
    }
    return(
        <button
         className={calsses.join(' ')}
         onClick={props.clicked}
         >
            {props.children}
          </button>
    )
}

export default React.memo(Button) ;
Button.propTypes={
    children:PropTypes.string.isRequired,
    clicked:PropTypes.func.isRequired,
    buttonType:PropTypes.string

}
Button.defaultProps={
    buttonType:'sucsses'
}