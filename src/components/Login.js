import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [expertise, setExpertise] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://your-backend-url/login', {
        expertise,
        password,
      });

      if (response.status === 200) {
        // Navigate to the main page
        navigate('/main');
      } else {
        // Handle non-200 status, e.g., show an error message
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
          placeholder="Expertise"
          value={expertise}
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