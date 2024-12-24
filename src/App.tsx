import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter basename="/ssc">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
