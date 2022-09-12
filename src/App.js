import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import LogIn from "./pages/auth/LogIn.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
