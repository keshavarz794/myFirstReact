import React,{useEffect} from "react";
import './newStudent.css';
import Button from "../../UI/botton/botton";


const NewStudent=(props)=>{
    // useEffect(()=>{
    //     console.log(props)
    // },[])
    const{studentName,studenClass,studentPhone,studentEmail,studentNameHandler,studenClassHandler,studentPhoneHandler,studentEmailHandler}=props;
    
    return(
        <div className="newstudent">
            <h2>اضافه کردن دانش آموز</h2>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={studentName}  onChange={studentNameHandler} />
            <label> کلاس   </label>
            <input type="text"  value={studenClass} onChange={studenClassHandler}  />
            <label> شماره تماس   </label>
            <input type="number"  value={studentPhone} onChange={studentPhoneHandler}  />
            <label>ایمیل   </label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler} />
            <Button buttonType='danger' clicked={props.clicked}>
                ثبت دانش آموز
            </Button>


        </div>
    )

}
export default React.memo(NewStudent) ;
