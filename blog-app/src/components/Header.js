import React from "react";
 
const Logo = () => (
      <div  className="font-['Montserrat'] flex items-center"><h1 className="text-4xl text-red-600">Blog<span className="text-white border-2-red">Vista</span></h1>
</div>
);


const Header = () => {
    return (<div className='flex justify-between items-center pt-7 px-5 bg-black'>
      <Logo />
      <ul className='flex cursor-pointer gap-8 text-[18px] pr-10 text-white  '>
        <li>Home</li>
        <li>Write Blog</li>
        <li>Collections</li>
        <li>Fav Images</li>
      </ul>
      

    </div>
    );
}

export default Header;