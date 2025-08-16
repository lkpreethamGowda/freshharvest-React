import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/header";
import LandingPage from "./components/LandingPage";
import LogInPage from "./components/LogInPage";
import Footer from "./components/Footer";
import SignUpPage from "./components/SignUpPage";
import Message from "./components/Message";
import HomeHeader from "./components/HomeHeader";

function App() {
  return (
    <BrowserRouter>
      <HomeHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Message" element={<Message />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
