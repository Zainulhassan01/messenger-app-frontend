import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

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
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/login" element={<button>Login</button>} />
          <Route path="/register" element = {<button>Register</button>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
