import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupScreen = () => {
    const [studentID, setStudentID] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await fetch('https://learnit2024.000webhostapp.com/SignupScreen', { // Match the backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    studentID,
                    email,
                    firstName,
                    lastName,
                    password
                })
            });
            if (!response.ok) {
                throw new Error('Error signing up');
            }
            navigate('/LoginScreen');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="studentID">Student ID</label>
                    <input id="studentID" value={studentID} onChange={(e) => setStudentID(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="button" onClick={handleSignup}>Signup</button>
            </form>
        </div>
    );
};

export default SignupScreen;
