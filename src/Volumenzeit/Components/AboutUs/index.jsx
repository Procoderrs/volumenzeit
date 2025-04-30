import { useRef, useState, useEffect } from 'react';
import Video from '../Images/Video.mp4';
import poster from '../Images/video.png';

function AboutUs() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  /* const handleCloseVideo = () => {
    // Pause and reset video
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } 

    // Then hide the modal
    setShowVideo(false);
  };*/

  /* // Optional: prevent scrolling while video is open
  useEffect(() => {
    document.body.style.overflow = showVideo ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showVideo]);
 */
  return (
    <div id='about'  className="px-6 mx-auto py-12 justify-between  flex flex-col items-center md:flex-row ">
      <div className='flex-1 px-6'>
        <h2 className="font-orbitron text-3xl  mb-2">ABOUT US</h2>
        <p className="text-[12px] max-w-[400px] leading-6 text-gray-500 font-poppins">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus, velit. Lectus tellus amet </p>
      </div>

      {/* Video poster */}
      {!showVideo && (
        <div
          className="mt-6 flex-1 relative w-full cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          <img src={poster} alt="Video Poster" className="w-full rounded-lg" />
          <div className="absolute inset-0 bg-purple-600 bg-opacity-50 rounded-lg flex items-center justify-center">
{/*             <span className="text-white font-bold text-lg">▶ Play Video</span>
 */}          </div>
        </div>
      )}

      {/* Video modal */}
      {showVideo && (
        {/* <div className="fixed inset-0  bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className=" relative w-[90%] max-w-3xl">
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 text-purple-400 cursor-pointer text-[10px] font-poppins"
            >
              close
            </button>
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              src={Video}
              controls
              autoPlay
            />
          </div>
        </div> */}
      )}
    </div>
  );
}

export default AboutUs;
