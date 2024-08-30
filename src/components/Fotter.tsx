import { Link } from "react-router-dom";
import facebook from "/assets/svg/icon-facebook.svg";
import instagram from "/assets/svg/icon-instagram.svg";
import messenger from "/assets/svg/messenger.svg";
function Fotter() {
  return (
    <footer className="bg-black w-full h-full text-[#fff] flex justify-center items-center flex-col text-center">
      <span className="font-playfair text-[30px] mt-[20px]">Euro Mania</span>
      <div className="  tracking-[2px] mt-[30px]">
        <nav>
          <ul className="flex flex-col items-center justify-center gap-[15px]">
            <li>
              <Link className="cursor-pointer" to="/">
                მთავარი გვერდი
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="/shirts">
                პერანგები
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="/t-shirts">
                მაისურები
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="text-[14px] leading-[25px] opacity-[0.5] mt-[20px] p-[24px]">
        Euro Mania - ჩვენ ვართ პატარა გუნდი, რომელიც შედგება სტილის
        მოყვარულებისა და ვინტაჟური სამოსის სპეციალისტებისგან, რომლებიც მზად ვართ
        დაგეხმაროთ იპოვოთ შესაბამისი ზედები, რომლებიც გამოხატავენ თქვენს
        ინდივიდუალურობას. ეწვიეთ ჩვენს ბუტიკს - ჩვენ ღია ვართ კვირაში 7 დღე.
      </p>
      <span className="opacity-[0.5] mt-[50px]">
        Copyright 2024. All Rights Reserved
      </span>
      <div className="flex gap-[20px] mt-[20px] mb-[30px]">
        <a
          href="https://www.linkedin.com/in/anaraliev217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/anaraliev217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/anaraliev217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={messenger}
            alt="messenger"
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </a>
      </div>
    </footer>
  );
}

export default Fotter;
