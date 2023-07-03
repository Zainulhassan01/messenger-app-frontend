import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupForm from './components/Signup';
import LogInForm from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/login" element={<LogInForm/>} />
          <Route path="/signup" element = {<SignupForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
