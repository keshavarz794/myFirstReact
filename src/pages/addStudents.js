import React,{useState,useEffect} from 'react';
import NewStudent from '../components/students/newStudent/newStudent';









const AddStudent=(props)=>{
    
    const[studentsState,setStudents]=useState([
        {id:0,name:'hamid',classNumber:203,phoneNumber:12345,email:'hamid@gmail.com'},
        {id:1,name:'hasan',classNumber:303,phoneNumber:123456,email:'hasan@gmail.com'},
        {id:2,name:'alireza',classNumber:303,phoneNumber:123456,email:'hasan@gmail.com'},
        {id:3,name:'saeed',classNumber:603,phoneNumber:123459,email:'saeed@gmail.com'},
      ])

    const[studentName,setStudentName]=useState('')
  const[studenClass,setStudentClass]=useState('')
  const[studentPhone,setStudentPhone]=useState('')
  const[studentEmail,setStudentEmail]=useState('')

  const studentNameHandler=(event)=>{
    setStudentName(event.target.value)
  }
  const studenClassHandler=(event)=>{
    setStudentClass(event.target.value)
  }
  const studentPhoneHandler=(event)=>{
    setStudentPhone(event.target.value)
  }
  const studentEmailHandler=(event)=>{
    setStudentEmail(event.target.value)
  }

  const addNewStudentHandeler=()=>{
    
    const newStudentsState=[...studentsState];
    newStudentsState.push({
      'id':studentsState.length,
      'name':studentName,
      'classNumber':studenClass,
      'phoneNumber':studentPhone,
      'email':studentEmail

    });
    
    setStudents(newStudentsState)
    console.log(studentsState)
    
    
    
    setStudentName('')
    setStudentClass('')
    setStudentPhone('')
    setStudentEmail('')
    
  }
 

    return(
        <NewStudent
      studentName={studentName}
      studenClass={studenClass}
      studentPhone={studentPhone}
      studentEmail={studentEmail} 
      studentNameHandler={studentNameHandler}
      studenClassHandler={studenClassHandler}
      studentPhoneHandler={studentPhoneHandler}
      studentEmailHandler={studentEmailHandler}
      clicked={addNewStudentHandeler}
      history={props.history}
      
      
      /> 

    )
}

export default AddStudent;