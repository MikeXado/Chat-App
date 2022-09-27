import "./App.scss";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/auth/LogIn";
const Chat = lazy(() => import("./pages/chat/Chat"));
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
