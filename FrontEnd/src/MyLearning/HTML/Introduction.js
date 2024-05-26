import React from 'react';
import { useNavigate } from 'react-router-dom';

function Introduction() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/MyLearning/HTML/Editors');
  };

  const handlePrevious = () => {
    navigate('/MyLearning/HTML');
  };

  return (
    <div style={styles.container}>
      <div style={styles.sideBar}>
        <h3>HTML Tutorial</h3>
        <div style={styles.sideText}>Html Home</div>
        <div style={styles.sideCurrent}>Html Introduction</div>
        <div style={styles.sideText}>Html Editors</div>
        <div style={styles.sideText}>Html Basic</div>
        <div style={styles.sideText}>Html Quiz</div>
        <div style={styles.sideText}>Html Results</div>
      </div>
      <div style={styles.main}>
        <h1>HTML Introduction</h1>
        <div style={styles.buttonContainer}>
          <div style={styles.buttonTopic} onClick={handlePrevious}>{'<'} Previous</div>
          <div style={styles.buttonTopic} onClick={handleNext}>Next {'>'}</div>
        </div>
        <div style={styles.section}>
          <div style={styles.content}>
            <h4>HTML is the standard markup language for creating Web pages.</h4>
            <ul>
              <li style={styles.text}><strong>HTML:</strong> Hyper Text Markup Language</li>
              <li style={styles.text}><strong>Standard:</strong> Markup language for creating Web pages</li>
              <li style={styles.text}><strong>Structure:</strong> Describes the structure of a Web page</li>
              <li style={styles.text}><strong>Elements:</strong> Series of elements</li>
              <li style={styles.text}><strong>Browser Display:</strong> Elements tell the browser how to display the content</li>
            </ul>
          </div>
          <div style={styles.content}>
            <h3>Example Explained</h3>
            <ul>
              <li style={styles.text}><strong>{'<!DOCTYPE html>'}</strong> declaration defines the document as an HTML5 document</li>
              <li style={styles.text}><strong>{'<html>'}</strong> element is the root element of an HTML page</li>
              <li style={styles.text}><strong>{'<head>'}</strong> element contains meta information about the HTML page</li>
              <li style={styles.text}><strong>{'<title>'}</strong> element specifies a title for the HTML page</li>
              <li style={styles.text}><strong>{'<body>'}</strong> element defines the document's body, container for visible contents</li>
              <li style={styles.text}><strong>{'<h1>'}</strong> element defines a large heading</li>
              <li style={styles.text}><strong>{'<p>'}</strong> element defines a paragraph</li>
            </ul>
          </div>
          <div style={styles.content}>
            <h3>HTML Element</h3>
            <div style={styles.text}>Defined by a start tag, content, and an end tag.</div>
            <div style={styles.text}>{'<tagname> Content goes here... </tagname>'}</div>
          </div>
          <div style={styles.content}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Start tag</th>
                  <th>Element content</th>
                  <th>End tag</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{'<h1>'}</td>
                  <td>My First Heading</td>
                  <td>{'</h1>'}</td>
                </tr>
                <tr>
                  <td>{'<p>'}</td>
                  <td>My first paragraph.</td>
                  <td>{'</p>'}</td>
                </tr>
                <tr>
                  <td>{'<br>'}</td>
                  <td>none</td>
                  <td>none</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={styles.content}>
            <div style={styles.text}>Some HTML elements like {'<br>'} have no content and are called empty elements.</div>
          </div>
          <div style={styles.content}>
            <h3>Web Browsers</h3>
            <div style={styles.text}>Web browsers (Chrome, Edge, Firefox, Safari) read HTML documents and display them correctly.</div>
          </div>
          <div style={styles.content}>
            <h3>HTML History</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Version</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1989</td>
                  <td>Tim Berners-Lee invented www</td>
                </tr>
                <tr>
                  <td>1991</td>
                  <td>Tim Berners-Lee invented HTML</td>
                </tr>
                <tr>
                  <td>1993</td>
                  <td>Dave Raggett drafted HTML+</td>
                </tr>
                <tr>
                  <td>1995</td>
                  <td>HTML Working Group defined HTML 2.0</td>
                </tr>
                <tr>
                  <td>1997</td>
                  <td>W3C Recommendation: HTML 3.2</td>
                </tr>
                <tr>
                  <td>1999</td>
                  <td>W3C Recommendation: HTML 4.01</td>
                </tr>
                <tr>
                  <td>2000</td>
                  <td>W3C Recommendation: XHTML 1.0</td>
                </tr>
                <tr>
                  <td>2008</td>
                  <td>WHATWG HTML5 First Public Draft</td>
                </tr>
                <tr>
                  <td>2012</td>
                  <td>WHATWG HTML5 Living Standard</td>
                </tr>
                <tr>
                  <td>2014</td>
                  <td>W3C Recommendation: HTML5</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>W3C Candidate Recommendation: HTML 5.1</td>
                </tr>
                <tr>
                  <td>2017</td>
                  <td>W3C Recommendation: HTML5.1 2nd Edition</td>
                </tr>
                <tr>
                  <td>2017</td>
                  <td>W3C Recommendation: HTML5.2</td>
                </tr>
              </tbody>
            </table>
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
  main: {
    flexGrow: 4,
    padding: '20px',
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
  section: {
    marginBottom: '20px',
  },
  content: {
    backgroundColor: 'white',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    '& th, & td': {
      border: '1px solid #dfdfdf',
      padding: '8px',
      textAlign: 'left',
    },
  },
  text: {
    marginTop: '10px',
    marginBottom: '10px',
  },
};

export default Introduction;
