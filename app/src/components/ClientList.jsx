import React, { useState } from "react";
import ClientItem from "./ClientItem";
import Expenses from "./Expenses";

export default function ClientList({ users, deleteUser,updateUserInfo }) {
  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (username) => {
    if (!isExpanded(username)) {
      setExpanded([...expanded, username]);
    } else {
      removeExpand(username);
    }
  };

  const isExpanded = (username) => {
    return expanded.includes(username);
  };

  const removeExpand = (username) => {
    setExpanded(expanded.filter((e) => e !== username));
  };
  const deleteExpence =async(user,expence)=>{
    const updatedExpence = user.expences.filter(e=>e!=expence)
    try {
        await updateUserInfo(user,{expences:updatedExpence})
    } catch (error) {
        console.log(error)
    }
  }

  const clients = users?.filter((user) => user.username !== "admin");

  return (
    <section className="flex flex-col items-center justify-center w-full p-5 bg-gray-100">
      <h2 className="text-xl text-center mb-4">Clients</h2>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Balance</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {clients?.map((user) => (
              <React.Fragment key={user._id}>
                <ClientItem
                  user={user}
                  deleteUser={deleteUser}
                  toggleExpend={toggleExpand}
                />
                {isExpanded(user.username) && (
                  <tr>
                    <Expenses user={user} deleteExpence={deleteExpence}/>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
