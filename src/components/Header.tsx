import humburger from "../assets/humburger.svg";
import cart from "../assets/cart.svg";
function Header() {
  return (
    <header className="font-playfair p-[24px] pt-[37px] pb-[37px] w-full h-full bg-black text-white flex justify-between">
      <img src={humburger} alt="humburger" />
      Euro Mania
      <img src={cart} alt="cart" />
    </header>
  );
}

export default Header;
