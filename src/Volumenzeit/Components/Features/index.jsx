import watchFeatures from "../Images/watchFeatures.png";
import circle from "../Images/circles.svg";
import './style.css'

function Features() {
	return (
		<div id="features" className=" mx-auto font-poppins  py-12 flex flex-col px-4 items-center ">
			<h1 className="text-3xl font-bold mb-8">Features</h1>

      <div className="relative">

      {/* small screen img displayed  */}
					<div className=" flex-col sm:sticky  lg:hidden  lg:relative sm:top-[20%]  w-64 h-64 flex items-center shadow-[none] justify-center">
						{/* Circle background */}
						<img
							src={circle}
							alt="circle"
							className="absolute w-full h-full object-cover"
						/>

						{/* Watch inside the circle */}
						<img
							src={watchFeatures}
							alt="watch"
							className="w-36 h-36 object-contain"
						/>
					</div>



				</div>





			{/* Circle with Watch inside first div */}
			<div className="flex flex-col items-center px-4 text-center  lg:hidden     md:flex-row">
				
        
       



    {/* individual styles div  */}

					<div className="  flex flex-col mb-8 items-center">
						<div className="relative flex items-center justify-center w-7 h-7 rounded-full border-4 border-[#e5e0ff]">
							{/* Inner smaller circle */}
							<div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#e5e0ff]">
								{/* Center dot */}
								<div className="w-3 h-3 rounded-full bg-purple-600"></div>
							</div>
						</div>
						<div className=" mt-2  font-poppins flex flex-col items-center">
							<h1 className="text-2xl mb-4">Individual Style</h1>
							<div className="text-[10px] leading-5 font-poppins text-[#c2c2c2]">
								<p>48 style combinantions</p>
								<p>Color shifting Dial Color</p>
								<p> 15 Strap options</p>
								<p>Custom Strap Engraving</p>
							</div>
						</div>
					</div>



        {/*  Features div */}
					<div className=" flex flex-col mb-8 items-center">
						<div className="relative flex items-center justify-center w-7 h-7 rounded-full border-4 border-[#e5e0ff]">
							{/* Inner smaller circle */}
							<div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#e5e0ff]">
								{/* Center dot */}
								<div className="w-3 h-3 rounded-full bg-purple-600"></div>
							</div>
						</div>
						<div className="  mt-2 font-poppins flex flex-col items-center">
							<h1 className="text-2xl mb-4">Features</h1>
							<div className="text-[10px] text-center leading-5 flex flex-col items-center font-poppins text-[#c2c2c2]">
								<p>Case size: 42mm</p>
								<p>
									Case Color: Silver, Black, Blue, chamfered brush with mirror
									polish
								</p>
								<p>
									{" "}
									Dial Color: Black Metallic, Color shifting Blue-Purple,
									Green-Purple, Pink-Gold
								</p>
								<p>Water Resistance: 5 ATM/50 meters</p>
								<p>Straps: Quick release</p>
								<p>Movement: Swiss Parts RONDA 762E</p>
								<p>Instantaneous rate -10/ +20 sec/month</p>
								<p>Standard Battery life: 10 years</p>
							</div>
						</div>
					</div>


          {/* Qualitycomponents */}
					<div className=" flex flex-col items-center">
						<div className="relative flex items-center justify-center w-7 h-7 rounded-full border-4 border-[#e5e0ff]">
							{/* Inner smaller circle */}
							<div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#e5e0ff]">
								{/* Center dot */}
								<div className="w-3 h-3 rounded-full bg-purple-600"></div>
							</div>
						</div>
						<div className="  mt-2 font-poppins flex flex-col items-center">
							<h1 className="text-2xl mb-4">High Quality Components</h1>
							<div className="text-[10px] text-center leading-5 flex flex-col items-center font-poppins text-[#c2c2c2]">
								<p>Case size: 316L Stainless-Steel</p>
								<p>Coating: Color anodized anti-scratch</p>
								<p> Glass: Sapphire Crystal</p>
								<p>Straps: 22mm Stainless-steel bracelet, Milanese Mesh</p>
								<p>Straps: Quick release</p>
								<p>bracelet, Leather</p>
							</div>
						</div>
					</div>
				

				
			</div>


{/* Desktop screen */}

{/* Desktop screen only: 3-column layout with image in the middle */}
{/* Desktop screen only: Centered large image with side content */}
<div className="hidden lg:flex w-full justify-center py-12">
  <div className="w-full max-w-5xl mx-auto px-4 lg:px-12 flex items-center justify-center gap-12">

    {/* Left Column */}
		
    <div className="flex relative flex-col gap-8 max-w-xs">
		
      <div className="feature-block left">
			
							<div className="flex gap-6">

							
        <h1 className="  text-2xl mb-4">Individual Style</h1>
				<div className="flex  relative top-[95px] left-[30px]  items-center justify-center w-5 h-5 rounded-full border-4 border-[#e5e0ff]">
								{/* Center dot */}
								<div className="w-3 h-3 rounded-full bg-purple-600"></div>
							</div>

       </div>
        <div className="text-[10px] leading-5 font-poppins text-[#c2c2c2]">
          <p>48 style combinations</p>
          <p>Color shifting Dial Color</p>
          <p>15 Strap options</p>
          <p>Custom Strap Engraving</p>
        </div>
      </div>

      <div className="feature-block-2 relative  left ">

			
        <h1 className="text-2xl mb-4">Features</h1>
				<div className="flex  relative top-[90px] left-[230px]  items-center justify-center w-5 h-5 rounded-full border-4 border-[#e5e0ff]">
								{/* Center dot */}
								<div className="w-3 h-3 rounded-full bg-purple-600"></div>
							</div>
        <div className="text-[10px] leading-5 font-poppins text-[#c2c2c2]">
          <p>Case size: 42mm</p>
          <p>Case Color: Silver, Black, Blue, chamfered brush with mirror polish</p>
          <p>Dial Color: Black Metallic, Color shifting Blue-Purple, Green-Purple, Pink-Gold</p>
          <p>Water Resistance: 5 ATM/50 meters</p>
          <p>Straps: Quick release</p>
          <p>Movement: Swiss Parts RONDA 762E</p>
          <p>Instantaneous rate -10/ +20 sec/month</p>
          <p>Standard Battery life: 10 years</p>
        </div>
      </div>
    </div>

    {/* Center Image — now larger and centered */}
    <div className="relative w-[400px] h-[400px] flex items-center justify-center shrink-0 curved-line curved-dot left-dot right-dot">
      <img
        src={circle}
        alt="circle"
        className="absolute w-full h-full object-contain"
      />
      <img
        src={watchFeatures}
        alt="watch"
        className="w-48 z-10 object-contain"
      />
    </div>

    {/* Right Column */}
    <div className="flex feature-block right relative flex-col max-w-xs">
      <h1 className="text-2xl mb-4">High Quality Components</h1>
			<div className="flex  relative top-[-70px] left-[-50px]  items-center justify-center w-5 h-5 rounded-full border-4 border-[#e5e0ff]">
								{/* Center dot */}
								<div className="w-3 h-3 rounded-full bg-purple-600"></div>
							</div>
      <div className="text-[10px] leading-5 font-poppins text-[#c2c2c2]">
        <p>Case size: 316L Stainless-Steel</p>
        <p>Coating: Color anodized anti-scratch</p>
        <p>Glass: Sapphire Crystal</p>
        <p>Straps: 22mm Stainless-steel bracelet, Milanese Mesh</p>
        <p>Straps: Quick release</p>
        <p>Bracelet, Leather</p>
      </div>
    </div>

  </div>
</div>






		</div>
	);
}

export default Features;
