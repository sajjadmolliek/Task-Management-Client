import { Link } from "react-router-dom";
import CngThm from "../../../Components/CngThm";
import useCustomeHook from "../../../Hooks/useCustomeHook";
import "./Banner.css";

const Banner = () => {
  const {user} = useCustomeHook()
  return (
    <div className="banner h-[30rem] lg:h-[45rem]">
      <div className="">
        <CngThm></CngThm>
       <div className="absolute">
       {
        user? 
        <Link to={"/Dashboard"}>
        <button type="button" className="btn btn-sm lg:btn-md bg-[#38697F] border-0 text-white hover:text-black relative top-[19rem] lg:top-[33rem] left-20">Let’s Explore</button>
        </Link>:
        <Link to={"/logins"}>
        <button type="button" className="btn btn-sm lg:btn-md bg-[#38697F] border-0 text-white hover:text-black relative top-[19rem] lg:top-[33rem] left-20">Let’s Explore</button>
        </Link>

       }
        
       </div>
      </div>
    </div>
  );
};


export default Banner;
