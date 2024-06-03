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
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LearnIT" element={<Home />} />
        <Route path="/LearnIT" element={<Home />} />
        <Route path="/LearnIT/ProfileScreen" element={<ProfileScreen />} />
        <Route path="/LearnIT/LoginScreen" element={<LoginScreen />} />
        <Route path="/LearnIT/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/LearnIT/ResetPassword" element={<ResetPassword />} />
        <Route path="/LearnIT/SignupScreen" element={<SignupScreen />} />
        <Route path="/LearnIT/MyLearning" element={<MyLearning />} />
        <Route path="/LearnIT/MyLearning/HTML" element={<HtmlScreen />} />
            <Route path="/LearnIT/MyLearning/HTML/Introduction" element={<Introduction />} />
            <Route path="/LearnIT/MyLearning/HTML/Editors" element={<Editors />} />
            <Route path="/LearnIT/MyLearning/HTML/Basic" element={<Basic />} />
            <Route path="/LearnIT/MyLearning/HTML/Quiz" element={<HtmlQuiz />} />
            <Route path="/LearnIT/MyLearning/HTML/Results" element={<Results />} />
        <Route path="/LearnIT/MyLearning/CSS" element={<CssScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
