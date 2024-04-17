import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !isEmailValid(email)) {
        throw new Error('Invalid email');
      }
      if (!password || !isPasswordValid(password)) {
        throw new Error('Invalid password');
      }
  
      // User successfully logged in
      console.log('User logged in:', email);
      
      // Navigate to profile page or perform other actions
      navigate('/ProfileScreen');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
      if (error.message === 'Invalid password') {
        setErrorPassword('Invalid password!');
      }
      if (error.message === 'Invalid email') {
        setErrorEmail('Invalid email!');
      }
    }
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (pwd) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pwd); 

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>LEARNIT</h1>
      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrorEmail('');
        }}
        type="email"
      />
      <input
        style={styles.input}
        placeholder="Password (6-20 characters, at least one digit, one lowercase, one uppercase)"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorPassword('');
        }}
        type="password"
      />
      {errorPassword && <div style={styles.errorContainer}>{errorPassword}</div>}
      {errorEmail && <div style={styles.errorContainer}>{errorEmail}</div>}
      <div style={styles.buttonContainer}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => navigate('/SignupScreen')}>Signup</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',
  },

  errorContainer: {
    color: 'red',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
    padding: '0 10px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
};

export default LoginScreen;
