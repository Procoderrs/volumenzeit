import facebook from "../Images/facebook.svg";
import pinterest from "../Images/pinterest.svg";
import skyps from "../Images/skyps.svg";
import insta from "../Images/insta.svg";

function SocialMediaIcons() {
  return (
    <div className=" mx-auto bg-[#a6a7ab] rounded-md px-3 py-2 w-fit flex  opacity-80   md:bg-transparent shadow-[none] flex-col items-center shadow-md">
      <p className="text-xs font-orbitron  font-semibold mb-1">FOLLOW US</p>
      <div className="flex gap-2">
        <img src={facebook} alt="facebook" className="bg-white rounded-full w-7 h-7 p-1" />
        <img src={pinterest} alt="pinterest" className="bg-white rounded-full w-7 h-7 p-1" />
        <img src={skyps} alt="skype" className="bg-white rounded-full w-7 h-7 p-1" />
        <img src={insta} alt="instagram" className="bg-white rounded-full w-7 h-7 p-1" />
      </div>
    </div>
  );
}

export default SocialMediaIcons;
