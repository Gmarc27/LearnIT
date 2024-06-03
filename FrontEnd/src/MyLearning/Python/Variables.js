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

function Variables() {
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
    navigate('/LearnIT/MyLearning/Python/Quiz');
  };

  const handleNavSyntax = () => {
    navigate('/LearnIT/MyLearning/Python/Syntax');
  };

  const handleHome = () => {
    navigate("/LearnIT/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/LearnIT/MyLearning/Comments');
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
          <div onClick={handleNext} className="button-next">Quiz {'>'}</div>
        </div>
          <div className="topic-container">
          <div className="sidebar-topic">
          <h1>Python Tutorial</h1>
              <div onClick={handleNavHome}>Python Home</div>
              <div onClick={handleNavIntroduction}>Python Introduction</div>
              <div onClick={handleNavSyntax}>Python Syntax</div>
              <div onClick={handleNavComments}>Python Comments</div>
              <div className="current" onClick={handleNavVariables}>Python Variables</div>
              <div onClick={handleNavQuiz}>Python Quiz</div>
              <div>Python Results</div>
          </div>
          <div className="topic-description">
  <h1>Python Variables</h1>
  
  <div>
    <h2>Variables</h2>
    <p>Variables are containers for storing data values.</p>
  </div>

  <div>
    <h2>Creating Variables</h2>
    <p>Python has no command for declaring a variable.</p>
    <p>A variable is created the moment you first assign a value to it.</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'x = 5'}</pre>
    <pre>{'y = "John"'}</pre>
    <pre>{'print(x)'}</pre>
    <pre>{'print(y)'}</pre>
  </div>

  <p>Variables do not need to be declared with any particular type, and can even change type after they have been set.</p>

  <div>
    <h3>Example</h3>
    <pre>{'x = 4       # x is of type int'}</pre>
    <pre>{'x = "Sally" # x is now of type str'}</pre>
    <pre>{'print(x)'}</pre>
  </div>

  <div>
    <h2>Casting</h2>
    <p>If you want to specify the data type of a variable, this can be done with casting.</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'x = str(3)    # x will be "3"'}</pre>
    <pre>{'y = int(3)    # y will be 3'}</pre>
    <pre>{'z = float(3)  # z will be 3.0'}</pre>
  </div>

  <div>
    <h2>Get the Type</h2>
    <p>You can get the data type of a variable with the <code>type()</code> function.</p>
  </div>

  <div>
    <h3>Example</h3>
    <pre>{'x = 5'}</pre>
    <pre>{'y = "John"'}</pre>
    <pre>{'print(type(x))'}</pre>
    <pre>{'print(type(y))'}</pre>
  </div>

  <div>
    <h2>Single or Double Quotes?</h2>
    <p>String variables can be declared either by using single or double quotes:</p>
    <pre>{'x = "John"'}</pre>
    <p># is the same as</p>
    <pre>{'x = \'John\''}</pre>
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

export default Variables;
