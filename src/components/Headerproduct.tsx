import backgroundImage from "/assets/photos/123123.png";
function Headerproduct() {
  return (
    <div
      className="gap-[40px] flex justify-center items-center flex-col bg-cover bg-center h-full w-full text-white text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 className="text-[17px] mb-[95px] leading-[40px] tracking-[10px]  text-red-700 font-bold ">
        ახალი პროდუქცია 🔥
      </h3>
      <h2 className="text-[23px] font-bold leading-[40px] tracking-[1.286px] ">
        POLO-ს ორიგინალი ზედები{" "}
      </h2>

      <button className="flex justify-center items-center mb-[50px] max-w-[160px] max-h-[48px] bg-[#D87D4A] p-[24px] font-bold rounded-sm">
        იხილეთ პროდუქტი
      </button>
    </div>
  );
}

export default Headerproduct;
