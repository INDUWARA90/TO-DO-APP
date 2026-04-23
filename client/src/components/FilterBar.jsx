export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 rounded ${
          filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-3 py-1 rounded ${
          filter === "completed" ? "bg-green-600 text-white" : "bg-gray-200"
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-3 py-1 rounded ${
          filter === "pending" ? "bg-yellow-600 text-white" : "bg-gray-200"
        }`}
      >
        Not Completed
      </button>
    </div>
  );
}