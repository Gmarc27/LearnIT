import React from 'react';
import { useNavigate } from 'react-router-dom';

function Editors() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/MyLearning/HTML/Basic');
  };

  const handlePrevious = () => {
    navigate('/MyLearning/HTML/Introduction');
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideBar}>
        <h3>HTML Tutorial</h3>
        <div style={styles.sideText}>Html Home</div>
        <div style={styles.sideText}>Html Introduction</div>
        <div style={styles.sideCurrent}>Html Editors</div>
        <div style={styles.sideText}>Html Basic</div>
        <div style={styles.sideText}>Html Quiz</div>
        <div style={styles.sideText}>Html Results</div>
      </div>
      <div style={styles.main}>
        <h1>HTML Editors</h1>
        <div style={styles.buttonContainer}>
          <div style={styles.buttonTopic} onClick={handlePrevious}>{'<'} Previous</div>
          <div style={styles.buttonTopic} onClick={handleNext}>Next {'>'}</div>
        </div>
        <div style={styles.Green}>
          <h3 style={styles.text}>Learn HTML Using Notepad or TextEdit</h3>
          <div style={styles.text}>Web pages can be created and modified by using professional HTML editors</div>
          <div style={styles.text}>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</div>
          <div style={styles.text}>We believe that using a simple text editor is a good way to learn HTML.</div>
          <div style={styles.text}>Follow the steps below to create your first web page with Notepad or TextEdit.</div>
        </div>
        <div style={styles.White}>
          <h2 style={styles.text}>Step 1: Open Notepad (PC)</h2>
          <h4 style={styles.text}>Windows 8 or later:</h4>
          <div style={styles.text}>Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.</div>
          <h4 style={styles.text}>Windows 7 or earlier:</h4>
          <div style={styles.text}>Open Start {">"} Programs {">"} Accessories {">"} Notepad</div>
          <h2 style={styles.text}>Step 1: Open TextEdit (Mac)</h2>
          <div style={styles.text}>Open Finder {">"} Applications {">"} TextEdit</div>
          <div style={styles.text}>Also change some preferences to get the application to save files correctly. In Preferences {">"} Format {">"} choose "Plain Text"</div>
          <div style={styles.text}>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</div>
          <div style={styles.text}>Then open a new document to place the code.</div>
        </div>
        <div style={styles.White}>
        <h2 style={styles.text}>Step 2: Write Some HTML</h2>
          <div style={styles.text}>Write or copy the following HTML code into Notepad:</div>
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
        <div style={styles.White}>
        <h2 style={styles.text}>Step 3: Save the HTML Page</h2>
          <div style={styles.text}>Save the file on your computer. Select File {">"} Save as in the Notepad menu.</div>
          <div style={styles.text}>Name the file "index.htm" and set the encoding to UTF-8 (which is the preferred encoding for HTML files).</div>
        </div>
        <div style={styles.Yellow}>
        <div style={styles.text}>Tip: You can use either .htm or .html as file extension. There is no difference; it is up to you.</div>
        </div>
        <div style={styles.White}>
        <h2 style={styles.text}>Step 4: View the HTML Page in Your Browser</h2>
          <div style={styles.text}>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</div>
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
  Yellow: {
    padding: '15px',
    backgroundColor: '#ffffcc',
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
};

export default Editors;
