import { useState } from "react";
import WriteButton from "./WriteButton";
import BgImage from "../assets/wallpaperflare.com_wallpaper.jpg"

const BlogForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    wallpaper: "",
    title: "",
    description: "",
    // links:"",
    userImage: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty) {
      alert("All fields are required");
      return;
    }
    console.log(formData);
    onFormSubmit(formData);
    setFormData({
      wallpaper: "",
      title: "",
      description: "",
      // links:"",
      userImage: "",
      username: "",
    });
  };

  return (
    <div className="flex flex-col gap-[10px] w-[88%] mx-auto h-[80vh] items-center">
       <p className="text-[30px] text-[#fff] font-montserrat">Write Your Blog</p>
      <form
        className="h-[full] w-[50vw] bg-transparent flex justify-center  flex-col shadow-xl rounded-xl p-[25px] border border-[#fff]/20"
        onSubmit={handleSubmit}
      >
      
        <div className="mb-2">
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Article Title"
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          />
        </div>
        <div className="mb-2">
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Article Description"
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          ></textarea>
            <div className="mb-2">
          <label htmlFor="wallpaper" className="text-[#fff] text-[18px] mb-1">
            Background Image
          </label>
          <input
            type="file"
            id="wallpaper"
            name="wallpaper"
            onChange={handleInputChange}
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full text-[#fff] text-[18px]"
          />
        </div>
        </div>

        <div className="mb-2">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="User Name"
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] placeholder-[#fff] text-[18px]"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="userImage" className="text-[#fff] text-[18px] mb-1">
            User Image
          </label>
          <input
            type="file"
            id="userImage"
            name="userImage"
            onChange={handleInputChange}
            className="mt-1 px-5 py-2 border border-gray-300 rounded-[30px] w-full bg-transparent outline-none text-[#fff] text-[18px]"
          />
        </div>

        
        <div className="flex flex-row justify-center items-center mt-2">
          <WriteButton text="Save Blog" />
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
