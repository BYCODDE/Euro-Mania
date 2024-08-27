import humburger from "/assets/svg/humburger.svg";
import cart from "/assets/svg/cart.svg";
function Header() {
  return (
    <header
      className=" border-b  font-playfair p-[24px] pt-[37px] pb-[37px] w-full h-full bg-black text-white flex justify-between text-[30px]"
      style={{
        borderBottomColor: "rgba(255, 255, 255, 0.104)",
        borderBottomWidth: "2px",
      }}
    >
      <img src={humburger} alt="humburger" className="cursor-pointer" />
      Euro Mania
      <img src={cart} alt="cart" className="cursor-pointer" />
    </header>
  );
}

export default Header;
