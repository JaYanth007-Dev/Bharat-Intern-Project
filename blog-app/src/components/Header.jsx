import { Link } from "react-router-dom";
import jayLogo from "../assets/ss.png"
 
const Logo = () => (
  <div className="font-['Montserrat'] font-extrabold flex items-center">
    <img alt="jayLogo" src={jayLogo } width="50px" />
    <h1 className="text-4xl text-red-600">Blog<span className="text-white border-2-red">Vista</span></h1>
</div>
);


const Header = () => {
  return (
    <div className='sticky z-0 overflow-hidden top-0 flex justify-between items-center pt-5 pb-3 px-5 bg-black'>
      <Logo />
      <ul className='flex cursor-pointer gap-8 text-[18px] pr-10 text-white  '>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/WriteBlog">Write Blog</Link></li>
        <li><Link to="/AllBlogs">Collections</Link></li>
       
      </ul>
      </div>
      
    );
}

export default Header;