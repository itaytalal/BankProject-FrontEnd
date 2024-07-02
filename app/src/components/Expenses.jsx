import React from "react";
import { MdDelete } from "react-icons/md";

export default function Expenses({ user,deleteExpence }) {
  const {expences} = user
  console.log(expences)
  return (
    <td colSpan="3" className="p-4 bg-gray-100 rounded shadow-md">
      <ul>
        {expences?.map((expense, i) => (
          <li key={i} className="py-1 gap-3 flex justify-center">
            <div className="py-2">{expense.company} {expense.amount}</div> 
            <button onClick={()=>deleteExpence(user,expense)} className="text-red-500 px-2 hover:text-red-700"><MdDelete /></button>
          </li>
        ))}
        {expences.length === 0 && <div>no expences</div>}
      </ul>
    </td>
  );
}
