import React from 'react';


const Card = ({ img, username, articleTitle, description, websiteLink }) => {
  return (
      <div className='bg-[#fefefe] flex flex-col justify-center items-center w-[250px] h-[350px] border-2 border-white bg-[#000000c8] text-white '>
            <img alt="selectedImage" src={img}/>
            <h1> Article Title: {articleTitle}</h1>
            <p>Description: {description}</p>
            <p>By: {username}</p>
            <a href={websiteLink}>Read More</a>
      </div>
  );

 
};

export default Card;
