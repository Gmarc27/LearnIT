import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList, faBell, faChartSimple, faClockRotateLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [editingBio, setEditingBio] = useState(false); // State to track if bio is being edited
  const [responseCourseData, setResponseCourseData] = useState(null);
  const [newBio, setNewBio] = useState(""); // State to store the new bio
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
  }, []);  // Empty dependency array ensures this runs only once

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleSaveBio = async () => {
    try {
      const userId = localStorage.getItem("token");
      await axios.put(`https://learnit-1-aggl.onrender.com/users/${userId}`, { bio: newBio });
      setUserData({ ...userData, bio: newBio }); // Update the bio in the local state
      setEditingBio(false); // Exit editing mode
    } catch (error) {
      console.error("Error updating bio:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/LoginScreen"); // Redirect to login screen
  };

  const handleMyLearning = () => {
    navigate("/MyLearning");
  };

  const handleHome = (e) => {
    navigate("/LearnIT");
  };

  const handleSettings = () => {
    // Navigate to settings screen or implement settings logic here
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
          <button onClick={handleHome}>Add Course</button>
        </div>
        <div className="user-info">
          <img src={Profile}></img>
          <div className="Profile">{userData.firstName} {userData.lastName}</div>
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
                <h2 className="logout"><FontAwesomeIcon icon={faRightFromBracket} className="icon" />Log Out</h2>
                </div>
            </div>
        </section>



        <section className="resources">
          <h2>PROFILE</h2>
          <div className="profile-container">

            <div className="profile-stats">
                <div><img src={Profile}></img></div>
                <div>{userData.lastName}, {userData.firstName}</div>
                <div>{userData.studentID}</div>
                <div> STUDENT </div>
            </div>
            <div className="general-information">
                <div className="general-container">
                  <h2>General Information</h2>
                  <div>Age: {userData.age}</div>
                  <div>Birthday</div>
                  <div>Course</div>
                  <div>School</div>
                </div>
                <div className="general-container">
                  <h2>Bio:</h2>
                  <div>TEXTEXTTEXTEXTTEXTEXTTEXTEXT</div>
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
        </section>
        
      </main>
    </div>

    </div>
  );
};
export default ProfileScreen;
