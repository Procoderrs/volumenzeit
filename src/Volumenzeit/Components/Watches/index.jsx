import "./style.css";
import Slider from "react-slick";

import { useState } from "react";
import WatchCrousel from "../WatchCrousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Watches() {

	
	

	return (
		<div id="watches"  className="   w-full max-w-[1440px] mx-auto py-16 px-4 ">
			<div className=" ">
      <div className="flex items-center flex-col sm:items-start md:items-center">

      
			<h2 className="font-Space text-[28px] md:text-[42px] float-left text-center sm:text-start md:text-center  ">
  WATCHES
</h2>				
<p className="font-poppins mt-6 text-[14px] mb-12  text-[#939393] sm:leading-6 leading-10  text-center max-w-[600px] md:max-w-[790px] sm:text-start  md:text-center ">
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
