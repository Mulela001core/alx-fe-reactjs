import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>GitHub User Search</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <UserList />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
