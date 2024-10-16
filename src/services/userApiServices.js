import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; 

// Register User
export const registerUser = async (name, email, password) => {


  const response = await axios.post(`${API_URL}/register`, { name, email, password });

  console.log(response,"RESPONSE REG")
  return response.data; 
};

// Login User
export const loginUser = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(`${API_URL}/login`, { email, password }, config);
  return response.data; 
};



