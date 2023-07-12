const SelectUser = ({ selectedUser, setSelectedUser, users, handleAdd }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-[#000] text-[#fff] rounded-md font-poppins">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="py-[15px] px-[20px] outline-none rounded-md text-[16px] font-bold bg-[#11caea] text-[#000] border-2 border-[#000]"
        >
          <option value="" className="bg-[#000]">
            SELECT USER
          </option>
          {users.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      <button
        className="py-[15px] px-[20px] text-[16px] font-bold rounded-md bg-[#1cbc17] text-[#fff] border border-[#fff]"
        onClick={handleAdd}
      >
        ADD TASK
      </button>
    </div>
  );
};

export default SelectUser;
