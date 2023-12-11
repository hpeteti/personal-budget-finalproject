import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post('https://project-mcpv.onrender.com/login', formData)
      .then((response) => {
        setSuccessMessage(response.data.message);
        if (response.data.user) {
          localStorage.setItem('userData', response.data.user._id.toString());
        }
        localStorage.setItem('token', response.data.token);
        login();
        setIsLoggedIn(true);
        props.callBack(true);
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage('');
        setSuccessMessage('Invalid username or password');
      });
  };

  return (
    <section style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
      <section style={{ display: 'inline-block', textAlign: 'left', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '400px' }}>
        <h2 style={{ marginLeft: '70px', fontSize: '30px' }}>Login Page</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <label htmlFor="username" style={{ display: 'block', margin: '10px 0' }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={{ marginTop: '10px', marginBottom: '20px', marginLeft: '5px', width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <br />
          <label htmlFor="password" style={{ display: 'block', margin: '10px 0' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ marginBottom: '30px', marginLeft: '5px', width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <br />
          <button type="submit" style={{ marginLeft: '5px', fontWeight: '800', letterSpacing: '0.1em', fontSize: '20px', backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
            Login
          </button>
        </form>
      </section>
    </section>
  );
};

export default LoginPage;
