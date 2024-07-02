import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientItem({ user, deleteUser, toggleExpend }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteUser(user._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td className="py-2 px-4 border-b">{user.username}</td>
      <td className="py-2 px-4 border-b">{user.balance}</td>
      <td className="py-2 px-4 border-b">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded mr-2"
        >
          Delete
        </button>
        <button
          onClick={() => toggleExpend(user.username)}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded"
        >
          Expenses
        </button>
      </td>
    </tr>
  );
}
