
import AOS from "aos";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import VideoFile from "../assets/vedio.mp4";
import WriteButton from "./WriteButton";


const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
    <div className="h-[70vh] flex flex-row justify-center items-center w-[88%]  mx-auto">
      <div className="flex  flex-wrap">
        <div
          className="w-[55%] p-4 "
          data-aos="fade-down"
          data-aos-delay="900"
        >
          <h1 className='text-4xl w-[500px] font-bold font-montserrat text-[#00FFFF]'>Start writing your own blog today on our website and let your voice be heard.</h1>
          <h1 className="text-[20px] font-lato text-[#ff00ff] leading-8  pt-8 w-[450px]">Are you passionate about sharing your thoughts, experiences, or expertise with the world? Don't let your ideas go to waste!</h1>  

          
          <Link to="/Writeblog">
            <WriteButton text="Write" />
          </Link>
        </div>
        <div
          className="w-[45%] p-10 relative"
          data-aos="fade-down"
          data-aos-delay="1500"
        >
          <div className="group  overflow-hidden rounded-lg">
              <video  className="border-8  border-[#00ffff]" autoPlay loop muted width="600" >
                        <source src={VideoFile} type="video/mp4"/>
                    </video>
          </div>
        </div>
      </div>
      </div>
      
  );
};

export default Main;
