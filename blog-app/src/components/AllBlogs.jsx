import  { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Button from "./Button";
import BlankImage from "../assets/blank-removebg-preview.png"

const AllBlogs = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-[88%] mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-4xl font-montserrat font-semibold text-[#fff] text-center">
            All Blogs
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Search blogs..."
          />
        </div>
      </div>
      {filteredBlogs.length === 0 ? (
        <>
        <p className="text-2xl font-montserrat font-semibold text-[#fff] text-center mt-5 h-[50vh] flex flex-col justify-center">
          <img alt="noblogLogo" src={ BlankImage} width='500px' className="ml-[350px]" />
          No blogs available
        </p>
        </>
      ) : (
        <div className="overflow-auto scroll h-[65vh]">
          <div className="flex flex-wrap gap-[20px] py-[30px] justify-center">
            {filteredBlogs.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="flex justify-center py-[10px]">
            <Link to="/writeblog">
              <Button text="Write Blog"/>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
