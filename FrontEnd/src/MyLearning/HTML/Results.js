import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state;

  const handlePrevious = () => {
    navigate('/MyLearning/HTML/Quiz');
  };

  const handleNext = () => {
    navigate('/MyLearning/HTML');
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideBar}>
        <h3>HTML Tutorial</h3>
        <div style={styles.sideText}>Html Home</div>
        <div style={styles.sideText}>Html Introduction</div>
        <div style={styles.sideText}>Html Editors</div>
        <div style={styles.sideText}>Html Basic</div>
        <div style={styles.sideText}>Html Quiz</div>
        <div style={styles.sideCurrent}>Html Results</div>
      </div>
      <div style={styles.main}>
        <h1>HTML Quiz Results</h1>
        <div style={styles.result}>
          <h3>Your Score: {score}</h3>
          <p>Congratulations on completing the HTML quiz!</p>
          <p>Review your answers and learn from any mistakes.</p>
        </div>
        <div style={styles.buttonContainer}>
          <div style={styles.buttonTopic} onClick={handlePrevious}>{'<'} Retake Quiz</div>
          <div style={styles.buttonTopic} onClick={handleNext}>Go Home {'>'}</div>
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
  main: {
    flexGrow: 4,
    padding: '20px',
  },
  result: {
    backgroundColor: 'white',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)',
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
    width: '200px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  sideText: {
    padding: '5px',
    paddingBottom: '5px',
  },
};

export default Results;
