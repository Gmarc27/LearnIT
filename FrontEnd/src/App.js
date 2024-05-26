import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import ProfileScreen from './components/ProfileScreen';
import Home from './components/Home';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import MyLearning from './components/MyLearning';
import HtmlScreen from './MyLearning/HtmlScreen';
import CssScreen from  './MyLearning/CssScreen';
import Introduction from './MyLearning/HTML/Introduction';
import Editors from './MyLearning/HTML/Editors';
import Basic from './MyLearning/HTML/Basic';
import HtmlQuiz from './MyLearning/HTML/HtmlQuiz';
import Results from './MyLearning/HTML/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LearnIT" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/ProfileScreen" element={<ProfileScreen />} />
        <Route path="/LoginScreen" element={<LoginScreen />} />
        <Route path="/SignupScreen" element={<SignupScreen />} />
        <Route path="/MyLearning" element={<MyLearning />} />
        <Route path="/MyLearning/HTML" element={<HtmlScreen />} />
            <Route path="/MyLearning/HTML/Introduction" element={<Introduction />} />
            <Route path="/MyLearning/HTML/Editors" element={<Editors />} />
            <Route path="/MyLearning/HTML/Basic" element={<Basic />} />
            <Route path="/MyLearning/HTML/Quiz" element={<HtmlQuiz />} />
            <Route path="/MyLearning/HTML/Results" element={<Results />} />
        <Route path="/MyLearning/CSS" element={<CssScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
