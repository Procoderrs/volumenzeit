import './style.css'
import marketing from '../Images/marketing.png'
function Mission(){
  const MARKETING=marketing
  return(
    <div  id='mission' className="flex flex-col md:flex-row px-1 w-full overflow-hidden">
  {/* Image div - smaller */}
  <div className="flex-[1]">
    <img
      src={MARKETING}
      alt="marketing-img"
      className="block w-full h-auto"
    />
  </div>

  {/* Text div - larger */}
  <div className="flex-[2] bg-black py-12 flex flex-col justify-center">
    <h2 className="font-orbitron text-white text-center">OUR Mission</h2>
    <div className="font-poppins flex items-center flex-col text-white text-[12px]">
      <p className="px-4 md:px-16 mt-4 max-w-[400px]">
        We have invested 6 year of our lifes to invent a new technology of
        production a 3D dials with quality of wristwatch industry.
        All what we need to turn on our imagination on maximum.
      </p>
      <p className="mt-4 px-4 md:px-16 max-w-[400px]">
        We love Out-of-the-box designs and believe there are many people who think the same.
      </p>
    </div>
  </div>
</div>


  )
}

export default Mission;