import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import { registerUser } from '../services/userApiServices';
import Footer from '../components/Footer';
import HeroPages from '../components/HeroPages';
import '../styles/Auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(name, email, password);

      console.log(data,"data from REG User")
      setMessage('Registration successful!');

      // Navigate to the home page after successful registration
      navigate('/');
    } catch (error) {
      setError(error.response && error.response.data.message
        ? error.response.data.message
        : 'An error occurred');
    }
  };

  return (
    <>
      <section className="auth-page">
        <HeroPages name="Register" />
        <div className="container">
          <div className="auth-form-container">
            <h2>Create an Account</h2>
            {error && <p className="error-message">{error}</p>}
            {message && <p className="success-message">{message}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
              <button type="submit" className="auth-button">Register</button>
            </form>
            <div className="login-redirect">
              <p>Already have an account?</p>
              <Link to="/login" className="login-link">Login here</Link> {/* Add login button */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register;
