import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shirts from "./pages/Shirts";
import Tshirt from "./pages/Tshirt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/t-shirts" element={<Tshirt />} />
      </Routes>
    </Router>
  );
}

export default App;
