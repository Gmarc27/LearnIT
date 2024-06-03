import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/Logo.png';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/LearnIT/SignupScreen');
    };

    const handleHome = () => {
        navigate('/LearnIT');
    };

    const handleForgot = () => {
      navigate('/LearnIT/ForgotPassword');
  };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('https://learnit-1-aggl.onrender.com/LoginScreen', { email, password });
            if (response.data.message === "Login Successfully") {
                console.log(response.data.userId);
                localStorage.setItem('token', response.data.userId);
                navigate('/LearnIT/MyLearning');
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error('Login error:', error);
            setError("An error occurred while logging in.");
        }
    };

    return (
        <div>
            <div className  = "container">
            <div className='nav'>
            <div className='logoimg' onClick={handleHome}><img src={Logo} alt="hehe" /></div>
            <div className='logotext'><div>LearnIT</div></div>
            </div>
                <div className  = "login">
                    <h1>Login to Your Account</h1>
                    <form onSubmit={handleSubmit}>
                        <div>Email Address</div>
                        <input
                            className  = "input"
                            type="email"
                            placeholder="Enter email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div>Password</div>
                        <input
                            className  = "input"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div>{error}</div>
                        <button
                            className  = "Loginbutton"
                            type="submit"
                        >Login</button>
                    </form>
                    <div className='ForgotButton' onClick={handleForgot}>Forgot Password?</div>
                </div>
                <div className  = "signup">
                    <h1> New Here?</h1>
                    <div> Sign up and discover LearnIT!</div>
                    <div><button
                        className  = "Signupbutton"
                        onClick={handleSignup}
                    >Signup</button></div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
