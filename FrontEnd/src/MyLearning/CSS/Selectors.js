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

function Selectors() {
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
    navigate('/LearnIT/MyLearning/CSS/HowTo');
  };

  const handleNavSelectors = () => {
    navigate('/LearnIT/MyLearning/CSS/Selectors');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning/CSS/Syntax');
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
              <div onClick={handleNavEditors}>Css Syntax</div>
              <div className="current" onClick={handleNavBasic}>Css Selectors</div>
              <div onClick={handleNavSelectors}>Css How To</div>
              <div onClick={handleNavQuiz}>Css Quiz</div>
              <div>Css Results</div>
          </div>
          <div className="topic-description">
          <h1>CSS Selectors</h1>
        <div>
          <div>A CSS selector selects the HTML element(s) you want to style.</div>
          <div>
            <h1>CSS Selectors</h1>
            <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
            <br />
            <br />
            <p>We can divide CSS selectors into five categories:</p>
            <br />
            <br />
            {'•    Simple selectors (select elements based on name, id, class)'}
            <br />
            {'•    Combinator selectors (select elements based on a specific relationship between them)'}
            <br />
            {'•    Pseudo-class selectors (select elements based on a certain state)'}
            <br />
            {'•    Pseudo-elements selectors (select and style a part of an element)'}
            <br />
            {'•    Attribute selectors (select elements based on an attribute or attribute value)'}
            <br />
            <br />
            {'This page will explain the most basic CSS selectors.'}
            </div>
            <div>
            <h1>The CSS element Selector</h1>
            <h2>The element selector selects HTML elements based on the element name.</h2>
          </div>
          <div>
            <h1>Example</h1>
            <p>Here, all {'<p>'} elements on the page will be center-aligned, with a red text color: </p>
            <p>{'  text-align: center;'}</p>
            <p>{'  color: red;'}</p>
            <p>{'p {'}</p>
            </div>
          <div>
            <h1>The CSS id Selector</h1>
            <h2>The id selector uses the id attribute of an HTML element to select a specific element</h2>
            <h2>The id of an element is unique within a page, so the id selector is used to select one unique element!</h2>
            <h2>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</h2>
            </div>
            <div>
                <h1>Example</h1>
                <p>The CSS rule below will be applied to the HTML element with id="para1": </p>
                <br />
            {'#para1 {'}
                <br />
            {'  text-align: center;'}
                <br />
            {'  color: red;'}
                <br />
            {'}'}
            </div>
            <div>
            <h1>The CSS class Selector</h1>
            <h2>The class selector selects HTML elements with a specific class attribute.</h2>
            <h2>To select elements with a specific class, write a period {'(.)'} character, followed by the class name.</h2>
            <br />
            <div>
            <h1>Example</h1>
            <h2>In this example all HTML elements with class="center" will be red and center-aligned: </h2>
            <p>{'.center {'}</p>
            <p>{'  text-align: center;'}</p>
            <p>{'  color: red;'}</p>
            <p>{'}'}</p>
            </div>
            </div>
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

export default Selectors;
