import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
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

function HtmlScreen() {
  const navigate = useNavigate();

  const handleLearn = () => {
    navigate('/MyLearning/HTML/Introduction');
  };

  const handleQuiz = () => {
    navigate('/MyLearning/HTML/Quiz');
  };

  const handleHome = () => {
    navigate("/MyLearning");
  }

  const handlePrevious = () => {
    navigate('/MyLearning');
  };

  return (
    <div>
      {/*<div>
        <h3>HTML Tutorial</h3>
        <div>Html Home</div>
        <div>Html Introduction</div>
        <div>Html Editors</div>
        <div>Html Basic</div>
        <div>Html Quiz</div>
        <div>Html Results</div>
      </div>
      <div>
        <h1>HTML Tutorial</h1>
        <div>
          <div onClick={handlePrevious}>{'<'} Home</div>
          <div onClick={handleNext}>Next {'>'}</div>
        </div>
        <div>
          <div>HTML is the standard markup language for Web pages.</div>
          <div>With HTML you can create your own Website.</div>
          <div>HTML is easy to learn - You will enjoy it!</div>
        </div>
        <div>
          <h2>HTML Example</h2>
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
        </div>
      </div>*/}

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
          <span>Gmarc Collados</span>
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
          <h2>HTML</h2>
          <div className="topic-container">
          <div className="Topics" onClick={handleLearn}>
            <h4>Learn HTML</h4>
          </div>
          <div className="Topics" onClick={handleQuiz}>
            <h4>Take HTML Quiz</h4>
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
}
export default HtmlScreen;