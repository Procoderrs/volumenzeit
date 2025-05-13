import logo from "../Images/logo.svg";
import Hamburgericon from "../HamburgerIcon/icon";
import { useState } from "react";
import CrossIcon from "../CrossIcon";
import Button from "../Button";
import { Link } from "react-router-dom";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	function handleMenuToggle() {
		setIsMenuOpen(!isMenuOpen);
	}

	const navLinks = [
		{ name: "Home", id: "home" },
		{ name: "Features", id: "features" },
		{ name: "Our Mission", id: "mission" },
		{ name: "Watches", id: "watches" },
		{ name: "About Us", id: "about" },
	];

	function handleNavClick(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
			setIsMenuOpen(false);
		}
	}

	return (
		<div className=" sticky top-0 z-[20000]">
		<div className=" bg-[#fafbff]      w-full  ">

		
		<div className="  w-full   mx-auto max-w-[1440px]   bg-[#fafbff]  overflow-hidden z-[1000]   xl:px-20  py-4 ">
			{/* Top part */}
			<div className="flex justify-between px-4    items-center  w-full">
				<Link to="/">
					<img src={logo} alt="logo" className="md:h-[35px] h-6 "  data-aos="fade-right" />
				</Link>

				{/* Desktop menu */}
				<div className="hidden lg:flex items-center gap-10   font-poppins"  data-aos="fade-right" data-aos-delay="50">
					<ul className="flex items-center    gap-10 text-[#745cff] text-[14px]">
						{navLinks.map((item) => (
							<li key={item.id}>
								<button
									onClick={() => handleNavClick(item.id)}
									className={`${
										activeSection === item.id
											? "text-black border-b-2 border-[#745cff] cursor-pointer"
											: "text-[#949494]"
									} hover:text-black hover:border-b-2 border-[#745cff] cursor-pointer pb-1 transition-all ease-in-out  duration-300`}
								>
									{item.name}
								</button>
							</li>
						))}
					</ul>
					
				</div>
				<div className="hidden lg:block"  data-aos="fade-left">
						<Button text='Sign up' />
					</div>
				{/* Mobile menu (Hamburger and Button) */}
				<div className="lg:hidden flex gap-5 items-center  ">
					
					<div className="cursor-pointer" onClick={handleMenuToggle}>
						{isMenuOpen ? <CrossIcon /> : <Hamburgericon />}
					</div>

					<div className="hidden sm:block">
						<Button text='Sign up' />
					</div>

				</div>
			</div>

			{/* Side Menu (Drawer) for Mobile */}
			<div
				className={`fixed top-14 left-0 h-full w-full bg-[#fafbff]  shadow-md transform ${
					isMenuOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-500 ease-in-out z-50`}
			>
				<ul className="flex flex-col items-center text-center px-6 py-4  w-full space-y-6 text-[#745cff] text-[24px] font-semibold">
					{navLinks.map((item) => (
						<li key={item.id}>
							<button
								onClick={() => handleNavClick(item.id)}
								className={`${
									activeSection === item.id
										? "text-black border-b-2 border-[#745cff] cursor-pointer"
										: "text-[#949494]"
								} hover:text-black hover:border-b-2 hover:border-[#745cff] cursor-pointer pb-1 transition-all duration-300`}
							>
								{item.name}
							</button>
						</li>
					))}
					<div className="sm:hidden block mt-4">
						<Button text='Sign up' />
					</div>
				</ul>
			</div>

			{/* Overlay when menu open */}
			{isMenuOpen && (
				<div className="fixed inset-0 z-40" onClick={handleMenuToggle}></div>
			)}
		</div>
		</div>
		</div>
	);
}

export default Navbar;
