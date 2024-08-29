import { useContext } from "react";
import { BurgerContext } from "../App";
import Aboutus from "../components/Aboutus";
import Category from "../components/Category";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import Headerproduct from "../components/Headerproduct";
import Burger from "../components/Burger";
function Home() {
  const context = useContext(BurgerContext);

  if (!context) {
    throw new Error("Header must be used within a BurgerContext.Provider");
  }

  const { burger } = context;
  return (
    <div>
      <Header />
      {burger ? (
        <Burger />
      ) : (
        <div>
          <Headerproduct></Headerproduct>
          <Category></Category>
          <Aboutus></Aboutus>
          <Fotter></Fotter>
        </div>
      )}
    </div>
  );
}

export default Home;
