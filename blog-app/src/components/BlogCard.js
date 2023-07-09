import React from 'react';
import BlogCreationForm from './BlogCreationForm';

const BlogCard = ({ device, username, articleTitle, description, websiteLink }) => {
  return (
      <div className='bg-[#fefefe] flex flex-col justify-center items-center w-[200px] h-[300px] border-2 border-white bg-[#000000b6] text-white '>
            <h3>{articleTitle}</h3>
            <p>By: {username}</p>
            <p>Device: {device}</p>
            <p>Description: {description}</p>
            <a href={websiteLink}>Read More</a>
      </div>
  );
};

export default BlogCard;
