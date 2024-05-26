import React from 'react';
import { useNavigate } from 'react-router-dom';

function HtmlScreen() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/MyLearning/HTML/Introduction');
  };

  const handlePrevious = () => {
    navigate('/MyLearning');
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideBar}>
        <h3 style={styles.sidebarTitle}>HTML Tutorial</h3>
        <div style={styles.sideCurrent}>Html Home</div>
        <div style={styles.sideItem}>Html Introduction</div>
        <div style={styles.sideItem}>Html Editors</div>
        <div style={styles.sideItem}>Html Basic</div>
        <div style={styles.sideText}>Html Quiz</div>
        <div style={styles.sideText}>Html Results</div>
      </div>
      <div style={styles.main}>
        <h1>HTML Tutorial</h1>
        <div style={styles.buttonContainer}>
          <div style={styles.buttonTopic} onClick={handlePrevious}>{'<'} Home</div>
          <div style={styles.buttonTopic} onClick={handleNext}>Next {'>'}</div>
        </div>
        <div style={styles.greenBox}>
          <div style={styles.text}>HTML is the standard markup language for Web pages.</div>
          <div style={styles.text}>With HTML you can create your own Website.</div>
          <div style={styles.text}>HTML is easy to learn - You will enjoy it!</div>
        </div>
        <div style={styles.whiteBox}>
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
    height: '100%',
  },

  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    borderRight: '1px solid #dfdfdf',
    padding: '20px',
  },

  sidebarTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },

  sideItem: {
    padding: '10px',
    cursor: 'pointer',
    color: '#555',
  },

  sideCurrent: {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#28B498',
    color: 'white',
    borderRadius: '5px',
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 10,
    padding: '20px',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },

  buttonTopic: {
    padding: '10px 20px',
    backgroundColor: '#28B498',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },

  greenBox: {
    backgroundColor: '#D9EEE1',
    padding: '20px',
    marginBottom: '20px',
  },

  whiteBox: {
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #dfdfdf',
    borderRadius: '5px',
    flexGrow: 1,
  },

  text: {
    margin: '10px 0',
  },
};

export default HtmlScreen;
