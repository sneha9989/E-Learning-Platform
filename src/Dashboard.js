import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([
    { id: 1, title: 'Course 1', progress: 50 },
    { id: 2, title: 'Course 2', progress: 30 },
  ]);

  if (!user) return <div>Please log in</div>;

  return (
    <div className="container">
      <h1>Learning Dashboard</h1>
      <h2>Enrolled Courses</h2>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <h3>{course.title}</h3>
            <p>Progress: {course.progress}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
