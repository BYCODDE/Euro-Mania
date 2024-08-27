import backgroundImage from "/assets/photos/123123.png";
function Seeproduct() {
  return (
    <div
      className="gap-[40px] flex justify-center items-center flex-col bg-cover bg-center h-full w-full text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 className="mb-[95px] leading-[40px] tracking-[10px]  opacity-[0.4964]  text-[14px]">
        NEW PRODUCT
      </h3>
      <h2 className="text-[23px] font-bold leading-[40px] tracking-[1.286px] ">
        POLO-ს ორიგინალი ზედები{" "}
      </h2>
      {/* <p className="opacity-[0.75] text-[15px]">

      </p> */}
      <button className="flex justify-center items-center mb-[50px] max-w-[160px] max-h-[48px] bg-[#D87D4A] p-[24px]">
        იხილეთ პროდუქტი
      </button>
    </div>
  );
}

export default Seeproduct;
