import React, { useState } from "react";
import ClientInterface from "../components/ClientInterface";
import ActionAdder from "../components/ActionAdder";
import DetailForm from "../components/DetailForm";
import { validatePassword, validateBalance } from '../scripts/validatior.js';

export default function ClientPage({ user, addExpense, updateUserInfo }) {
  const [action, setAction] = useState(false);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState("");

  const toggleAction = () => {
    setEdit(false);
    setAction(!action);
  };

  const toggleEdit = () => {
    setAction(false);
    setEdit(!edit);
  };

  const handleSubmit = async (e, Data) => {
    e.preventDefault();
    setError("")

    let updatedPassword = null;
    if (Data.password !== user.password) {
      const passwordValid = validatePassword(Data.password);
      if (passwordValid) return setError(passwordValid);
      updatedPassword = Data.password;
    }

    let updatedBalance = null;
    if (Data.balance !== user.balance) {
      const balanceValid = validateBalance(Data.balance);
      if (balanceValid) return setError(balanceValid);
      updatedBalance = Data.balance;
    }

    let updates = {};
    if (updatedPassword) updates.password = updatedPassword;
    if (updatedBalance) updates.balance = updatedBalance;

    if (Object.keys(updates).length === 0) return setError("User data unchanged");

    try {
      await updateUserInfo(user, updates);
      setEdit(false);
    } catch (error) {
      console.log(error);
      setError("Failed to update user information");
    }
  };

  return (
    <div className="flex flex-col items-center mt-4 text-center">
      <h1 className="text-2xl">Welcome {user.username}</h1>
      <br /><br />
      <ClientInterface user={user} toggleAction={toggleAction} toggleEdit={toggleEdit} />
      <br />
      {action && <ActionAdder user={user} addExpense={addExpense} />}
      {edit && <DetailForm data={user} handleSubmit={handleSubmit} error={error} />}
    </div>
  );
}
