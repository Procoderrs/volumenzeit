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
import leftArrow from '../Images/leftArrow.png';
import rightArrow from '../Images/rightArrow.png';


function WatchCarousel() {
	const sliderRef = useRef(null);

const	settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
			{
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, 


      {
        breakpoint: 1440,
        settings: {
					dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
					dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },

			{
        breakpoint: 1024,
        settings: {
					dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },

			
       {
        breakpoint: 640,
        settings: {
					dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } ,
			{
				breakpoints:320,
				settings:{
					dots: false,
					slidesToShow:1,
					slidesToScroll:1,
				}
			}
    ]
  };

	const WatchCard = ({ img, price, volumenzeit }) => (
		
		<div className=" mt-10  "  data-aos="fade-up"     data-aos-once="false">
			<div className="bg-[#f0f3fa]   mx-auto max-w-[350px] md:max-w-[300px]   text-center py-4    flex flex-col gap-3 rounded-md">
			<img
				src={img}
				alt={volumenzeit}
				className="mx-auto  object-contain transition-transform duration-300 hover:scale-95"
			/>
			
		</div>
		<div className="mt-12 font-poppins flex flex-col items-center text-center">
				<p className=" mb-4 text-[#949494]">{volumenzeit}</p>
				<p className="mt-2 text-xl md:text-[26px] text-black">{price}</p>
			</div>
		</div>
	);

	return (
		<div className=''>
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
			<div className="flex justify-between items-center max-w-[90vw] mx-auto flex-col md:flex-row px-2  gap-4 mt-6">

			<div className=' flex gap-2'>
			<button
					onClick={() => sliderRef.current?.slickPrev()}
					className=" p-2 rounded-full  " data-aos="fade-right">
					<img src={leftArrow} alt="leftArrow" className="transition-transform duration-300 hover:scale-95 w-12 md:w-16 h-auto" />
				</button>
				<button
					onClick={() => sliderRef.current?.slickNext()}
					className=" p-2 rounded-full "  data-aos="fade-right"     data-aos-once="false"
					>
					<img src={rightArrow} alt="rightArrow" className="transition-transform duration-300 hover:scale-95 w-12 md:w-16 h-auto" />
				</button>
			</div>
				

				<button className="text-white text-[12px] bg-[#745cff] font-poppins  px-12 py-6 rounded hover:bg-gray-800" data-aos="fade-right"     data-aos-once="false">
				Design Your Watch
			</button>
			</div>

			
		</div>
	);
}

export default WatchCarousel;
