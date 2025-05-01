import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import blueEmbroideWatch from "../Images/blueEmbroideWatch.png";
import blueSecondWatch from "../Images/blueSecondWatch.png";
import darkPinkWatch from "../Images/darkPinkWatch.png";
import imgBlack1New from "../Images/imgBlack1New.png";
import imgBlackEmbroid from "../Images/imgBlackEmbroid.png";
import imgBlackOne from "../Images/imgBlackOne.png";
import pinkImg from "../Images/pinkImg.png";
import watchBlue from "../Images/watchBlue.png";
import watchGreenImg from "../Images/watchGreenImg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WatchCarousel() {
	const sliderRef = useRef(null);

const	settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      /* {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } */
    ]
  };

	const WatchCard = ({ img, price, volumenzeit }) => (
		
		<div className=" "  data-aos="fade-up"     data-aos-once="false">
			<div className="bg-[#f0f3fa]  mx-auto max-w-[300px] text-center py-4   px-2 flex flex-col gap-3 rounded-md">
			<img
				src={img}
				alt={volumenzeit}
				className="mx-auto  object-contain"
			/>
			<div className="mt-4 font-poppins">
				<p className="text-[#949494]">{volumenzeit}</p>
				<p className="mt-2 text-xl text-black">{price}</p>
			</div>
		</div>
		</div>
	);

	return (
		<div className="px-4 py-6">
			<Slider ref={sliderRef} {...settings}>
				<div><WatchCard img={blueEmbroideWatch} price="$20,588" volumenzeit="Volumenzeit S 8" /></div>
				<div><WatchCard img={blueSecondWatch} price="$15,588" volumenzeit="Volumenzeit S 7" /></div>
				<div><WatchCard img={watchGreenImg} price="$20,588" volumenzeit="Volumenzeit S 6" /></div>
				<div><WatchCard img={darkPinkWatch} price="$15,588" volumenzeit="Volumenzeit S 5" /></div>
				<div><WatchCard img={pinkImg} price="$22,588" volumenzeit="Volumenzeit S 4" /></div>
				<div><WatchCard img={imgBlackEmbroid} price="$20,588" volumenzeit="Volumenzeit S 3" /></div>
				<div><WatchCard img={watchBlue} price="$17,588" volumenzeit="Volumenzeit S 2" /></div>
				<div><WatchCard img={imgBlackOne} price="$22,588" volumenzeit="Volumenzeit S 1" /></div>
			</Slider>

			{/* Navigation Buttons */}
			<div className="flex justify-center items-center gap-4 mt-6">
				<button
					onClick={() => sliderRef.current?.slickPrev()}
					className="bg-gray-200 p-2 rounded-full hover:bg-gray-300" data-aos="fade-right">
					<ChevronLeft />
				</button>
				<button
					onClick={() => sliderRef.current?.slickNext()}
					className="bg-gray-200 p-2 rounded-full hover:bg-gray-300" data-aos="fade-right"     data-aos-once="false"
					>
					<ChevronRight />
				</button>

				<button className="text-white bg-[#745cff] font-poppins  px-6 py-2 rounded hover:bg-gray-800" data-aos="fade-right"     data-aos-once="false">
				Design Your Watch
			</button>
			</div>

			
		</div>
	);
}

export default WatchCarousel;
