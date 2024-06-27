import TodoList from './components/TodoList';

export default function Home() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoList />
    </div>
  );
}