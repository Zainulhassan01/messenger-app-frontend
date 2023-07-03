import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/api';


const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        name: username,
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
      <h2>Signup</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
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

export default SignupForm;
