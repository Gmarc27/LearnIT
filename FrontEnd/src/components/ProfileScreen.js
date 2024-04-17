import React, { useState } from 'react';
import { MdSettings, MdExitToApp } from 'react-icons/md'; // Using icons from react-icons
import profileImage from '../assets/profile.jpg'; // Import profile image
import course1Image from '../assets/course1.png'; // Import course 1 image
import course2Image from '../assets/course2.png'; // Import course 2 image

const ProfileScreen = () => {
  const [courseProgress, setCourseProgress] = useState({});

  const handleLogout = () => {
    // Implement logout logic here
  };

  const handleSettings = () => {
    // Navigate to settings screen or implement settings logic here
  };

  const handleAddCourse = () => {
    // Navigate to CourseContentScreen
  };

  const handleViewContent = (content) => {
    // Navigate to CourseContentScreen passing the content
  };

  const handleProgressUpdate = (courseId, progress) => {
    setCourseProgress(prevProgress => ({
      ...prevProgress,
      [courseId]: progress,
    }));
  };

  // Sample data for courses and their progress
  const courses = [
    { 
      id: '1', 
      title: 'HTML', 
      description: 'This is the description for Course 1.', 
      content: 'Course content for Course 1. This could be a long text describing the course content in detail.',
      image: course1Image,
      progress: courseProgress['1'] || 0
    },
    { 
      id: '2', 
      title: 'CSS', 
      description: 'This is the description for Course 2.', 
      content: 'Course content for Course 2. This could be a long text describing the course content in detail.',
      image: course2Image,
      progress: courseProgress['2'] || 0
    },
    // Add more courses as needed
  ];

  // Function to simulate progress increase for a course
  const increaseProgress = (courseId) => {
    const currentProgress = courseProgress[courseId] || 0;
    const newProgress = Math.min(currentProgress + 10, 100); // Increment by 10%, but ensure it doesn't exceed 100%
    handleProgressUpdate(courseId, newProgress);
  };

  return (
    <div className="container">
        <div className="sidebar">
          <img src={profileImage} alt="Profile" className="profileImage" />
          <div className="profileTitle">John Doe</div>
          <div className="sidebarButton" onClick={handleSettings}>
            <MdSettings size={24} color="black" />
            <span className="buttonText">Settings</span>
          </div>
          <div className="sidebarButton" onClick={handleLogout}>
            <MdExitToApp size={24} color="black" />
            <span className="buttonText">Logout</span>
          </div>
        </div>
      <div className="content">
        <div className="title">My Courses</div>
        {courses.map(course => (
          <div key={course.id} className="courseItem">
            <img src={course.image} alt={course.title} className="courseImage" />
            <div className="courseTitle">{course.title}</div>
            <div className="courseDescription">{course.description}</div>
            <progress className="progressBar" value={course.progress} max={100}></progress>
            <div>
            <button className="viewContentButton" onClick={() => handleViewContent(course.content)}>View Content</button>
            </div>
          </div>
        ))}
        <div className="addButton" onClick={handleAddCourse}>
          <span className="addButtonLabel">Add Another Course</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
