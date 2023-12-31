import { useState } from "react";
import Card from "./Card";
import Buttons from "./Buttons";
import { toast } from "react-toastify";

const AddInputs = ({ add, tasks, setTasks, selectedUser }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please enter a task and description.");
      return;
    }
    if (!selectedUser) {
      alert("Please Select the user from droplist");
      return;
    }
    toast.success("Task Added successfully!");
    const id = tasks.length === 0 ? 1 : tasks.length + 1;
    const details = {
      id: id,
      username: selectedUser,
      task: title,
      desc: description,
      date: new Date().toLocaleDateString(),
      complete: false,
    };
    setTasks([...tasks, details]);

    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => (t.id === id ? false : true)));
    toast.warn("Task Deleted successfully!");
    
  };

  const handleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: true } : t)));
  };

  const handleEdit = (id, updatedTitle, updatedDescription) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, task: updatedTitle, desc: updatedDescription } : t
      )
    );
  };

  return (
    <div>
      <div className="flex flex-col space-y-6 px-10 pt-16">
        {add === true ? (
          <>
            <input
              type="text"
              placeholder="Enter a Task..."
              value={title}
              className="w-[full] px-[15px] py-[10px] text-[20px] bg-[#000] border-2 border-[#fff] outline-none rounded-md text-[#ccc] shadow1 whitespace-normal"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description..."
              value={description}
              className="w-[full] px-[15px] py-[10px] text-[20px] bg-[#000] border-2 border-[#fff] outline-none rounded-md text-[#ccc] shadow1 whitespace-normal"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Buttons
              handleSave={handleSave}
              setTitle={setTitle}
              title={title}
              description={description}
              setDescription={setDescription}
            />
          </>
        ) : null}
      </div>
      {tasks.length === 0 ? (
        <div className="w-full h-[280px] px-[10px] rounded-md flex flex-col justify-center items-center">
          <p className="text-[30px] font-medium text-[#fff] font-montserrat">
            No tasks yet . Add the Task
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-auto px-[35px] py-10">
          {tasks.map((t) => (
            <Card
              username={t.username}
              title={t.task}
              description={t.desc}
              key={t.id}
              date={t.date}
              handleDelete={() => handleDelete(t.id)}
              handleComplete={() => handleComplete(t.id)}
              handleEdit={(updatedTitle, updatedDescription) =>
                handleEdit(t.id, updatedTitle, updatedDescription)
              }
              complete={t.complete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddInputs;
