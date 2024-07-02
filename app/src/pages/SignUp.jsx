import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateUsername, validatePassword, validateBalance } from '../scripts/validatior.js'
import DetailForm from "../components/DetailForm.jsx";

export default function SignUp({ users, addUser }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validatie = (Data) => { //!returns errorMessage if there is an error
    const balanceValid = validateBalance(Data.balance)
    if (balanceValid) return balanceValid
    const usernameValid = validateUsername(Data.username,users)
    if (usernameValid) return usernameValid
    const passwordValid = validatePassword(Data.password)
    if (passwordValid) return passwordValid
    return "";
  };

  const handleSubmit = async (e,Data) => {
    e.preventDefault();
    const errorMessage = validatie(Data)
    if (errorMessage) return setError(errorMessage)
    try {
      await addUser(Data)
      alert(Data.username + " added succesfuly")
      navigate("/") 
    } catch (error) {
        alert("error saving user: " + error)
    }
  };
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
   <DetailForm handleSubmit={handleSubmit} error={error}/></section>
  );
}
