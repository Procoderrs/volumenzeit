function Button({ text, designWatch, }) {
  return (
    <button className="flex flex-col items-center justify-center font-poppins bg-[#745cff] rounded-md text-white  text-[14px]  text-center hover:bg-[#5a45cc] transition-all duration-300">
      {text && <p className="text-[14px] px-12 py-4  ">{text}</p>}
      {designWatch && <p className="text-sm font-poppins cursor-pointer hover:bg-white hover:border-b border-[#745cff]   mt-1">{designWatch}</p>}
    </button>
  );
}

export default Button;
