import { Link } from "react-router-dom";
import backgroundImage from "/assets/photos/t-shirts/category2.jpg";
import backgroundImage2 from "/assets/photos/category.jpeg";
import arrow from "/assets/svg/arrow.svg";
function Category() {
  return (
    <div className=" w-full h-full mt-[50px] flex flex-col gap-[60px] items-center p-[24px]">
      <Link to="/shirts">
        <div
          className="w-[327px] h-[165px] rounded-lg bg-[#F1F1F1] gap-[20px] flex justify-center items-center flex-col bg-cover bg-center  text-[#000] text-center tracking-[1.071px] font-bold text-[30px] cursor-pointer"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          მაისურები
          <span className="text-[23px]  text-white flex justify-center items-center gap-[3px]">
            შეძენა <img className="w-[15px] h-[15px]" src={arrow} alt="arrow" />
          </span>
        </div>
      </Link>
      <Link to="/t-shirts">
        <div
          className="w-[327px] h-[165px] rounded-lg bg-[#F1F1F1] gap-[20px] flex justify-center items-center flex-col bg-cover bg-center  text-[#FFF] text-center tracking-[1.071px] font-bold text-[30px] cursor-pointer"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        >
          პერანგები
          <span className="text-[23px]  text-white flex justify-center items-center gap-[3px]">
            შეძენა <img className="w-[15px] h-[15px]" src={arrow} alt="arrow" />
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Category;
