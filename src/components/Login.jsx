import React, { useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/api';


const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>LogIn</h2>
      <form onSubmit={handleRegistration}>
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
