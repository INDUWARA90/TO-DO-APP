import { useState } from "react";

export default function TodoForm({ onCreate }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    onCreate(formData);
    setFormData({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-8">
      <input
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
        placeholder="Title..."
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
      />

      <textarea
        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        placeholder="Description..."
        rows="2"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}