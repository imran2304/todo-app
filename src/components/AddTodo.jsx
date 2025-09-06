import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleOnNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleOnDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-2">
      <div className="col-span-1 md:col-span-6 p-4 rounded">
        <input
          type="text"
          placeholder="Enter To Do Here"
          className="w-full border border-gray-400 rounded p-2 bg-white/20 backdrop-blur-sm placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-50"
          onChange={handleOnNameChange}
          value={todoName}
        />
      </div>

      <div className="col-span-1 md:col-span-4 p-4 rounded">
        <input
          type="date"
          className="w-full border border-gray-400 rounded p-2 bg-white/20 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-50"
          onChange={handleOnDateChange}
          value={dueDate}
        />
      </div>

      <div className="col-span-1 md:col-span-2 p-4 rounded">
        <button
          type="button"
          className="w-full bg-green-400 text-white font-semibold rounded-lg p-2 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-600/80  active:bg-green-600/80 active:scale-95"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
