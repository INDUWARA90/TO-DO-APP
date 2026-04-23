import { useEffect, useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ 
    title: todo.title, 
    description: todo.description 
  });

  useEffect(() => {
    setEditData({ title: todo.title, description: todo.description });
  }, [todo]);

  const saveEdit = () => {
    if (!editData.title.trim()) return;
    onEdit(todo._id, editData);
    setIsEditing(false);
  };

  return (
    <div 
      className={`group relative flex items-center justify-between p-4 bg-white rounded-xl border-l-4 transition-all duration-200 shadow-sm hover:shadow-md
        ${todo.done ? "border-green-400 bg-gray-50" : "border-indigo-500 bg-white"}`}
    >
      <div className="flex items-start gap-4 flex-1">
        {/* Status Toggle (Checkbox Style) */}
        <button
          onClick={() => onToggle(todo._id)}
          className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
            ${todo.done ? "bg-green-500 border-green-500" : "border-gray-300 hover:border-indigo-500"}`}
        >
          {todo.done && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-2 pr-4">
              <input
                className="w-full text-lg font-semibold bg-transparent border-b border-indigo-300 outline-none focus:border-indigo-600 transition-colors"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                autoFocus
              />
              <input
                className="w-full text-sm text-gray-600 bg-transparent border-b border-gray-200 outline-none focus:border-indigo-400 transition-colors"
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
              />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => !todo.done && setIsEditing(true)}>
              <h3 className={`text-lg font-semibold transition-all ${todo.done ? "text-gray-400 line-through" : "text-gray-800"}`}>
                {todo.title}
              </h3>
              {todo.description && (
                <p className={`text-sm transition-all ${todo.done ? "text-gray-300" : "text-gray-500"}`}>
                  {todo.description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1 ml-4">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            title="Save changes"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
              title="Edit task"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(todo._id)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
              title="Delete task"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}