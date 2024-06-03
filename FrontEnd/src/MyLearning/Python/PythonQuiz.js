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

function PythonQuiz() {
  const [userData, setUserData] = useState(null);
  const [responseCourseData, setResponseCourseData] = useState(null);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [hovered, setHovered] = useState(null); // Add hovered state
    const questions = [
        {
          question: 'What is the correct file extension for Python files?',
          options: ['.pyth', '.pyt', '.pt', '.py'],
          answer: '.py'
        },
        {
          question: 'How do you create a variable with the floating number 2.8?',
          options: ['x = float(2.8)', 'x = 2.8', 'x = int(2.8)', 'x = 2,8'],
          answer: 'x = 2.8'
        },
        {
          question: 'What is the correct syntax to output the type of a variable or object in Python?',
          options: ['print(typeof(x))', 'print(typeOf(x))', 'print(type(x))', 'print(typeof x)'],
          answer: 'print(type(x))'
        },
        {
          question: 'Which function is used to get the length of a list in Python?',
          options: ['length()', 'len()', 'count()', 'size()'],
          answer: 'len()'
        },
        {
          question: 'How do you start a comment in Python?',
          options: ['//;', '<!--', '#', 'text-style: bold;'],
          answer: '#'
        },
        {
          question: 'Which method can be used to remove any whitespace from both the beginning and the end of a string?',
          options: ['strip()', 'len()', 'trim()', 'ptrim()'],
          answer: 'strip()'
        },
        {
          question: 'Which of the following statements is used to create a function in Python?',
          options: ['function myFunction():', 'create myFunction():', 'def myFunction():', 'define myFunction():'],
          answer: 'def myFunction():'
        },
        {
          question: 'How do you start writing an if statement in Python?',
          options: ['if x > y:', 'if (x > y)', 'if x > y then:', 'if x > y then'],
          answer: 'if x > y:'
        },
        {
          question: 'Which of the following is the correct way to create a dictionary in Python?',
          options: ['myDict = {key1: value1, key2: value2}', 'myDict = (key1: value1, key2: value2)', 'myDict = [key1: value1, key2: value2]', 'myDict = {key1 = value1, key2 = value2}'],
          answer: 'myDict = {key1: value1, key2: value2}'
        },
        {
          question: 'What is the output of the following code? print(2 ** 3)',
          options: ['5', '6', '8', '9'],
          answer: '8'
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
      navigate('/LearnIT/MyLearning/Python/Results', { state: { score: score + 1 } });
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
          <h2>Python</h2>
          <div className="topic-container">
          <div style={styles.main}>
          <h1>Python Quiz</h1>
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
            <div>Python</div>
            <img src={course4Image}></img>

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

export default PythonQuiz;
