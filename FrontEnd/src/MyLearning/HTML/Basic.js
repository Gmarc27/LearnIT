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

function Basic() {
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
    navigate('/LearnIT/MyLearning/HTML/Quiz');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning/HTML/Editors');
  };

  const handleNavHome = () => {
    navigate('/LearnIT/MyLearning/HTML');
  };

  const handleNavIntroduction = () => {
    navigate('/LearnIT/MyLearning/HTML/Introduction');
  };

  const handleNavEditors = () => {
    navigate('/LearnIT/MyLearning/HTML/Editors');
  };

  const handleNavBasic = () => {
    navigate('/LearnIT/MyLearning/HTML/Basic');
  };

  const handleNavQuiz = () => {
    navigate('/LearnIT/MyLearning/HTML/Quiz');
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
              <h1>HTML Tutorial</h1>
              <div onClick={handleNavHome}>Html Home</div>
              <div onClick={handleNavIntroduction}>Html Introduction</div>
              <div onClick={handleNavEditors}>Html Editors</div>
              <div className="current" onClick={handleNavBasic}>Html Basic</div>
              <div onClick={handleNavQuiz}>Html Quiz</div>
              <div>Html Results</div>
          </div>
      <div>
        <h1>HTML Basic Examples</h1>
        <p>In this chapter we will show some basic HTML examples.</p>
        <p>Don't worry if we use tags you have not learned about yet.</p>
        <h1>HTML Documents</h1>
        <p>All HTML documents must start with a document type declaration: {"<!"}DOCTYPE html{">"}.</p>
        <p>The HTML document itself begins with {"<html>"} and ends with {"</html>"}.</p>
        <p>The visible part of the HTML document is between {"<body>"} and {"</body>"}.</p>
        <h1>Example</h1>
        <p>{"<!DOCTYPE html>"}</p>
        <p>{"<html>"}</p>
        <p>{"<body>"}</p>
        <p>{"<h1>My First Heading</h1>"}</p>
        <p>{"<p>My first paragraph.</p>"}</p>
        <p>{"</body>"}</p>
        <p>{"</html>"}</p>
        <h1>The {"<!DOCTYPE>"} Declaration</h1>
        <p>The {"<!DOCTYPE>"} declaration represents the document type, and helps browsers to display web pages correctly.</p>
        <p>It must only appear once, at the top of the page (before any HTML tags).</p>
        <p>The {"<!DOCTYPE>"} declaration is not case sensitive.</p>
        <p>The {"<!DOCTYPE>"} declaration for HTML5 is:</p>
        <p>{"<!DOCTYPE html>"}</p>
        <h1>HTML Headings</h1>
        <p>HTML headings are defined with the {"<h1>"} to {"<h6>"} tags.</p>
        <p>{"<h1>"} defines the most important heading. {"<h6>"} defines the least important heading: </p>
        <p>{"<h1>This is heading 1</h1>"}</p>
        <p>{"<h2>This is heading 2</h2>"}</p>
        <p>{"<h3>This is heading 3</h3>"}</p>
        <h1>HTML Paragraphs</h1>
        <p>HTML paragraphs are defined with the {"<p>"} tag:</p>
        <h1>Example</h1>
        <p>{"<p>This is a paragraph.</p>"}</p>
        <p>{"<p>This is another paragraph.</p>"}</p>
        <h1>HTML Links</h1>
        <p>HTML links are defined with the {"<a>"} tag:</p>
        <h1>Example</h1>
        <p>{"<a href=https://www.w3schools.com>This is a link</a>"}</p>
        <p>The link's destination is specified in the href attribute. </p>
        <p>Attributes are used to provide additional information about HTML elements.</p>
        <p>You will learn more about attributes in a later chapter.</p>
        <h1>HTML Images</h1>
        <p>HTML images are defined with the {"<img>"} tag.</p>
        <p>The source file (src), alternative text (alt), width, and height are provided as attributes:</p>
        <h1>Example</h1>
        <p>{"<img src=w3schools.jpg alt=W3Schools.com width=104 height=142>"}</p>
        <h1>How to View HTML Source</h1>
        <p>Have you ever seen a Web page and wondered "Hey! How did they do that?"</p>
        <h1>View HTML Source Code:</h1>
        <p>Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.</p>
        <h1>Inspect an HTML Element:</h1>
        <p>Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.</p>
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
            <div>HTML</div>
            <img src={course1Image}></img>

          </div>
        </section>
        
      </main>
    </div>

  );
}

export default Basic;
