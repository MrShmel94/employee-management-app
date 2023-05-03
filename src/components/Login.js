import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MenuContext from './MenuContext';

const Login = () => {
  const [username, setExpertise] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(MenuContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem('jwtToken', response.data.jwtToken);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        setUserData(response.data.user);
        // Navigate to the main page
        navigate('/main');
      } else if (response.status === 401) {
        // Show an error message: Invalid credentials
        alert("Invalid credentials");
      } else if (response.status === 404) {
        // Redirect to the registration page
        navigate('/registration');
      } else {
        // Handle other non-200 status, e.g., show an error message
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      // Handle network errors, e.g., show an error message
      console.error('Network error:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setExpertise(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;