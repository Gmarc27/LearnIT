import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Logo from '../assets/Logo.png';
import Lottie from 'lottie-react';
import Cover from '../assets/Cover.json';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/LearnIT/LoginScreen");
  };

  const handleHome = (e) => {
    navigate("/LearnIT");
  };

  return (
    <div>
      <div>
        <div className='nav-cover'>
            <div className='logoimg' onClick={handleHome}><img src={Logo} alt="hehe" /></div>
            <div className='logotext'><div>LearnIT</div></div>
        </div>
          <div className='container'>
            <div className='title-container'>
              <h2>Get Started</h2>
              <button onClick={handleSubmit} className="Loginbutton">LEARN IT!</button>
              </div>
            

          <Lottie animationData={Cover}/>
          </div>
        </div>
      </div>
  )
};

export default Login;
