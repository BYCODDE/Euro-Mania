import humburger from "/assets/svg/humburger.svg";
import cart from "/assets/svg/cart.svg";
function Header() {
  return (
    <header className="font-playfair p-[24px] pt-[37px] pb-[37px] w-full h-full bg-black text-white flex justify-between text-[30px]">
      <img src={humburger} alt="humburger" className="cursor-pointer" />
      Euro Mania
      <img src={cart} alt="cart" className="cursor-pointer" />
      
    </header>
  );
}

export default Header;
