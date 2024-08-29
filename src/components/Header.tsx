import humburger from "/assets/svg/humburger.svg";
import cart from "/assets/svg/cart.svg";
import { useContext } from "react";
import { BurgerContext } from "../App";

function Header() {
  const context = useContext(BurgerContext);

  if (!context) {
    throw new Error("Header must be used within a BurgerContext.Provider");
  }

  const { burger, setBurger } = context;
  console.log(burger);

  return (
    <>
      <header
        className="border-b font-playfair p-[24px] pt-[37px] pb-[37px] w-full h-full bg-black text-white flex justify-between text-[30px]"
        style={{
          borderBottomColor: "rgba(255, 255, 255, 0.104)",
          borderBottomWidth: "2px",
        }}
      >
        <img
          src={humburger}
          alt="humburger"
          className="cursor-pointer"
          onClick={() => setBurger(!burger)}
        />
        Euro Mania
        <img src={cart} alt="cart" className="cursor-pointer" />
      </header>
    </>
  );
}

export default Header;
