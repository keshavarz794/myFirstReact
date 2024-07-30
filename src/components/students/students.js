import React from "react";
import Student from "./student/student";
import "./students.css"
import PropTypes from 'prop-types';

const Students=(props)=>{
    
    
    return(
        props.studentsList.map((student,index)=>
            <Student
            key={index} 
            id={student.id}
            name={student.name}
            classNumber={student.classNumber}
            phone={student.phoneNumber}
            email={student.email}
            // nameChanged={(event)=>props.nameChanged(event,student.id)}
            deleted={props.deleted}
            toggle={props.toggle}
            
            
            
            
            />  
        )

    
    )

}

export default React.memo(Students);

Students.prototype={
    studentsList:PropTypes.array.isRequired,
    nameChanged:PropTypes.func.isRequired,
    deleted:PropTypes.func.isRequired,
    toggle:PropTypes.bool.isRequired,
}

