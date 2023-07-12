import { useState,createContext } from "react";
import Button from "./WriteButton";
import BgImage from "../Assets/wallpaperflare-cropped.jpg"
import BlogCard from "./BlogCard";


const BlogCreationForm = ({blog onFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  const [weblink, setWeblink] = useState("");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setImage(files[0]);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "weblink") {
      setWeblink(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image || !username) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("username", username);
    
    onFormSubmit(formData);
    
    setTitle("");
    setDescription("");
    setImage(null);
    setUsername("");

    
  };
  
  return (
      <div className="flex ">
          <img alt="bgImage" className="w-full h-[85vh]" src={ BgImage} />
      <form className="absolute bg-[#0008]  left-[850px] top-[180px] p-5 rounded-3xl" onSubmit={handleSubmit}>
        <div className="">
      <p className="text-[30px] text-center pb-3 text-[#fff] font-montserrat">WRITE YOUR BLOG</p> 
          <label htmlFor="image" className="text-[#fff] text-[18px] mb-1">
            Background Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full text-[#fff] text-[18px]"
          />
        </div>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
            placeholder="Article"
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          />
        </div>
        <div>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
            placeholder="Article Description"
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          ></textarea>
        </div>
        <div>
          <label htmlFor="username" className="text-[#fff] text-[18px] mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Username"
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          />
        </div>
        <div>
          <label htmlFor="weblink" className="text-[#fff]  text-[18px] ">
            Links
          </label>
          <input
            type="text"
            id="weblink"
            name="weblink"
            value={weblink}
            onChange={handleInputChange}
            placeholder="Optional..."
            className="mt-2  px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          />
        </div>
        <div className="flex flex-row justify-center items-center mt-2">
          <Button text="Save"/>
        </div>
      </form>
    </div>
  );
};

export default BlogCreationForm;
