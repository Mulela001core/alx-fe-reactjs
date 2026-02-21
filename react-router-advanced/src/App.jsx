import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/Blogpost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { login } = useAuth();

  // simulate login toggling
  const handleLogin = () => {
    login?.(); // call your context login if it exists
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>

      <button onClick={handleLogin}>Simulated Login</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;