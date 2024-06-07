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

function HowTo() {
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
    navigate('/LearnIT/MyLearning/CSS/Quiz');
  };

  const handleNavSelectors = () => {
    navigate('/LearnIT/MyLearning/CSS/Selectors');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning/CSS/Selectors');
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
          <h2>HTML</h2>
          <div className="next-prev">
          <div onClick={handlePrevious} className="button-prev">{'<'} Previous</div>
          <div onClick={handleNext} className="button-next">Quiz {'>'}</div>
        </div>
          <div className="topic-container">
          <div className="sidebar-topic">
              <h1>CSS Tutorial</h1>
              <div onClick={handleNavHome}>Css Home</div>
              <div onClick={handleNavIntroduction}>Css Introduction</div>
              <div onClick={handleNavEditors}>Css Syntax</div>
              <div onClick={handleNavBasic}>Css Selectors</div>
              <div className="current" onClick={handleNavSelectors}>Css How To</div>
              <div onClick={handleNavQuiz}>Css Quiz</div>
              <div>Css Results</div>
          </div>
          <div className="topic-description">
          <h1>CSS Syntax</h1>
          <div>
          <div>A CSS selector selects the HTML element(s) you want to style.</div>
          <div>
            <h1>How to Add Css</h1>
            <p>When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.</p>
            </div>
            <div>
            <h1>Three Ways to Insert CSS</h1>
            <h2>There are three ways of inserting a style sheet:</h2>
            <p>{'• External CSS'}</p>
            <p>{'• Internal CSS'}</p>
            <p>{'• Inline CSS'}</p>
          </div>
          <div>
            <h1>External CSS</h1>
            <h2>With an external style sheet, you can change the look of an entire website by changing just one file!</h2>
            <h2>Each HTML page must include a reference to the external style sheet file inside the {'<link>'} element, inside the head section.</h2>
            <div>
                <h1>Example</h1>
                <h2>{'External styles are defined within the <link> element, inside the <head> section of an HTML page:'}</h2>
            <br />
            {'<!DOCTYPE html>'}
            <br />
            {'<html>'}
            <br />
            {'<head>'}
            <br />
            {'<link rel="stylesheet" href="mystyle.css">'}
            <br />
            {'</head>'}
            <br />
            {'<body>'}
            <br />
            {'<h1>This is a heading</h1>'}
            <br />
            {'<p>This is a paragraph.</p>'}
            <br />
            {'</body>'}
            <br />
            {'</html>'}
            <br />
            <br />
            <p>An external style sheet can be written in any text editor, and must be saved with a .css extension.</p>
            <p>The external .css file should not contain any HTML tags.</p>
            <p>Here is how the "mystyle.css" file looks:</p>
            <h2>"mystyle.css"</h2>
            <p>{'body {'}</p>
            <p>{'  background-color: lightblue;'}</p>
            <p>{'}'}</p>
            <br />
            <p>{'h1 {'}</p>
            <p>{'  color: navy;'}</p>
            <p>{'  margin-left: 20px;'}</p>
            <p>{'}'}</p>

            </div>
            </div>
    
          <div>
            <h1>Internal CSS</h1>
            <h2>An internal style sheet may be used if one single HTML page has a unique style.</h2>
            <h2>The internal style is defined inside the {'<style>'} element, inside the head section.</h2>
            </div>
            <div>
                <h1>Example</h1>
                <h2>Internal styles are defined within the {'<style>'} element, inside the {'<head>'} section of an HTML page:</h2>
            <p>{'<!DOCTYPE html>'}</p>
            <p>{'<html>'}</p>
            <p>{'<head>'}</p>
            <p>{'<style>'}</p>
            <p>{'body {'}</p>
            <p>{'  background-color: linen;'}</p>
            <br />
            <p>{'h1 {'}</p>
            <p>{'  color: maroon;'}</p>
            <p>{'  margin-left: 40px;'}</p>
            <p>{'}'}</p>
            <p>{'</style>'}</p>
            <p>{'</head>'}</p>
            <p>{'<body>'}</p>
            <br />
            <p>{'<h1>This is a heading</h1>'}</p>
            <p>{'<p>This is a paragraph.</p>'}</p>
            <br />
            <p>{'</body>'}</p>
            <p>{'</html>'}</p>
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

export default HowTo;
