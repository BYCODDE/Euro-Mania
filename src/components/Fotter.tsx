import facebook from "/assets/svg/icon-facebook.svg";
import instagram from "/assets/svg/icon-instagram.svg";
import messenger from "/assets/svg/messenger.svg";
function Fotter() {
  return (
    <footer className="bg-black w-full h-full text-[#fff] flex justify-center items-center flex-col">
      <span className="font-playfair text-[30px] mt-[20px]">Euro Mania</span>
      <div className="flex flex-col items-center justify-center gap-[15px] tracking-[2px] mt-[30px]">
        <span>მთავარი გვერდი</span>
        <span>მაისურები</span>
        <span>პერანგები</span>
      </div>
      <p className="text-[12px] leading-[25px] opacity-[0.5] mt-[20px] p-[24px]">
        Euro Mania - ჩვენ ვართ პატარა გუნდი, რომელიც შედგება სტილის
        მოყვარულებისა და ვინტაჟური სამოსის სპეციალისტებისგან, რომლებიც მზად ვართ
        დაგეხმაროთ იპოვოთ შესაბამისი ზედები, რომლებიც გამოხატავენ თქვენს
        ინდივიდუალურობას. ეწვიეთ ჩვენს ბუტიკს - ჩვენ ღია ვართ კვირაში 7 დღე.
      </p>
      <span className="opacity-[0.5] mt-[50px]">
        Copyright 2024. All Rights Reserved
      </span>
      <div className="flex gap-[20px] mt-[20px] mb-[30px]">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={messenger} alt="messenger" className="w-[24px] h-[24px]" />
      </div>
    </footer>
  );
}

export default Fotter;
