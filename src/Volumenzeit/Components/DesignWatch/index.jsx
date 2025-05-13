import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import WatchDesignSteps from "../WatchDesignSteps";
function DesignWatch() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration
			once: true, // animate only once
		});
	}, []);

	return (
		<div className="bg-[#745cff] w-full">
			<div className="design  max-w-[1440px]  w-full  mx-auto overflow-hidden  flex flex-col items-center text-5xl  tracking-wide   text-center  px-6   font-Space ">
				<div className="py-12 font-Space  flex-col flex w-full ">
					<h2
						data-aos="fade-up"
						data-aos-once="false"
						data-aos-duration="1000"
						className="text-[28px]  text-center"
					>
						Design Your Watch
					</h2>
					<WatchDesignSteps />
				</div>
			</div>
		</div>
	);
}

export default DesignWatch;
