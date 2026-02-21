import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/Blogpost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>

      <button onClick={() => setIsAuthenticated(true)}>
        Simulated Login
      </button>

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

        {/* Dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;