import { useState, useEffect } from "react";

const TodoItem = ({ todoName, todoDate, onDeleteItem, index }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => onDeleteItem(todoName), 300);
  };

  return (
    <div
      className={`flex flex-row justify-between items-center gap-2 p-2 backdrop-blur-lg bg-white/5 border border-white/30 rounded-lg shadow-md mb-3 transform transition-all duration-300 
                  ${
                    isMounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-3"
                  } 
                  ${
                    isRemoving
                      ? "opacity-0 scale-90 -translate-x-3"
                      : "scale-100"
                  } 
                  hover:scale-105 hover:shadow-lg`}
    >
      <div className="text-white font-semibold flex-1 break-all">
        {index + 1}. {todoName}
      </div>

      <div className="text-white/80 flex-shrink-0 mr-2">{todoDate}</div>

      <button
        className="bg-red-400 text-white rounded-lg px-4 py-2 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-red-600/80 active:scale-95 active:bg-red-600/80 backdrop-blur-md border border-white/30 flex-shrink-0"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
