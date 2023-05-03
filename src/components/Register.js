import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [expertis, setExpertise] = useState('');
  const [username, setEmail] = useState('');
  const [rawPassword, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/register', {
        expertis,
        username,
        rawPassword,
      });

      console.log(response.data);
      // Handle successful registration
      if (response.status === 200) {
        // Navigate to the main page
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Expertise"
          value={expertis}
          onChange={(e) => setExpertise(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={rawPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;