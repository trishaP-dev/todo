import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from "react-redux"

function App() {
  const todos = useSelector((state) => state.todo.todos)
  const incompleteCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="min-h-screen bg-white dark:bg-black
                text-black dark:text-white
                transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <ThemeToggle />
        <h1 className="text-4xl font-bold p-5">TODO</h1>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">{incompleteCount===0?"All tasks Completed 🎉":`${incompleteCount } task${incompleteCount  !== 1 ? "s" : ""} remaining`}</div>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
