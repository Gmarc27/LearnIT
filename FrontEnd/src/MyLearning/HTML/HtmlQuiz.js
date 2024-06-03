import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList, faSquareMinus, faChartSimple, faClockRotateLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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

function HtmlQuiz() {
  const [userData, setUserData] = useState(null);
  const [responseCourseData, setResponseCourseData] = useState(null);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [hovered, setHovered] = useState(null); // Add hovered state
  const questions = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyper Text Makeup Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'What is the correct HTML element for inserting a line break?',
      options: ['<lb>', '<break>', '<br>', '<line-break>'],
      answer: '<br>'
    },
    {
      question: 'Which HTML tag is used to define an unordered list?',
      options: ['<ul>', '<ol>', '<list>', '<ulist>'],
      answer: '<ul>'
    },
    {
      question: 'What is the correct HTML for creating a hyperlink?',
      options: ['<a href="http://www.example.com">Example</a>', '<link>http://www.example.com</link>', '<a url="http://www.example.com">Example</a>', '<a>http://www.example.com</a>'],
      answer: '<a href="http://www.example.com">Example</a>'
    },
    {
      question: 'Which character is used to indicate the end of an HTML tag?',
      options: [':', '.', '/', ';'],
      answer: '/'
    },
    {
      question: 'What is the correct HTML for creating a checkbox?',
      options: ['<input type="check">', '<checkbox>', '<input type="checkbox">', '<check>'],
      answer: '<input type="checkbox">'
    },
    {
      question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
      options: ['title', 'alt', 'src', 'href'],
      answer: 'alt'
    },
    {
      question: 'Which of the following is the correct way to comment out HTML code?',
      options: ['<!-- This is a comment -->', '// This is a comment', '# This is a comment', '* This is a comment *'],
      answer: '<!-- This is a comment -->'
    },
    {
      question: 'What is the purpose of the <meta> tag in HTML?',
      options: ['To define a hyperlink', 'To define metadata about an HTML document', 'To create a clickable button', 'To specify the main heading of a webpage'],
      answer: 'To define metadata about an HTML document'
    },
    {
      question: 'Which HTML tag is used to define a table row?',
      options: ['<row>', '<tr>', '<td>', '<table-row>'],
      answer: '<tr>'
    },
    {
      question: 'In HTML, what does the <canvas> element provide?',
      options: ['A container for external content embedded within a web page', 'A way to display mathematical equations', 'A way to draw graphics on the fly with JavaScript', 'A multimedia container for audio and video playback'],
      answer: 'A way to draw graphics on the fly with JavaScript'
    },
    // Add more questions here
  ];

  const handleNext = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/LearnIT/MyLearning/HTML/Results', { state: { score: score + 1 } });
    }
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
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleProfile = () => {
    navigate("/LearnIT/ProfileScreen"); //bug
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
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
                <h2>Contact Us</h2>
                <h2 className="logout" onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="icon" />Log Out</h2>
                </div>
            </div>
        </section>
        <section className="resources">
          <h2>HTML</h2>
          <div className="topic-container">
          <div style={styles.main}>
          <h1>HTML Quiz</h1>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <div
                style={{ ...styles.option, ...(hovered === index ? styles.optionHover : null) }} 
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleNext(option)}
              >
                {option}
              </div>
            ))}
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

const styles = {
    container: {
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    sideBar: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      backgroundColor: '#f0f0f0',
      borderRight: '1px solid #dfdfdf',
      padding: '20px',
    },
    main: {
      flexGrow: 4,
      padding: '20px',
    },
    option: {
      backgroundColor: 'white',
      color: 'black',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      border: '1px solid black',
    },
    optionHover: {
      backgroundColor: '#28B498',
    },
    sideText: {
      padding: '5px',
      paddingBottom: '5px',
    },
    sideCurrent: {
      padding: '5px',
      paddingBottom: '5px',
      backgroundColor: '#28B498',
      color: 'white',
    },
  };

export default HtmlQuiz;
