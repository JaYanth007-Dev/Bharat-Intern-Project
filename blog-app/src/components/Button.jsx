const Button = ({ text }) => {
  return (
    <button className="outline-none text-white bg-black text-[18px] font-semibold rounded-lg px-4 py-2 cursor-pointer  font-montserrat border border-[#fff]">
      {text}
    </button>
  );
};

export default Button;
