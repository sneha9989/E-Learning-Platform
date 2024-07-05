import React from 'react';
import { useParams } from 'react-router-dom';
import InstructorProfile from './InstructorProfile';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = { id: courseId, title: `Course ${courseId}`, description: `Description of Course ${courseId}`, syllabus: 'Syllabus content', instructorId: 1 };

  return (
    <div className="container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Syllabus</h2>
      <p>{course.syllabus}</p>
      <h2>Instructor</h2>
      <InstructorProfile instructorId={course.instructorId} />
    </div>
  );
};

export default CourseDetail;
