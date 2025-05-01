import "./style.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


import WatchDesignSteps from "../WatchDesignSteps";
function DesignWatch() {


	 useEffect(() => {
			AOS.init({
				duration: 1000, // animation duration
				once: true,     // animate only once
			});
		}, []);


		
	return (
		<div className="design  bg-[#745cff]  w-full max-w-[1440px] mx-auto overflow-hidden  flex flex-col items-center text-5xl  tracking-wide   text-center    font-orbitron ">
			<div className="py-12">
			<h2 data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">Design Your Watch</h2>
			<WatchDesignSteps/>
			</div>
		</div>
	);
}

export default DesignWatch;
