import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Main from "./main/Main";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import Profile from "./pages/userProfile/profile/profile";
import Settings from "./pages/userProfile/userSettings/Settings";

function App() {
  const [DarkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <Router>
        <div className="App">
          <Navigation />
          <Main />
          <Routes>
            {/* <Route path="/" exact element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
