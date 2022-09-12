import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import SignIn from "./pages/Sign-In/SignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
