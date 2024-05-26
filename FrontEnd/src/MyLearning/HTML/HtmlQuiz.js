import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HtmlQuiz() {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [hovered, setHovered] = useState(null); // Add hovered state
    const questions = [
      {
        question: 'What does HTML stand for?',
        options: ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyper Text Makeup Language'],
        answer: 'Hyper Text Markup Language'
      },
      {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<lb>', '<break>', '<br>', '<line-break>'],
        answer: '<br>'
      },
      {
        question: 'Which HTML tag is used to define an unordered list?',
        options: ['<ul>', '<ol>', '<list>', '<ulist>'],
        answer: '<ul>'
      },
      {
        question: 'What is the correct HTML for creating a hyperlink?',
        options: ['<a href="http://www.example.com">Example</a>', '<link>http://www.example.com</link>', '<a url="http://www.example.com">Example</a>', '<a>http://www.example.com</a>'],
        answer: '<a href="http://www.example.com">Example</a>'
      },
      {
        question: 'Which character is used to indicate the end of an HTML tag?',
        options: [':', '.', '/', ';'],
        answer: '/'
      },
      {
        question: 'What is the correct HTML for creating a checkbox?',
        options: ['<input type="check">', '<checkbox>', '<input type="checkbox">', '<check>'],
        answer: '<input type="checkbox">'
      },
      {
        question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
        options: ['title', 'alt', 'src', 'href'],
        answer: 'alt'
      },
      {
        question: 'Which of the following is the correct way to comment out HTML code?',
        options: ['<!-- This is a comment -->', '// This is a comment', '# This is a comment', '* This is a comment *'],
        answer: '<!-- This is a comment -->'
      },
      {
        question: 'What is the purpose of the <meta> tag in HTML?',
        options: ['To define a hyperlink', 'To define metadata about an HTML document', 'To create a clickable button', 'To specify the main heading of a webpage'],
        answer: 'To define metadata about an HTML document'
      },
      {
        question: 'Which HTML tag is used to define a table row?',
        options: ['<row>', '<tr>', '<td>', '<table-row>'],
        answer: '<tr>'
      },
      {
        question: 'In HTML, what does the <canvas> element provide?',
        options: ['A container for external content embedded within a web page', 'A way to display mathematical equations', 'A way to draw graphics on the fly with JavaScript', 'A multimedia container for audio and video playback'],
        answer: 'A way to draw graphics on the fly with JavaScript'
      },
      // Add more questions here
    ];
  
    const handleNext = (selectedOption) => {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate('/MyLearning/HTML/Results', { state: { score: score + 1 } });
      }
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.sideBar}>
          <h3>HTML Tutorial</h3>
          <div style={styles.sideText}>Html Home</div>
          <div style={styles.sideText}>Html Introduction</div>
          <div style={styles.sideText}>Html Editors</div>
          <div style={styles.sideText}>Html Basic</div>
          <div style={styles.sideCurrent}>Html Quiz</div>
          <div style={styles.sideText}>Html Results</div>
        </div>
        <div style={styles.main}>
          <h1>HTML Quiz</h1>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <div
                style={{ ...styles.option, ...(hovered === index ? styles.optionHover : null) }} 
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleNext(option)}
              >
                {option}
              </div>
            ))}
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
    option: {
      backgroundColor: 'white',
      color: 'black',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      border: '1px solid black',
    },
    optionHover: {
      backgroundColor: '#28B498',
    },
    sideText: {
      padding: '5px',
      paddingBottom: '5px',
    },
    sideCurrent: {
      padding: '5px',
      paddingBottom: '5px',
      backgroundColor: '#28B498',
      color: 'white',
    },
  };

export default HtmlQuiz;
