import React from 'react';
import { useNavigate } from 'react-router-dom';

function Basic() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/MyLearning/HTML/Quiz');
  };

  const handlePrevious = () => {
    navigate('/MyLearning/HTML/Editors');
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideBar}>
        <h3>HTML Tutorial</h3>
        <div style={styles.sideText}>Html Home</div>
        <div style={styles.sideText}>Html Introduction</div>
        <div style={styles.sideText}>Html Editors</div>
        <div style={styles.sideCurrent}>Html Basic</div>
        <div style={styles.sideText}>Html Quiz</div>
        <div style={styles.sideText}>Html Results</div>
      </div>
      <div style={styles.main}>
        <h1>HTML Tutorial Title</h1>
        <div style={styles.buttonContainer}>
          <div style={styles.buttonTopic} onClick={handlePrevious}>{'<'} Previous</div>
          <div style={styles.buttonTopic} onClick={handleNext}>Quiz {'>'}</div>
        </div>
        <div style={styles.Green}>
          <div style={styles.text}>HTML is the standard markup language for Web pages.</div>
          <div style={styles.text}>With HTML you can create your own Website.</div>
          <div style={styles.text}>HTML is easy to learn - You will enjoy it!</div>
        </div>
        <div style={styles.White}>
          <h2 style={styles.text}>HTML Example</h2>
          <div style={styles.code}>
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
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    borderRight: '1px solid #dfdfdf',
    padding: '20px',
  },
  main: {
    flexGrow: 4,
    padding: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  buttonTopic: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28B498',
    color: 'white',
    height: '50px',
    width: '100px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  Green: {
    padding: '15px',
    backgroundColor: '#D9EEE1',
    marginTop: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)',
  },
  White: {
    padding: '15px',
    backgroundColor: 'white',
    marginTop: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)',
  },
  text: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  sideText: {
    padding: '5px',
    paddingBottom: '5px',
    cursor: 'pointer',
  },
  sideCurrent: {
    padding: '5px',
    paddingBottom: '5px',
    backgroundColor: '#28B498',
    color: 'white',
  },
  code: {
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
};

export default Basic;
