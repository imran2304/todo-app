import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState, useEffect } from "react";

function App() {
  // Load todos from localStorage
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todoItems, setTodoItems] = useState(storedTodos);

  // Save todos to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

 
  const handleNewItems = (itemName, itemDueDate) => {
    const newItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItems);
  };

  // Delete a 
  const handleDeleteItems = (itemName) => {
    const newItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newItems);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-6">
      <div className="backdrop-blur-lg bg-white/20 rounded-2xl border border-white/30 shadow-2xl p-8 w-full max-w-2xl">
        <AppName />
        <AddTodo onNewItem={handleNewItems} />
        <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItems} />
      </div>
    </div>
  );
}

export default App;
