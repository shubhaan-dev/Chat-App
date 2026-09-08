import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LogInPage from "./Pages/LogInPage";
import RegisterPage from "./Pages/RegisterPage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LogInPage />} />

      <Route path="/register" element={<RegisterPage />} />
      <Route path="/chat" element={<ChatPage />} />
      
    </Routes>
  );
}

export default App;