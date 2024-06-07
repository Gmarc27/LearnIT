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
import HTMLIntroduction from './MyLearning/HTML/Introduction';
import HTMLEditors from './MyLearning/HTML/Editors';
import HTMLBasic from './MyLearning/HTML/Basic';
import HtmlQuiz from './MyLearning/HTML/HtmlQuiz';
import HtmlResults from './MyLearning/HTML/Results';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import AddCourse from './components/AddCourse';
import UnjoinCourse from './components/UnjoinCourse';
import Achievements from './components/Achievements';
import QuizHistory from './components/QuizHistory';
import CSSIntroduction from './MyLearning/CSS/Introduction';
import ContactUs from './components/ContactUs';
import CSSSyntax from './MyLearning/CSS/Syntax';
import CSSSelectors from './MyLearning/CSS/Selectors';
import CSSHowTo from './MyLearning/CSS/HowTo';
import CSSQuiz from './MyLearning/CSS/CssQuiz';
import CSSResults from './MyLearning/CSS/Results';
import PythonScreen from './MyLearning/PythonScreen';
import PythonIntroduction from './MyLearning/Python/Introduction';
import PythonSyntax from './MyLearning/Python/Syntax';
import PythonComments from './MyLearning/Python/Comments';
import PythonVariables from './MyLearning/Python/Variables';
import PythonQuiz from './MyLearning/Python/PythonQuiz';
import PythonResults from './MyLearning/Python/Results';
import Members from './Members/Members';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LearnIT" element={<Home />} />
        <Route path="/LearnIT" element={<Home />} />
        <Route path="/LearnIT/Members" element={<Members />} />
        <Route path="/LearnIT/ProfileScreen" element={<ProfileScreen />} />
        <Route path="/LearnIT/LoginScreen" element={<LoginScreen />} />
        <Route path="/LearnIT/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/LearnIT/ResetPassword" element={<ResetPassword />} />
        <Route path="/LearnIT/SignupScreen" element={<SignupScreen />} />
        <Route path="/LearnIT/MyLearning" element={<MyLearning />} />
        <Route path="/LearnIT/ContactUs" element={<ContactUs />} />
        <Route path="/LearnIT/AddCourse" element={<AddCourse />} />
        <Route path="/LearnIT/UnjoinCourse" element={<UnjoinCourse />} />
        <Route path="/LearnIT/Achievements" element={<Achievements />} />
        <Route path="/LearnIT/QuizHistory" element={<QuizHistory />} />
        <Route path="/LearnIT/MyLearning/HTML" element={<HtmlScreen />} />
            <Route path="/LearnIT/MyLearning/HTML/Introduction" element={<HTMLIntroduction />} />
            <Route path="/LearnIT/MyLearning/HTML/Editors" element={<HTMLEditors />} />
            <Route path="/LearnIT/MyLearning/HTML/Basic" element={<HTMLBasic />} />
            <Route path="/LearnIT/MyLearning/HTML/Quiz" element={<HtmlQuiz />} />
            <Route path="/LearnIT/MyLearning/HTML/Results" element={<HtmlResults />} />
        <Route path="/LearnIT/MyLearning/CSS" element={<CssScreen />} />
            <Route path="/LearnIT/MyLearning/CSS/Introduction" element={<CSSIntroduction />} />
            <Route path="/LearnIT/MyLearning/CSS/Syntax" element={<CSSSyntax />} />
            <Route path="/LearnIT/MyLearning/CSS/Selectors" element={<CSSSelectors />} />
            <Route path="/LearnIT/MyLearning/CSS/HowTo" element={<CSSHowTo />} />
            <Route path="/LearnIT/MyLearning/CSS/Quiz" element={<CSSQuiz />} />
            <Route path="/LearnIT/MyLearning/CSS/Results" element={<CSSResults />} />
        <Route path="/LearnIT/MyLearning/Python" element={<PythonScreen />} />
            <Route path="/LearnIT/MyLearning/Python/Introduction" element={<PythonIntroduction />} />
            <Route path="/LearnIT/MyLearning/Python/Syntax" element={<PythonSyntax />} />
            <Route path="/LearnIT/MyLearning/Python/Comments" element={<PythonComments />} />
            <Route path="/LearnIT/MyLearning/Python/Variables" element={<PythonVariables />} />
            <Route path="/LearnIT/MyLearning/Python/Quiz" element={<PythonQuiz />} />
            <Route path="/LearnIT/MyLearning/Python/Results" element={<PythonResults />} />
      </Routes>
    </Router>
  );
}

export default App;
