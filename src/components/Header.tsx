import humburger from "/assets/svg/humburger.svg";
import cart from "/assets/svg/cart.svg";
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
