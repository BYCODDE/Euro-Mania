import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shirts from "./pages/Shirts";
// import Tshirt from "./pages/Tshirt";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface BurgerContextType {
  burger: boolean;
  setBurger: Dispatch<SetStateAction<boolean>>;
}

export const BurgerContext = createContext<BurgerContextType | undefined>(
  undefined
);

function App() {
  const [burger, setBurger] = useState(false);

  return (
    <BurgerContext.Provider value={{ burger, setBurger }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirts" element={<Shirts />} />
          {/* <Route path="/t-shirts" element={<Tshirt />} /> */}
        </Routes>
      </Router>
    </BurgerContext.Provider>
  );
}

export default App;
