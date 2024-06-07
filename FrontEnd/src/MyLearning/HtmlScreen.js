import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList, faSquareMinus, faChartSimple, faClockRotateLeft, faRightFromBracket, faPhone } from '@fortawesome/free-solid-svg-icons';
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

function HtmlScreen() {
  const [userData, setUserData] = useState(null);
  const [responseCourseData, setResponseCourseData] = useState(null);
  const navigate = useNavigate();

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
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleLearn = () => {
    navigate('/LearnIT/MyLearning/HTML/Introduction');
  };

  const handleQuiz = () => {
    navigate('/LearnIT/MyLearning/HTML/Quiz');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning');
  };

  const handleProfile = () => {
    navigate("/LearnIT/ProfileScreen"); //bug
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

   const handleContactUs = () => { 
    navigate("/LearnIT/ContactUs");
   };


  return (
    <div>

<div id="mylearning">
      <header className="header">
        <div className='navin'>
            <div className='logoimg' onClick={handleHome}><img src={Logo} alt="hehe" /></div>
            <div className='logotext'><div>LearnIT</div></div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Quiz" />
          <FontAwesomeIcon className = "icon" icon={faMagnifyingGlass} />
          <button onClick={handleHome}>Select Course</button>
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
                    <h2 className="current-page" onClick={handleHome}><FontAwesomeIcon icon={faTableList} className="current-icon" />Dashboard</h2>
                    <h2 onClick={handleUnjoinCourse}><FontAwesomeIcon icon={faSquareMinus} className="icon" />Unjoin Course</h2>
                    <h2 onClick={Achievements}><FontAwesomeIcon icon={faChartSimple} className="icon" />Achievements</h2>
                    <h2 onClick={handleQuizHistory}><FontAwesomeIcon icon={faClockRotateLeft} className="icon" />Quiz History</h2>
                </div>
                <div>
                <h2 onClick={handleContactUs}><FontAwesomeIcon icon={faPhone} className="icon" />Contact Us</h2>
                <h2 className="logout"><FontAwesomeIcon icon={faRightFromBracket} className="icon" />Log Out</h2>
                </div>
            </div>
        </section>
        <section className="resources">
          <h2>HTML</h2>
          <div className="topic-container">
          <div className="Topics" onClick={handleLearn}>
            <h4>Learn HTML</h4>
          </div>
          <div className="current-topic">
            <h1>You're Taking</h1>
            <div>HTML</div>
            <img src={course1Image}></img>

          </div>
          <div className="Topics" onClick={handleQuiz}>
            <h4>Take HTML Quiz</h4>
            </div>
          </div>
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

    </div>
  );
}
export default HtmlScreen;