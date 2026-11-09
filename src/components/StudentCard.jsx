import React from 'react';
import StatusBadge from './StatusBadge';

const StudentCard = ({ student }) => {
    return (
        <div className={`student-card ${!student.isActive ? 'inactive' : ''}`}>
            <div>
                <h3>{student.name}</h3>
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Group:</strong> {student.group}</p>
            </div>
            <StatusBadge isActive={student.isActive} age={student.age} />
        </div>
    );
};

export default StudentCard;