import React from 'react';
import StudentCard from './StudentCard';

const StudentsList = ({ students = [] }) => {
    const totalCount = students.length;

    if (totalCount === 0) {
        return <p className="empty-message">The student list is empty.</p>;
    }

    return (
        <section className="students-section">
            <h2 className="students-count">Total Students: {totalCount}</h2>
            <div className="students-grid">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </section>
    );
};

export default StudentsList;