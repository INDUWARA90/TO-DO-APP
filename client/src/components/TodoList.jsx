import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  // Enhanced Empty State with a bit of personality
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-gray-100 rounded-2xl">
        <div className="bg-gray-50 p-4 rounded-full mb-3">
          <svg 
            className="w-8 h-8 text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Path d=M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p className="text-gray-400 font-medium">All caught up!</p>
        <p className="text-gray-300 text-sm">Add a task above to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 transition-all duration-300 ease-in-out">
      {todos.map((todo) => (
        <div 
          key={todo._id} 
          className="transform transition-all active:scale-[0.98]"
        >
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      ))}
    </div>
  );
}