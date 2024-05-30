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
        navigate('/LearnIT');
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
            setMessage(error.response.data.error);
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
