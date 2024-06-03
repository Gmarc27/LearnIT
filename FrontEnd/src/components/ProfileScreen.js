import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableList, faBell, faChartSimple, faClockRotateLeft, faRightFromBracket, faPen } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png';
import Profile from "../assets/profile.jpg";
import Medal1 from "../assets/Medal1.png";
import Medal2 from "../assets/Medal2.png";
import Medal3 from "../assets/Medal3.png";

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [responseCourseData, setResponseCourseData] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    birthday: '',
    course: '',
    school: '',
    bio: 'TEXTEXTTEXTEXTTEXTEXTTEXTEXT'
  });

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
        if (userResponse.status === 404) {
          console.error("User not found");
          return;
        }
        setUserData(userResponse.data);
        setFormData({
          firstName: userResponse.data.firstName,
          lastName: userResponse.data.lastName,
          age: userResponse.data.age,
          birthday: userResponse.data.birthday,
          course: userResponse.data.course,
          school: userResponse.data.school,
          bio: userResponse.data.bio || "TEXTEXTTEXTEXTTEXTEXTTEXTEXT", // Assuming this is a field you want to edit
        });

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

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/LearnIT"); // Redirect to login screen
  };

  const handleHome = (e) => {
    navigate("/LearnIT/MyLearning");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleReload = () => {
    navigate("/LearnIT/ProfileScreen");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData || !userData._id) {
      console.error('User ID is undefined');
      return;
    }
  
    const { _id, ...updateData } = formData; // Exclude _id from the data being sent
  
    try {
      const response = await axios.put(`https://learnit-1-aggl.onrender.com/users/${userData._id}`, updateData);
      console.log('User updated:', response.data);
      
      // Update userData with the new data
      setUserData(response.data);
      
      // Hide the edit form
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
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
                <h2 className="logout" onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className="icon" />Log Out</h2>
                </div>
            </div>
        </section>



        <section className="resources">
          <h2>PROFILE</h2>
          <div className="edit">
        <FontAwesomeIcon onClick={handleEdit} icon={faPen} />
      </div>
      <div className="profile-container">
        <div className="profile-stats">
          <div>
            <img src={Profile} alt="Profile" />
          </div>
          <div>{userData.lastName}, {userData.firstName}</div>
          <div>{userData.studentID}</div>
          <div> STUDENT </div>
          <div>{userData.course}</div>
        </div>
        {isEditing ? (
                <form className="edit-form" onSubmit={handleSubmit}>
                  <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Birthday:</label>
                    <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Course:</label>
                    <input type="text" name="course" value={formData.course} onChange={handleChange} />
                  </div>
                  <div>
                    <label>School:</label>
                    <input type="text" name="school" value={formData.school} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Bio:</label>
                    <textarea name="bio" value={formData.bio} onChange={handleChange} />
                  </div>
                  <button type="submit" onClick={handleReload}>Save</button>
                </form>
              ) : (
                <div className="general-information">
                  <div className="general-container">
                    <h2>General Information</h2>
                    <div>Age: {userData.age} </div>
                    <div>Birthday: {userData.birthday}</div>
                    <div>Course: {userData.course}</div>
                    <div>School: {userData.school}</div>
                  </div>
                  <div className="general-container">
                    <h2>Bio:</h2>
                    <div>{formData.bio}</div>
                  </div>
                </div>
              )}
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
