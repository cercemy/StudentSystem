import React from 'react';
import { GetAllStudents } from '../api/ApiCalls.js'; 

function StudentList() {
    const students = GetAllStudents();

    return (
        <div>
            {Object.values(students).map(student => (
                <div key={student.nic}>
                    <p>{student.name}</p>
                    <p>{student.address}</p>
                    <p>{student.contact}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentList;
