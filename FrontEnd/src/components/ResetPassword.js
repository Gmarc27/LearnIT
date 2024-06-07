// ResetPassword.js

import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';


const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/LearnIT');
    };

    const handleLogin = () => {
        navigate('/LearnIT/LoginScreen');
    };

    // Extract the token from the URL query parameters
    const searchParams = new URLSearchParams(useLocation().search);
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/ResetPassword`, { token, newPassword });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                setMessage(error.response.data.error || 'An error occurred');
            } else if (error.request) {
                // Request was made but no response was received
                setMessage('No response received from server. Please try again later.');
            } else {
                // Something happened in setting up the request that triggered an Error
                setMessage(`Error: ${error.message}`);
            }
        }
    };
    

    return (
        <div className='container'>
            <div className='navR'>
            <div className='logoimg' onClick={handleHome}><img src={Logo} alt="hehe" /></div>
            <div className='logotext'><div>LearnIT</div></div>
            </div>
            <div className  = "signup"></div>
            <div className='login'>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                    <label>New Password:</label>
                    </div>
                    <input
                        className='input'
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='Loginbutton'>Reset Password</button>
            </form>
            {message && <p>{message}</p>}
            <div className='ForgotButton' onClick={handleLogin}>Sign Up</div>
        </div>
        </div>
    );
};

export default ResetPassword;
