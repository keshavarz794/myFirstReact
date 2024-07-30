import React from "react";
import "./student.css";
import Button from "../../UI/botton/botton";
import { Link,useParams,Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const Student = (props) => {
  let params=useParams()
  if (props.toggle) {
    return (
      <div className="student">
        <label>شماره دانش آموزی :{props.id}</label>
        <label>نام و نام خانوادگی:{props.name}</label>
        <div style={{ display: "flex" }}>
        <Button buttonType="danger" clicked={props.deleted}>
          حدف
        </Button>
        <Link to={'/student'+params.studentId} >

        <Button buttonType="edit">ویرایش</Button>
        </Link>
      </div>
        
      </div>
    );
  }

  return (
    <div className="student">
      <label>شماره دانش آموزی :{props.id}</label>
      <label>نام و نام خانوادگی:{props.name}</label>
      <label> کلاس : {props.classNumber} </label>
      <label> شماره تماس :{props.phone} </label>
      <label>ایمیل :{props.email} </label>
      <div style={{ display: "flex" }}>
        <Button buttonType="danger" clicked={props.deleted}>
          حدف
        </Button>
        <Link to={'/student'+params.studentId}  >
            <Button buttonType="edit">ویرایش</Button>
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default React.memo(Student);
