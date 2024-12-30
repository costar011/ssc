import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Main from "./pages/Main";
import BoardList from "./pages/BoardList";
import Portfolio from "./pages/Portfolio";
import Introduce from "./pages/Introduce";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<BoardList/>} />
        <Route path="/board" element={<Portfolio/>} />
        <Route path="/board" element={<Introduce/>} />
        <Route path="/board" element={<Login/>} />
        <Route path="/board" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
