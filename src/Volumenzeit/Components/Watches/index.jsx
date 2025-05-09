import "./style.css";
import Slider from "react-slick";

import { useState } from "react";
import WatchCrousel from "../WatchCrousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Watches() {

	
	

	return (
		<div id="watches"  className="  overflow-hidden  w-full max-w-[1440px] mx-auto py-16 px-4 md:px-24 ">
			<div className=" ">
      <div className="flex items-center flex-col md:px-4  md:items-start sm:items-center">

      
			<h2 className="font-Space text-[28px] md:text-[42px] float-left text-center sm:text-start md:text-center  ">
  WATCHES
</h2>				
<p className="font-poppins mt-6 text-[14px] mb-12   text-[#939393] sm:leading-6 leading-10  text-center md:text-start max-w-[600px] md:max-w-[750px] sm:text-start   ">
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
