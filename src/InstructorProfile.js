import React from 'react';

const InstructorProfile = ({ instructorId }) => {
  const instructor = { id: instructorId, name: 'Instructor Name', bio: 'Instructor bio' };

  return (
    <div>
      <h2>{instructor.name}</h2>
      <p>{instructor.bio}</p>
    </div>
  );
};

export default InstructorProfile;
