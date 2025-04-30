import "./style.css";
import Slider from "react-slick";

import { useState } from "react";
import WatchCrousel from "../WatchCrousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Watches() {
	const [currentIdex, setCurrentIndex] = useState(0);

	function prevSlide() {
		setCurrentIndex((prev) =>
			prev === 0 ? Watch_ARRAY_DATA.length - 1 : prev - 1
		);
	}
	function nextSlide() {
		setCurrentIndex((prev) =>
			prev === Watch_ARRAY_DATA.length - 1 ? 0 : prev + 1
		);
	}

	return (
		<div id="watches"  className=" mx-8 py-12 ">
			<div className=" ">
      <div className="flex items-center flex-col sm:items-start">

      
				<h2 className="font-orbitron  text-center text-2xl">WATCHES</h2>
				<p className="font-poppins mt-6  leading-6 text-center max-w-[600px] sm:text-start px-12 text-sm text-black">
					Volumenzeit gives you a total of 48 style combinations with 4 dial
					types, 4 dial colors, 3 case colors, multiple stylish strap
					combinations, and customized engraving options.
				</p>
</div>
				<div>
					<WatchCrousel />
				</div>
			</div>
		</div>
	);
}

export default Watches;
