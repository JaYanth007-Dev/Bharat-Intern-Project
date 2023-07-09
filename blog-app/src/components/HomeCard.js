import WriteButton from "./WriteButton";
import VideoFile from '../Assets/vedio.mp4';
import {Link} from "react-router-dom"
const HomeCard = () => {
    return (
        <div className="justify-center flex items-center bg-black h-[82vh] bg-purple-00">

            <div className=" pt-5 w-[80vw] h-[60vh] flex justify-between items-center">

                <div className="w-[50%] ">
                    <h1 className='text-4xl font-[Montserrat] text-[#00FFFF]'>Start writing your own blog today on our website and let your voice be heard.</h1>
                    <h1 className="text-[20px] font-[Lato] text-[#ff00ff] leading-8 s pt-8 w-[450px]">Are you passionate about sharing your thoughts, experiences, or expertise with the world? Don't let your ideas go to waste!</h1>  
                    <Link to="/Write-blog"><WriteButton text="Write" /></Link>
                </div>
                
                <div className="flex justify-end" >
                    <video  className="border-8 border-[#00ffff]" autoPlay loop muted width="500" >
                        <source src={VideoFile} type="video/mp4"/>
                    </video>
                </div>
           </div>
        </div>
    );
};

export default HomeCard;