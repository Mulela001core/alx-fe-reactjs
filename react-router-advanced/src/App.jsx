import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";
import Post from "./pages/Post";

function App() {
  const isAuthenticated = false; // simulate login

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;