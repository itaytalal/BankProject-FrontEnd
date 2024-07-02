import React from "react";
import { FaBalanceScale, FaTools, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ClientInterface({toggleAction,toggleEdit,user}) {
  const navigate = useNavigate()
  const exit = ()=>{
    navigate("/")
  }
  const alerBalance = ()=>alert(`${user.username} your balance is: ${user.balance}`)
    return (
    <div className="flex flex-wrap gap-5 p-5 max-w-4xl justify-center items-center">
      <div onClick={alerBalance} className="flex-1 max-sm:basis-full max-sm:max-w-full flex-shrink-0 basis-[calc(50%-10px)] max-w-[calc(50%-10px)] p-5 h-36 max-sm:h-24 bg-blue-500 hover:bg-blue-700 shadow-md rounded text-white flex items-center justify-center text-2xl font-semibold">
        <FaBalanceScale className="mr-2" /> Balance
      </div>
      <div onClick={toggleAction} className="flex-1 max-sm:basis-full max-sm:max-w-full flex-shrink-0 basis-[calc(50%-10px)] max-w-[calc(50%-10px)] p-5 h-36 max-sm:h-24 bg-blue-500 hover:bg-blue-700 shadow-md rounded text-white flex items-center justify-center text-2xl font-semibold">
        <FaTools className="mr-2" /> Action
      </div>
      <div onClick={toggleEdit} className="flex-1 max-sm:basis-full max-sm:max-w-full flex-shrink-0 basis-[calc(50%-10px)] max-w-[calc(50%-10px)] p-5 h-36 max-sm:h-24 bg-blue-500 hover:bg-blue-700 shadow-md rounded text-white flex items-center justify-center text-2xl font-semibold">
        <FaEdit className="mr-2" /> Edit
      </div>
      <div onClick={exit} className="flex-1 max-sm:basis-full max-sm:max-w-full flex-shrink-0 basis-[calc(50%-10px)] max-w-[calc(50%-10px)] p-5 h-36 max-sm:h-24 bg-blue-500 hover:bg-blue-700 shadow-md rounded text-white flex items-center justify-center text-2xl font-semibold">
        <FaSignOutAlt className="mr-2" /> Exit
      </div>
    </div>
  );
}
