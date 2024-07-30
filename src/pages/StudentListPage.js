import React, { useState, useRef, useEffect } from "react";
import Students from "../components/students/students";
import Button from "../components/UI/botton/botton";
import { useNavigate,Outlet } from "react-router";


const StudentListPage = (props) => {
  // const inputElm=useRef(null)
  const navigate=useNavigate()
  const [studentsState, setStudents] = useState([
    {
      id: 0,
      name: "hamid",
      classNumber: 203,
      phoneNumber: 12345,
      email: "hamid@gmail.com",
    },
    {
      id: 1,
      name: "hasan",
      classNumber: 303,
      phoneNumber: 123456,
      email: "hasan@gmail.com",
    },
    {
      id: 2,
      name: "alireza",
      classNumber: 303,
      phoneNumber: 123456,
      email: "hasan@gmail.com",
    },
    {
      id: 3,
      name: "saeed",
      classNumber: 603,
      phoneNumber: 123459,
      email: "saeed@gmail.com",
    },
  ]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() => {
    setArrayHolder(studentsState);
    console.log(props)
    // inputElm.current.focus();
  }, []);
  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStudents(itemData);
    setSearchBarValue(event.target.value);
  };

  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });

    const student = { ...studentsState[studentIndex] };

    student.name = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const studentDeleted = (index) => {
    const students = [...studentsState];
    students.splice(index, 1);
    setStudents(students);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const scroolTopHandler = () => {
    window.scrollTo(0, 300);
  };
  const goBackHandler=()=>{
     navigate(-2)
  }

  return (
    <React.Fragment>
      <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterFunction}
        style={{ marginTop: "4rem" }}
      ></input>
      <Button buttonType="sucsses" clicked={toggleHandler}>
        وضعیت نمایش اطلاعات
      </Button>
      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        deleted={studentDeleted}
        toggle={toggle}
      />

      <Button clicked={scroolTopHandler}>برگرد بالا</Button>
      <Outlet/>
    </React.Fragment>
  );
};
export default StudentListPage;
