
import watchFeatures from "../Images/watchFeatures.png";
import circle from "../Images/circles.svg";
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// Content Data
const individualStyleContent = (
  <>
    <p>48 style combinations</p>
    <p>Color shifting Dial Color</p>
    <p>15 Strap options</p>
    <p>Custom Strap Engraving</p>
  </>
);

const featuresContent = (
  <>
    <p>Case size: 42mm</p>
    <p>Case Color: Silver, Black, Blue, chamfered</p>
    <p>brush with mirror polish</p>
    <p>Dial Color: Black Metallic</p>
    <p>Blue-Purple Water Resistance: 5 ATM/50 meters</p>
    <p>Straps: Quick release</p>
    <p>Movement: Swiss Parts RONDA 762E</p>
    <p>Instantaneous rate -10/ +20 sec/month</p>
    <p>Standard Battery life: 10 years</p>
  </>
);

const qualityContent = (
  <>
    <p>Case size: 316L Stainless-Steel</p>
    <p>Coating: Color anodized anti-scratch</p>
    <p>Glass: Sapphire Crystal</p>
    <p>Straps: 22mm Stainless-steel bracelet</p>
    <p>Straps: Quick release</p>
    <p>Bracelet, Leather</p>
  </>
);

// FeatureBlock Component
const FeatureBlock = ({ title, content, position, side }) => (
  <div className={`feature-block ${side} relative`} data-aos="fade-left">
    <div className={`absolute ${position}`}>
      <div className="feature-dot">
        <div className="inner-dot" />
      </div>
    </div>
    <div className="px-28 font-poppins text-center flex flex-col items-center justify-center">
      <h2 className="feature-title text-lg mb-4 relative">
        {title}
      </h2>
      <div className="text-[10px] font-poppins max-w-[300px] leading-5 text-[#939393]">
        {content}
      </div>
    </div>
  </div>
);

// Main Component
function Features() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const getFeatureContent = (title) => {
    switch(title) {
      case 'Individual Style': return individualStyleContent;
      case 'Features': return featuresContent;
      case 'High Quality Components': return qualityContent;
      default: return null;
    }
  };

  return (
    <div className="py-12">
      <div id="features" className="font-poppins w-full max-w-[1440px] mx-auto flex flex-col px-4 items-center">
        <h2 className="md:text-[40px] text-[28px]  font-Space" data-aos="fade-up">Features</h2>

        {/* Mobile View */}
        <div className="xl:hidden ">
          <div className="relative flex flex-col md:flex-row xs:items-center">
            <div className="relative w-[300px] px-6 md:sticky md:top-[-200px]  mt-24 h-68 flex items-center justify-center md:mt-0" data-aos="fade-up">
              <img src={circle} alt="circle" className="absolute w-full  object-cover animate-spin-slow" />
              <img src={watchFeatures} alt="watch" className="w-48 h-48 object-contain" />
            </div>

            <div className="  space-y-12">
              {['Individual Style', 'Features', 'High Quality Components'].map((title, idx) => (
                <div key={title} className="flex  mt-24 flex-col items-center" data-aos={`fade-${idx % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="feature-dot">
                    <div className="inner-dot" />
                  </div>
                  <h2 className="feature-title-mobile text-[18px] mb-4 mt-4  relative">
                    {title}
                  </h2>
                  <div className="text-[10px] leading-5 text-[#939393] text-center">
                    {getFeatureContent(title)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:block :flex w-full justify-center relative py-12 min-h-[600px] items-center">
          <div className="relative w-full gap-16  flex items-center justify-between">
            {/* Background Elements */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
              <img src={circle} alt="circle" className="w-full h-full object-contain animate-spin-slow opacity-70" />
              <img src={watchFeatures} alt="watch" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-10" />
            </div>

            {/* Left Features */}
            <div className="flex flex-col gap-16 z-20 mr-auto">
              <FeatureBlock 
                title="Individual Style" 
                content={individualStyleContent}
                position="right-[130px]  top-[2px]"
                side="left-1"
              />
              <FeatureBlock
                title="High Quality Components"
                content={qualityContent}
                position="right-[130px] top-1/2 "
                side="left-2"
              />
            </div>

            {/* Right Features */}
            <div className="flex flex-col gap-16 z-20 ml-auto">
              <FeatureBlock
                title="Features"
                content={featuresContent}
                position="left-[150px] "
                side="right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
