import React from 'react'
import Pencil from "./../Assets/pencil-icon.png"

const WriteButton = () => {
    return (
            <button className="py-1 flex gap-3 justify-center items-center font-bold text-xl px-3 mt-8  rounded-xl bg-white">Write
            
            <img className='bg- w-[25px]' alt="pencilImg" src={Pencil}/>
            </button>
        
    );
};

export default WriteButton;
