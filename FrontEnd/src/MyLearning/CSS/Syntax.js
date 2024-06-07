import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList, faSquareMinus, faChartSimple, faClockRotateLeft, faRightFromBracket, faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from './assets/Logo.png';
import course1Image from "./assets/course1.png";
import course2Image from "./assets/course2.png";
import course3Image from "./assets/course3.png";
import course4Image from "./assets/course4.png";
import course5Image from "./assets/course5.png";
import Medal1 from "./assets/Medal1.png";
import Medal2 from "./assets/Medal2.png";
import Medal3 from "./assets/Medal3.png";
import Profile from "./assets/profile.jpg";

function Syntax() {
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

  const handleProfile = () => {
    navigate("/LearnIT/ProfileScreen"); //bug
  };

  const handleNext = () => {
    navigate('/LearnIT/MyLearning/CSS/Selectors');
  };

  const handleNavSelectors = () => {
    navigate('/LearnIT/MyLearning/CSS/Selectors');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning/CSS/Introduction');
  };

  const handleNavHome = () => {
    navigate('/LearnIT/MyLearning/CSS');
  };

  const handleNavIntroduction = () => {
    navigate('/LearnIT/MyLearning/CSS/Introduction');
  };

  const handleNavEditors = () => {
    navigate('/LearnIT/MyLearning/CSS/Syntax');
  };

  const handleNavBasic = () => {
    navigate('/LearnIT/MyLearning/CSS/HowTo');
  };

  const handleNavQuiz = () => {
    navigate('/LearnIT/MyLearning/CSS/Quiz');
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



  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/LearnIT"); // Redirect to login screen
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
                <h2 className="logout" onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="icon" />Log Out</h2>
                </div>
            </div>
        </section>
        <section className="resources">
          <h2>CSS</h2>
          <div className="next-prev">
          <div onClick={handlePrevious} className="button-prev">{'<'} Previous</div>
          <div onClick={handleNext} className="button-next">Next {'>'}</div>
        </div>
          <div className="topic-container">
          <div className="sidebar-topic">
              <h1>CSS Tutorial</h1>
              <div onClick={handleNavHome}>Css Home</div>
              <div onClick={handleNavIntroduction}>Css Introduction</div>
              <div className="current" onClick={handleNavEditors}>Css Syntax</div>
              <div onClick={handleNavBasic}>Css Selectors</div>
              <div onClick={handleNavSelectors}>Css How To</div>
              <div onClick={handleNavQuiz}>Css Quiz</div>
              <div>Css Results</div>
          </div>
          <div className="topic-description">
          <h1>CSS Syntax</h1>
        <div>
          <div>A CSS rule consists of a selector and a declaration block.</div>
          <div>
            <h1>CSS Syntax</h1>
            <p>The selector points to the HTML element you want to style.</p>
            <p>The declaration block contains one or more declarations separated by semicolons.</p>
            <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
            <p>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
          </div>
          <div>
            <h1>Example</h1>
            <p> In this example all  {'<p>'} elements will be center-aligned, with a red text color: </p>
            {'p {'}
            <br />
            {'  color: red;'}
            <br />
            {'  text-align: center;'}
            <br />
            {'}'}
            </div>
            <div>
            <h1>Example Explained</h1>
            {'•  p is a selector in CSS (it points to the HTML element you want to style: <p>).'}
            <br />
            {'•  color is a property, and red is the property value'}
            <br />
            {'•  text-align is a property, and center is the property value'}
            </div>
        </div>
        <div>
        </div>
        <div>
        </div>
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
          <div className="current-topic">
            <h2>You're Taking</h2>
            <div>CSS</div>
            <img src={course2Image}></img>

          </div>
        </section>
        
      </main>
    </div>

  );
}

export default Syntax;
