'use client';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, !todo.completed)}
          className="mr-2"
        />
        <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}