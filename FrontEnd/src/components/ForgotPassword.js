import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/LearnIT');
    };

    const handleLogin = () => {
        navigate('/LearnIT/LoginScreen');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the request to the correct URL
            const response = await axios.post('https://learnit-1-aggl.onrender.com/ForgotPassword', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <div className='container'>
        <div className  = "signup">
    </div>
        <div className='login'>
        <div className='navR'>
            <div className='logoimg' onClick={handleHome}><img src={Logo} alt="hehe" /></div>
            <div className='logotext'><div>LearnIT</div></div>
            </div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                    <label>Email:</label>
                    </div>
                    <input
                        className='input'
                        placeholder='Enter email address'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='Loginbutton'>Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
            <div className='ForgotButton' onClick={handleLogin}>Sign Up</div>
        </div>
        </div>
    );
};

export default ForgotPassword;
