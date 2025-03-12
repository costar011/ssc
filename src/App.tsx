import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Main from "./pages/Main";
import BoardList from "./pages/BoardList";
import Portfolio from "./pages/Portfolio";
import Introduce from "./pages/Introduce";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/boardlist" element={<BoardList />} />
        <Route path="/write" element={<Write />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
