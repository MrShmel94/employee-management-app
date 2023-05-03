import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import MainPage from './components/MainPage';
import CreateWorker from './components/CreateWorker';
import EmployeePerformance from './components/EmployeePerformance';
import Page3 from './pages/Page3';
import { MenuProvider } from './components/MenuContext';


function App() {
  return (
    <MenuProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/page1" element={<CreateWorker />} />
            <Route path="/page2" element={<EmployeePerformance />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </div>
      </Router>
    </MenuProvider>
  );
}

export default App;
