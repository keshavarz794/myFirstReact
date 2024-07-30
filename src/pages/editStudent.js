import React,{useState,useEffect} from 'react';
import Button from '../components/UI/botton/botton'
import './styles/editStudent.css'









const EditStudent=(props)=>{


    
    
    const editStudent=()=>{
        alert('edit')
    }
    return(
        <div className="editstudent">
            <h2> ویرایش مشخصات دانش آموز</h2>
            <label>نام و نام خانوادگی</label>
            <input type="text"  />
            <label> کلاس   </label>
            <input type="text"  />
            <label> شماره تماس   </label>
            <input type="number"   />
            <label>ایمیل   </label>
            <input type="email" />
            <Button buttonType='edit' clicked={editStudent} >
                ثبت  تغییرات
            </Button>


        </div>

    )
}

export default EditStudent;