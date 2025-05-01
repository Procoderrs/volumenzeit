import "./style.css";
import Slider from "react-slick";

import { useState } from "react";
import WatchCrousel from "../WatchCrousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Watches() {

	
	

	return (
		<div id="watches"  className="   w-full max-w-[1440px] mx-auto py-12 ">
			<div className=" ">
      <div className="flex items-center flex-col sm:items-start">

      
			<h2 className="font-orbitron text-2xl float-left text-center sm:text-start sm:px-12">
  WATCHES
</h2>				<p className="font-poppins mt-6  text-[#939393] sm:leading-6 leading-8  text-center max-w-[600px] sm:text-start sm:px-12 text-sm ">
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
