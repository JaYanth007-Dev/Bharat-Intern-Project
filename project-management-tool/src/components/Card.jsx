import { useState} from "react";
import { toast } from "react-toastify";

const Card = ({
  username,
  title,
  description,
  date,
  handleDelete,
  handleComplete,
  handleEdit,
  complete,
  taskId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [status, setStatus] = useState(complete ? "Completed" : "Pending");


  const handleEditSave = () => {
    if (!editedTitle || !editedDescription) {
      toast.error("Please enter a task and description.");
      return;
    }
    handleEdit(editedTitle, editedDescription);
    setIsEditing(false);
    toast.success("Task updated successfully!");
  };

  const toggleComplete = () => {
    if (status === "Pending") {
      setStatus("Completed");
      handleComplete();
      toast.success("Task completed successfully!");
    } else {
      setStatus("Pending");
      handleComplete();
      toast.warn("Task marked as pending!");
    }
  };

  return (
    <div className="w-full px-[30px] py-[20px] overflow-y-auto flex flex-col justify-center bg-[#2f2d7283] rounded-[20px] shadow-xl border border-[#000]/50 gap-[10px]">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-bold text-[#fff] font-montserrat">
            {username}
          </p>
          <p className="text-[20px] font-medium text-[#fff] font-poppins">
            {date}
          </p>
        </div>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-[20px] font-medium text-[#fff] font-poppins bg-[#000] border-2 border-[#c89666] outline-none rounded-md p-2"
          />
        ) : (
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold text-[#fff] font-montserrat">
              Title :
            </p>
            <p className="text-[20px] font-medium text-[#fff]/80 font-poppins pl-[30px]">
              {title}
            </p>
          </div>
        )}
        {isEditing ? (
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="text-[20px] font-medium text-[#fff] font-poppins bg-[#000] border-2 border-[#c89666] outline-none rounded-md p-2"
          />
        ) : (
          <div>
            <p className="text-[20px] font-semibold text-[#fff] font-montserrat">
              Description :
            </p>
            <p className="text-[20px] font-medium text-[#fff]/80 font-poppins pl-[30px]">
              {description}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-[10px] justify-center mt-[20px]">
        {isEditing ? (
          <button
            className="py-[10px] px-[20px] text-[16px] font-medium rounded-md bg-[#f1af71] shadow-current font-montserrat"
            onClick={handleEditSave}
          >
            Save
          </button>
        ) : (
          <div className="flex gap-5 flex-row-reverse">
            <button
              className={`py-[10px] px-[20px] text-[16px] font-medium rounded-md shadow-current font-montserrat ${
                status === "Completed" ? "border-2 border-[#fff] bg-[#53e215]" : "border-2 border-[#fff] bg-[#f1af71]"
              }`}
              onClick={toggleComplete}
            >
              {status}
            </button>
            <button
              className="py-[10px] px-[20px] text-[16px] font-medium rounded-md border-2 border-[#fff] bg-[#f80b0b] text-[#fff] shadow-current font-montserrat"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="py-[10px] px-[20px] text-[16px] font-medium rounded-md border-2 border-[#fff] bg-[#eb278d] text-[#fff] shadow-current font-montserrat"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
