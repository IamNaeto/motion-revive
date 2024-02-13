import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordOTP from './pages/ForgetPasswordOTP';
import ChangePassword from './pages/ChangePassword';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password-otp" element={<ForgotPasswordOTP/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
      </Routes>
  </Router>
  )
}

export default App
