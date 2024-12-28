import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import BoardList from "./pages/BoardList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<BoardList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
