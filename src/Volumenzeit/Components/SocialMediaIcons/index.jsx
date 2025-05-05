import facebook from "../Images/facebook.svg";
import pinterest from "../Images/pinterest.svg";
import skyps from "../Images/skyps.svg";
import insta from "../Images/insta.svg";

function SocialMediaIcons() {
  return (
    <div className="  bg-[#a6a7ab] rounded-md px-3 py-2 w-fit flex  opacity-80   md:bg-transparent shadow-[none] flex-col ">
      <p className="text-[14px] font-Space  ">FOLLOW US</p>
      <div className="flex text-[16px] gap-2">
        <img src={facebook} alt="facebook" className="bg-white rounded-full shadow-lg w-[25px] h-[25px] " />
        <img src={pinterest} alt="pinterest" className="bg-white rounded-full shadow-lg w-[25px] h-[25px]" />
        <img src={skyps} alt="skype" className="bg-white rounded-full shadow-lg  w-[25px] h-[25px] " />
        <img src={insta} alt="instagram" className="bg-white rounded-full shadow-lg w-[25px] h-[25px] " />
      </div>
    </div>
  );
}

export default SocialMediaIcons;
