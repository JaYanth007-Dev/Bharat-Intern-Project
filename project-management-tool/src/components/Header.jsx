import Logo from "../assets//ss.png"

const Header = ({ handleAdd }) => {
  return (
    <div
      className="bg-[#000] border-2 border-[#fff] w-[90%] mx-auto h-[100px] shadow mb-[10px]  rounded-md "
      data-aos="fade-down"
      data-aos-duration="1100"
    >
      <p className="text-[#fff] text-[35px] font-semibold flex justify-center items-center pt-[20px] font-montserrat">
      <img alt="logo" src={ Logo} width="60px" className="mr-5" />
        Task Manager
      </p>
    </div>
  );
};

export default Header;
