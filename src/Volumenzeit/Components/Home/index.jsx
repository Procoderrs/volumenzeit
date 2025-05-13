import "./style.css";
import SocialMediaIcons from "../SocialMediaIcons";
import watch from "../Images/watch.png";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<div className="bg-[#fafbff] w-full h-full ">
			<div
				id="home"
				className=" w-full h-full    flex flex-col md:flex-row items-center justify-between px-4 lg:px-20  font-poppins relative "
			>
				{/* Text Content */}
				<div className="flex-1 z-10  mt-6 md:mt-0  max-w-[1440px] 2xl:px-20 mx-auto w-full h-full  sm:py-12  text-center md:text-left">
					<h1
						className="text-[40px] md:text-6xl font-Space leading-[50px]    md:leading-[50px] max-w-[600px]  mb-4"
						data-aos="fade-up"
					>
						Find Your DREAM Watch
					</h1>
					<p
						className="text-[#949494] text-sm font-poppins font-light  leading-6 md:leading-7  max-w-[480px] md:max-w-[600px] mx-auto md:mx-0"
						data-aos="fade-up"
						data-aos-delay="50"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
						facilisi elementum commodo ipsum. Aenean aenean adipiscing lect.
					</p>

					<button
						className="bg-[#745cff] hover:bg-white hover:text-[#745cff] border-transparent hover:border-b-2   mt-6 sm:mt-12  hover:border-[#745cff] transition-all duration-300 text-sm  px-8 py-4 md:px-9 md:py-6 rounded-md text-white font-poppins mb-2"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<Link to="">Design Your Watch</Link>
					</button>

					<div
						className="hidden w-full md:block "
						data-aos="fade-up"
						data-aos-delay="150"
					>
						<SocialMediaIcons />
					</div>
				</div>

				{/* Mobile Image with Social Icons */}
				<div className="md:hidden relative w-full">
					<img
						src={watch}
						alt="Watch"
						className="w-full h-auto object-contain mx-auto relative"
						data-aos="zoom-in-up"
					/>
					<div className="absolute inset-0 flex items-center justify-center">
						<SocialMediaIcons />
					</div>
				</div>

				{/* Desktop Background Image */}
				<div className="hidden md:block absolute  inset-0 overflow-hidden z-0">
					<img
						src={watch}
						alt="Watch"
						className="absolute right-0 top-[80px] md:top-[10px] w-auto h-[100%] object-contain origin-top-right"
						data-aos="zoom-in-up"
						style={{
							transform: "translateX(25%) ",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
