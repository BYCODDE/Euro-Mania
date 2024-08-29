import logo from "/assets/svg/euro-mania-high-resolution-logo.svg";

function Aboutus() {
  return (
    <div className="font-bold text-[20px] gap-[10px] flex justify-center flex-col  items-center p-[24px] text-center">
      <img
        src={logo}
        alt="logo"
        className="max-w-[327px] max-h-[165px] rounded-[8px]"
      />
      <span className="flex gap-[10px] justify-center items-center">
        გთავაზობთ <span className="text-[#D87D4A]">საუკეთესო</span> ვინტაჟს
      </span>
      <p className="font-normal text-[15px] leading-[25px] opacity-[0.5]">
        გამოსცადეთ მოდის ხიბლი ჩვენი ვინტაჟური სამოსის კოლექციით, რომელიც
        სთავაზობს უნიკალურ სტილს და გამორჩეულ ხარისხს ელეგანტური მოდის
        მოყვარულებისთვის.
      </p>
    </div>
  );
}

export default Aboutus;
