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
        {/* <h1 className="text-4xl font-bold p-5">TOD</h1> */}
        <div className="pt-17 text-2xl font-bold text-indigo-500">{incompleteCount } task{incompleteCount  !== 1 ? "s" : ""} remaining</div>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
