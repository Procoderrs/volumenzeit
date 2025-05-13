function Button({ text, designWatch }) {
	return (
		<button className="flex flex-col items-center justify-center font-poppins bg-[#745cff] rounded-md text-white  text-[14px]  text-center hover:bg-white hover:border-b-2 border-transparent hover:text-[#745cff] hover:border-[#755cff] transition-all duration-300">
			{text && <p className="text-[14px] px-14 py-4  ">{text}</p>}
			{designWatch && (
				<p className="text-sm font-poppins cursor-pointer hover:bg-white hover:border-b border-[#745cff]   mt-1">
					{designWatch}
				</p>
			)}
		</button>
	);
}

export default Button;
