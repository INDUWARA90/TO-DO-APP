import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FilterBar from "./components/FilterBar";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
} from "./api/api";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [lastDeleted, setLastDeleted] = useState(null);

  // LOAD TODOS
  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch {
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // CREATE TODO (Optimistic)
  const handleCreate = async (formData) => {
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    const tempId = Date.now();
    const tempTodo = { ...formData, _id: tempId, done: false };

    setTodos((prev) => [tempTodo, ...prev]);

    try {
      const res = await createTodo(formData);

      setTodos((prev) =>
        prev.map((t) =>
          t._id === tempId ? res.data : t
        )
      );

      toast.success("Task added");
    } catch {
      toast.error("Save failed");
      fetchTodos();
    }
  };

  // TOGGLE
  const handleToggle = async (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t._id === id ? { ...t, done: !t.done } : t
      )
    );

    try {
      await toggleTodo(id);
    } catch {
      toast.error("Update failed");
      fetchTodos();
    }
  };

  // DELETE + UNDO
  const handleDelete = async (id) => {
    const item = todos.find((t) => t._id === id);

    setLastDeleted(item);
    setTodos((prev) => prev.filter((t) => t._id !== id));

    toast.info("Task deleted (click to undo)", {
      onClick: () => undoDelete(item),
    });

    try {
      await deleteTodo(id);
    } catch {
      setTodos((prev) => [item, ...prev]);
      toast.error("Delete failed");
    }
  };

  const undoDelete = (item) => {
    if (!item) return;
    setTodos((prev) => [item, ...prev]);
    setLastDeleted(null);
    toast.success("Restored");
  };

  // EDIT
  const handleEdit = async (id, data) => {
    try {
      await updateTodo(id, data);
      fetchTodos();
      toast.success("Task updated");
    } catch {
      toast.error("Edit failed");
    }
  };

  // FILTER + SEARCH
  const filteredTodos = todos
    .filter((t) => {
      if (filter === "completed") return t.done;
      if (filter === "pending") return !t.done;
      return true;
    })
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl ">

        {/* HEADER */}
        <div className="p-8 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl">
          <h1 className="text-3xl font-bold text-white">
            My TODOS
          </h1>
          <p className="text-blue-100 text-sm">
            Stay organized and productive
          </p>
        </div>

        <div className="p-8">

          {/* FORM COMPONENT */}
          <TodoForm onCreate={handleCreate} />

          {/* SEARCH */}
          <input
            className="w-full mb-4 px-4 py-2 bg-gray-100 rounded-full"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* FILTER */}
          <FilterBar filter={filter} setFilter={setFilter} />

          {/* LIST */}
          <div className="space-y-4 mt-6">
            {filteredTodos.length === 0 ? (
              <p className="text-center text-gray-400">
                No tasks found
              </p>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}