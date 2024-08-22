import React from 'react';

interface TodoItemProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ userId, id, title, completed }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-bold mb-2">Todo Item #{id}</h3>
      <p className="text-gray-700 mb-2"><strong>User ID:</strong> {userId}</p>
      <p className="text-gray-900 mb-2"><strong>Title:</strong> {title}</p>
      <p className="text-gray-600"><strong>Status:</strong> {completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

export default TodoItem;
