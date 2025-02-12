// Register.js (Simplified)
import React, { useState } from 'react';


function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5500/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data.message); // Display success message
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  // ... (JSX for the registration form)
}

// Login.js (Simplified)
import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null); // Store the token

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        setToken(data.token); // Store the token in state or localStorage
        localStorage.setItem('token', data.token); // Store in localStorage (more persistent)

        // Redirect or update UI after successful login
        console.log("Login successful. Token:", data.token);
      } catch (error) {
        console.error('Login error:', error);
      }
    };

    // ... (JSX for the login form)
}

// In your main app or where you fetch product data:
useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
        setToken(storedToken); // Retrieve token from localStorage
        fetch('/api/products', { // Example: Fetching products
            headers: {
                Authorization: `Bearer ${storedToken}`, // Include token in header
            },
        })
        .then(res => res.json())
        .then(data => setProducts(data)) // Set products in state
        .catch(error => console.error("Error fetching products:", error));
    }
}, []); // Empty dependency array means this runs once on mount