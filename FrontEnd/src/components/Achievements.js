import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList, faSquareMinus, faChartSimple, faClockRotateLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png';
import course1Image from "../assets/course1.png";
import course2Image from "../assets/course2.png";
import course3Image from "../assets/course3.png";
import course4Image from "../assets/course4.png";
import course5Image from "../assets/course5.png";
import Medal1 from "../assets/Medal1.png";
import Medal2 from "../assets/Medal2.png";
import Medal3 from "../assets/Medal3.png";
import Profile from "../assets/profile.jpg";

function Achievements() {
  const [courseProgress, setCourseProgress] = useState({});
  const [userData, setUserData] = useState(null);
  const [responseCourseData, setResponseCourseData] = useState(null);
  const [responseCourses, setResponseCourses] = useState(null);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handleProfile = () => {
    navigate("/LearnIT/ProfileScreen");
  };

  const toggleContent = () => {
    navigate("/LearnIT/AddCourse");
  };

  const handleUnjoinCourse = () => { 
    navigate("/LearnIT/UnjoinCourse");
   };

   const Achievements = () => { 
    navigate("/LearnIT/Achievements");
   };

   const handleQuizHistory = () => { 
    navigate("/LearnIT/QuizHistory");
   };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("token");
        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        // Fetch user data
        const userResponse = await axios.get(`https://learnit-1-aggl.onrender.com/users/${userId}`);
        setUserData(userResponse.data);

        // Fetch user's enrolled courses data
        const userCoursesResponse = await axios.get(`https://learnit-1-aggl.onrender.com/courses/${userId}`);
        if (userCoursesResponse.data) {
          setResponseCourseData(userCoursesResponse.data);
        } else {
          console.log("No courses found for the user");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    fetchUserData();
  }, []);  // Empty dependency array ensures this runs only once

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/LearnIT"); // Redirect to login screen
  };

  const handleAddCourse = async (title, description, content) => {
    try {
        const userId = localStorage.getItem("token");
        const courseData = {
            title: title,
            description: description,
            content: content,
            progress: 0, // Set initial progress to 0
            userID: userId,
        };

        const response = await axios.post(
            "https://learnit-1-aggl.onrender.com/addcourse",
            courseData
        );

        if (response.status === 201) {
            console.log("Course added successfully:", response.data);
        } else {
            console.error("Failed to add course:", response.data);
        }

    } catch (error) {
        console.error("Error adding course:", error);
    }
};

  const handleViewContent = (courseId) => {
    navigate(`/LearnIT/MyLearning/${courseId}`);
  };

  const courses = [
    {
      courseID: 1,
      title: "HTML",
      description:
        "HTML is the standard markup language for web pages. Use it to to structure the content on your own website.",
      content: course1Image,
    },
    {
      courseID: 2,
      title: "CSS",
      description:
        "CSS is the language used to style an HTML document, and describes how elements should be displayed.",
      content: course2Image,
    },
    {
      courseID: 3,
      title: "JavaScript",
      description:
        "JavaScript is a programming language that can be used to make content dynamic, control multimedia and make elements move.",
      content: course3Image,
    },
    {
      courseID: 4,
      title: "Python",
      description:
        "Python can be used for everything from machine learning to building and testing websites. Useful for both developers and non-developers.",
      content: course4Image,
    },
    {
      courseID: 5,
      title: "C++",
      description:
        "C++ is a general-purpose programming language, often used for applications that are graphics-heavy like games, photo and video editing apps.",
      content: course5Image,
    },

    // Add more courses as needed
  ];

  const increaseProgress = (courseId) => {
    const currentProgress = courseProgress[courseId] || 0;
    const newProgress = Math.min(currentProgress + 10, 100); // Increment by 10%, but ensure it doesn't exceed 100%
    handleProgressUpdate(courseId, newProgress);
  };

  const handleProgressUpdate = (courseId, progress) => {
    setCourseProgress((prevProgress) => ({
      ...prevProgress,
      [courseId]: progress,
    }));
  }; 

  return (
    <div id="mylearning">
      <header className="header">
      <div className='navin'  onClick={handleHome}>
            <div className='logoimg'><img src={Logo} alt="hehe" /></div>
            <div className='logotext'><div>LearnIT</div></div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Quiz" />
          <FontAwesomeIcon className = "icon" icon={faMagnifyingGlass} />
          <button onClick={toggleContent} >Add Course</button>
        </div>
        <div className="user-info">
          <img src={Profile}></img>
          <div className="Profile" onClick={handleProfile}>{userData.firstName} {userData.lastName}</div>
        </div>
      </header>

      <main className="main">
      <section className="dashboard">
            <div className="dashboard-navigation">
                <div>
                    <h2 onClick={handleHome}><FontAwesomeIcon icon={faTableList} className="icon" />Dashboard</h2>
                    <h2 onClick={handleUnjoinCourse}><FontAwesomeIcon icon={faSquareMinus} className="icon" />Unjoin Course</h2>
                    <h2 className="current-page" onClick={Achievements}><FontAwesomeIcon icon={faChartSimple} className="current-icon" />Achievements</h2>
                    <h2 onClick={handleQuizHistory}><FontAwesomeIcon icon={faClockRotateLeft} className="icon" />Quiz History</h2>
                </div>
                <div>
                <h2>Contact Us</h2>
                <h2 className="logout" onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="icon" />Log Out</h2>
                </div>
            </div>
        </section>
        <section className="resources">
          <h2>Resources</h2>
          {responseCourseData && (
            <div className="course-container">
              {responseCourseData.map(course => (
                <div key={course._id} className="boxcontainer"  onClick={() => handleViewContent(course.title)}>  
                  <div className="courseTitle">{course.title}</div>
                    <img
                      src={course.content}
                      alt={course.title}
                      className="courseImage"
                    />
                    <div className="courseDescription">{course.description}</div>
                </div>
              ))}
            </div>
          )}
    
        </section>
          
        <section className="rside-bar">
          <div className="users-online"> 
              <span>Other users online</span>
          </div>
          <div className="achievements-text">
              <span>Achievements</span>
              <a href="#">View All</a>
          </div>
          <div className="trophy">
            <div className="Medal">
            <img src={Medal1} alt="Medal" />
            <span>Medal</span>
            </div>
            <div className="Medal">
            <img src={Medal2} alt="Medal" />
            <span>Medal</span>
            </div>
            <div className="Medal">
            <img src={Medal3} alt="Medal" />
            <span>Medal</span>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}


export default Achievements;