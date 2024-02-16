
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordOTP from './pages/ForgetPasswordOTP';
import ChangePassword from './pages/ChangePassword';
import Contact from './pages/Contact';
import About from './pages/About';
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
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-password-otp" element={<ForgotPasswordOTP />} />
            <Route path="/change-password" element={<ChangePassword />} />
            {/* <Route path="/navigation/*" element={<Navigation />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashbord" element={
              <div className='App'>
                <Navigation />
                <Main />
              </div>
            } />
          </Routes>
          {/* {window.location.pathname.startsWith("/navigation") && (
            <div className='App'>
              <Navigation />
              <Main />
            </div>
          )} */}
      </Router>
    </ThemeContext.Provider>
  );

}

export default App;
