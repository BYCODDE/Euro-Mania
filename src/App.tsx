import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shirts from "./pages/Shirts";

import { createContext, useState, Dispatch, SetStateAction } from "react";
import Tshirt from "./pages/Tshirt";

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
          <Route path="/t-shirts" element={<Tshirt />} />
          <Route path="/shirts" element={<Shirts />} />
        </Routes>
      </Router>
    </BurgerContext.Provider>
  );
}

export default App;
