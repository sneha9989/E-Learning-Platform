import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Course 1', description: 'Description of Course 1' },
    { id: 2, title: 'Course 2', description: 'Description of Course 2' },
  ]);

  return (
    <div className="container">
      <h1>Course Listings</h1>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`} className="button">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
