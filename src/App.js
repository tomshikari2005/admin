import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import Employee from './pages/Employee/Employee';
import Home from './pages/Home/Home';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInState = localStorage.getItem('isLoggedIn');
    if (storedLoggedInState && storedLoggedInState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

return (

  <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/" element={isLoggedIn ? <Home onLogout={handleLogout}  /> : <Navigate to="/login" />} />
        <Route path="/employee" element={isLoggedIn ? <Employee /> : <Navigate to="/login" />} />
       
        {/* Redirect to the last visited page if it exists */}
        <Route path="/" element={<Navigate to={localStorage.getItem('lastVisitedPage') || '/'} />} />
      </Routes>
    </Router>
);
}


export default App;
