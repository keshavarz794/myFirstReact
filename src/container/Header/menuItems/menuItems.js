import React from "react";
import MenuItem from "./menuItem/menuItem";
import './menuItems.css'

const MenuItems=()=>{
    return(
        
            <ul className="menuItems" >
                
                <MenuItem link='/home'  >
                صفحه اصلی
                </MenuItem>
                <MenuItem link='/student' >
                دانش آموزان
                </MenuItem>
                <MenuItem link='/add-student' >
                 اضافه کردن دانش آموز
                </MenuItem>
            </ul>
        

    )
}
export default React.memo(MenuItems);