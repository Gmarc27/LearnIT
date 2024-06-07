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

function Introduction() {
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
    navigate('/LearnIT/MyLearning/Python/Variables');
  };

  const handleNavSyntax = () => {
    navigate('/LearnIT/MyLearning/Python/Syntax');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning/Python/Syntax');
  };

  const handleNavHome = () => {
    navigate('/LearnIT/MyLearning/Python');
  };

  const handleNavIntroduction = () => {
    navigate('/LearnIT/MyLearning/Python/Introduction');
  };

  const handleNavComments = () => {
    navigate('/LearnIT/MyLearning/Python/Comments');
  };

  const handleNavVariables = () => {
    navigate('/LearnIT/MyLearning/Python/Variables');
  };

  const handleNavQuiz = () => {
    navigate('/LearnIT/MyLearning/Python/Quiz');
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
          <div className="next-prev">
          <div onClick={handlePrevious} className="button-prev">{'<'} Previous</div>
          <div onClick={handleNext} className="button-next">Next {'>'}</div>
        </div>
          <div className="topic-container">
          <div className="sidebar-topic">
          <h1>Python Tutorial</h1>
              <div onClick={handleNavHome}>Python Home</div>
              <div onClick={handleNavIntroduction}>Python Introduction</div>
              <div onClick={handleNavSyntax}>Python Syntax</div>
              <div className="current" onClick={handleNavComments}>Python Comments</div>
              <div onClick={handleNavVariables}>Python Variables</div>
              <div onClick={handleNavQuiz}>Python Quiz</div>
              <div>Python Results</div>
          </div>
          <div className="topic-description">
  <h1>Python Syntax</h1>

  <div>
    <h2>Execute Python Syntax</h2>
    <p>As we learned in the previous page, Python syntax can be executed by writing directly in the Command Line:</p>
    <pre>{'>>> print("Hello, World!")'}</pre>
    <pre>{'Hello, World!'}</pre>
    <p>Or by creating a python file on the server, using the .py file extension, and running it in the Command Line:</p>
    <pre>{'C:\\Users\\Your Name>python myfile.py'}</pre>
  </div>

  <div>
    <h2>Python Comments</h2>
    <p>Comments can be used to explain Python code.</p>
    <p>Comments can be used to make the code more readable.</p>
    <p>Comments can be used to prevent execution when testing code.</p>
  </div>

  <div>
    <h2>Creating a Comment</h2>
    <p>Comments start with a <code>#</code>, and Python will ignore them:</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'# This is a comment'}</pre>
    <pre>{'print("Hello, World!")'}</pre>
    <p>Comments can be placed at the end of a line, and Python will ignore the rest of the line:</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'print("Hello, World!") # This is a comment'}</pre>
    <p>A comment does not have to be text that explains the code; it can also be used to prevent Python from executing code:</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'# print("Hello, World!")'}</pre>
    <pre>{'print("Cheers, Mate!")'}</pre>
  </div>

  <div>
    <h2>Multiline Comments</h2>
    <p>Python does not really have a syntax for multiline comments.</p>
    <p>To add a multiline comment, you could insert a <code>#</code> for each line:</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'# This is a comment'}</pre>
    <pre>{'# written in'}</pre>
    <pre>{'# more than just one line'}</pre>
    <pre>{'print("Hello, World!")'}</pre>
  </div>

  <div>
    <p>Or, not quite as intended, you can use a multiline string. Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code and place your comment inside it:</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'"""'}</pre>
    <pre>{'This is a comment'}</pre>
    <pre>{'written in'}</pre>
    <pre>{'more than just one line'}</pre>
    <pre>{'"""'}</pre>
    <pre>{'print("Hello, World!")'}</pre>
  </div>

  <div>
    <h2>Python Variables</h2>
    <p>In Python, variables are created when you assign a value to them:</p>
  </div>

  <div>
    <h3>Example</h3>
    <p>Variables in Python:</p>
    <pre>{'x = 5'}</pre>
    <pre>{'y = "Hello, World!"'}</pre>
    <p>Python has no command for declaring a variable.</p>
    <p>You will learn more about variables in the Python Variables chapter.</p>
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

export default Introduction;
