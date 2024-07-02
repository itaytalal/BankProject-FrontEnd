import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import Signin from "./pages/Signin";
import axios from "axios";
import ClientPage from "./pages/ClientPage";
import AdminPage from "./pages/AdminPage";
import SignUp from "./pages/SignUp";

function App() {
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:3000/api";
   
  const [loaded, setLoaded] = useState(true);
  const [users,setUsers] = useState([])
  const fetchUsers = async()=>{
    try {
      const {data} = await axios.get("/users")
      console.log(data)
      setUsers(data || [])
    } catch (error) {
      console.log("failed fetching users " + error)
      alert("failed fetching users")
    }
    finally{(setLoaded(false))}
  }
  useEffect(()=>{/// fetch users
    const start = async()=>{await fetchUsers()}
    console.log(axios.defaults.baseURL)
    start();
  },[])
  const deleteUser=async(userId)=>{
    try {
      setLoaded(true)
      const remove = await axios.delete(`/users/${userId}`)
      await fetchUsers()
    } catch (error) {
      console.log("error trying to delete user: " + error)
    }
  }

  const addUser = async(user)=>{
    try {
      setLoaded(true)
      const response = await axios.post("/users",user)
      await fetchUsers()
    } catch (error) {
      console.log("failed to create user " + error)
    }
  }
  const addExpense = async(user,expense) =>{
    const updatedExpences = [...user.expences,expense]
    const updatedBalance = user.balance - expense.amount
    try {
      setLoaded(true)
      const response = await axios.put(`/users/${user._id}`,{expences:updatedExpences,balance:updatedBalance})
      await fetchUsers();   
    } catch (error) {
      console.log("error adding expense: " + error)
    }
  }
  const updateUserInfo = async(user,updaetes)=>{
    console.log(updaetes)
    //updates will be an object with password:newPass,balance:newBalance
    try {
      setLoaded(true)
      const response = await axios.put(`/users/${user._id}`,updaetes)
      await fetchUsers()
    } catch (error) {
      console.log("error updating user: " + error)
    }
  }

  if (loaded) return <div>loading...</div>
  return (
    <div>
      <Root />
      <Routes>
        <Route path="/" element={<Signin users={users}/>} />
        <Route path="/sign-up" element={<SignUp users={users} addUser={addUser}/>}/>
        <Route path="/admin" element={<AdminPage updateUserInfo={updateUserInfo} users={users} deleteUser={deleteUser}/>}/>
        {users.map((user) => (
          <Route key={user.username} path={`/client/${user.username}`} element={<ClientPage user={user} addExpense={addExpense} updateUserInfo={updateUserInfo} />} />
        ))}    
      </Routes>
    </div>
  );
}

export default App;
