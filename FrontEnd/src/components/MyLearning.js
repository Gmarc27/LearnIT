import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import course1Image from '../assets/course1.png'; // Import course 1 image
import course2Image from '../assets/course2.png'; // Import course 2 image



function MyLearning() {
    const [courseProgress, setCourseProgress] = useState({});

    const handleAddCourse = () => {
        // Navigate to CourseContentScreen
      };
    
      const handleViewContent = (content) => {
        // Navigate to CourseContentScreen passing the content
      };

    const courses = [
        { 
          id: '1', 
          title: 'HTML', 
          description: 'This is the description for Course 1.', 
          image: course1Image,
          progress: courseProgress['1'] || 0
        },
        { 
          id: '2', 
          title: 'CSS', 
          description: 'This is the description for Course 2.', 
          image: course2Image,
          progress: courseProgress['2'] || 0
        },
        // Add more courses as needed
      ];
    
      const increaseProgress = (courseId) => {
        const currentProgress = courseProgress[courseId] || 0;
        const newProgress = Math.min(currentProgress + 10, 100); // Increment by 10%, but ensure it doesn't exceed 100%
        handleProgressUpdate(courseId, newProgress);
      };
    
      const handleProgressUpdate = (courseId, progress) => {
        setCourseProgress(prevProgress => ({
          ...prevProgress,
          [courseId]: progress,
        }));
      };
    

  return (
    <div className="content">
        <div className="title">My Courses</div>
        {courses.map(course => (
          <div key={course.id} className="courseItem">
            <img src={course.image} alt={course.title} className="courseImage" />
            <div className="courseTitle">{course.title}</div>
            <div className="courseDescription">{course.description}</div>
            <progress className="progressBar" value={course.progress} max={100}></progress>
            <div >
            <button className="viewContentButton" onClick={() => handleViewContent(course.content)}>View Content</button>
            </div>
          </div>
        ))}
        <div className="addButton" onClick={handleAddCourse}>
          <span className="addButtonLabel">Add Topics</span>
        </div>
      </div>
  )
}

export default MyLearning