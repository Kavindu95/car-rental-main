import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroPages from '../components/HeroPages';
import '../styles/Auth.css'; 
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Attempt to log in the user
      navigate('/'); // Redirect to the homepage on success
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <section className="auth-page">
        <HeroPages name="Login" />
        <div className="container">
          <div className="auth-form-container">
            <h2>Login to Your Account</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="auth-button">Login</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
