import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList, faBell, faChartSimple, faClockRotateLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
import htmlfigure1 from "./assets/htmlfigure1.png";
import htmlfigure2 from "./assets/htmlfigure2.png";
import htmlfigure3 from "./assets/htmlfigure3.png";

function Editors() {
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
    navigate('/LearnIT/MyLearning/HTML/Basic');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning/HTML/Introduction');
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
          <button onClick={handleHome}>Add Course</button>
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
                    <h2 className="current-page"><FontAwesomeIcon icon={faTableList} className="current-icon" />Dashboard</h2>
                    <h2><FontAwesomeIcon icon={faBell} className="icon" />Notification</h2>
                    <h2><FontAwesomeIcon icon={faChartSimple} className="icon" />Achievements</h2>
                    <h2><FontAwesomeIcon icon={faClockRotateLeft} className="icon" />Quiz History</h2>
                </div>
                <div>
                <h2>Contact Us</h2>
                <h2 className="logout" onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="icon" />Log Out</h2>
                </div>
            </div>
        </section>
        <section className="resources">
          <h2>HTML</h2>
          <div className="next-prev">
          <div onClick={handlePrevious} className="button-prev">{'<'} Previous</div>
          <div onClick={handleNext} className="button-next">Next {'>'}</div>
        </div>
          <div className="topic-container">
          <div className="sidebar-topic">
              <h1>HTML Tutorial</h1>
              <div onClick={handleNavHome}>Html Home</div>
              <div onClick={handleNavIntroduction}>Html Introduction</div>
              <div className="current" onClick={handleNavEditors}>Html Editors</div>
              <div onClick={handleNavBasic}>Html Basic</div>
              <div onClick={handleNavQuiz}>Html Quiz</div>
              <div>Html Results</div>
          </div>
      <div className="topic-description">
        <h1>HTML Editors</h1>
        <div>
          <div>A simple text editor is all you need to learn HTML.</div>
        </div>
        <h1>Learn HTML Using Notepad or TextEdit</h1>
        <p>Web pages can be created and modified by using professional HTML editors.</p>
        <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
        <p>We believe that using a simple text editor is a good way to learn HTML.</p>
        <p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
        <h1>Step 1: Open Notepad (PC)</h1>
        <h3>Windows 8 or later:</h3>
        <p>Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.</p>
        <h3>Windows 7 or earlier:</h3>
        <p>Open Start {">"} Programs {">"} Accessories {">"} Notepad</p>
        <h1>Step 1: Open TextEdit (Mac)</h1>
        <p>Open Finder {">"} Applications {">"} TextEdit</p>
        <p>Also change some preferences to get the application to save files correctly. In Preferences {">"} Format {">"} choose "Plain Text"</p>
        <p>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</p>
        <p>Then open a new document to place the code.</p>
        <div>
          <h1>Step 2: Write Some HTML</h1>
          <p>Write or copy the following HTML code into Notepad:</p>
          <div>
            {'<!DOCTYPE html>'}
            <br />
            {'<html>'}
            <br />
            {'<head>'}
            <br />
            {'<title>'}Page Title{'</title>'}
            <br />
            {'</head>'}
            <br />
            {'<body>'}
            <br />
            {'<h1>This is a Heading</h1>'}
            <br />
            {'<p>This is a paragraph</p>'}
            <br />
            {'</body>'}
            <br />
            {'</html>'}
          </div>
          <img src={htmlfigure1}></img>
          <h1>Step 3: Save the HTML Page</h1>
          <p>Save the file on your computer. Select File {">"} Save as in the Notepad menu.</p>
          <p>Name the file "index.htm" and set the encoding to UTF-8 (which is the preferred encoding for HTML files).</p>
          <img src={htmlfigure2}></img>
          <h1>Step 4: View the HTML Page in Your Browser</h1>
          <p>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
          <p>The result will look much like this:</p>
          <img src={htmlfigure3}></img>
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
            <div>HTML</div>
            <img src={course1Image}></img>

          </div>
        </section>
        
      </main>
    </div>

  );
}

export default Editors;
