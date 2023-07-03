import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/api';


const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoging = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate('/welcome');
  };

  return (
    <div>
      <h2>LogIn</h2>
      <form onSubmit={handleLoging}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default LogInForm;
