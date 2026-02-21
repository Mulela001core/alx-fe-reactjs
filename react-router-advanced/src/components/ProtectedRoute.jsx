import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// ProtectedRoute component to guard routes that require authentication
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Get authentication state from context

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;