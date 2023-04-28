import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import MainPage from './components/MainPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route path="/main" element={<MainPage/>} />
          <Route path="/page1" element={<Page1/>} />
          <Route path="/page2" element={<Page2/>} />
          <Route path="/page3" element={<Page3/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
