import "./style.css";
import WatchDesignSteps from "../WatchDesignSteps";
function DesignWatch() {
	return (
		<div className="design mx-auto bg-[#745cff]   flex flex-col items-center text-5xl  tracking-wide   text-center    font-orbitron ">
			<div className="py-12">
			<h2>Design Your Watch</h2>
			<WatchDesignSteps/>
			</div>
		</div>
	);
}

export default DesignWatch;
