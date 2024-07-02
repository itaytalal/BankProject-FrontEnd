import React, { useState } from 'react'

export default function ActionAdder({addExpense,user}) {
    const [expense,setExpense] = useState({company:"",amount:0})
    const handleChange =(e)=>{
        setExpense({...expense, [e.target.name] : e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if (!expense.company || expense.amount<=0)
            return alert("expense not good")
        try {
            await addExpense(user,expense)
            console.log("spent")
        } catch (error) {
            console.log("error adding expense: " + error)
        }
    }
    return (
    <div className='flex-1 flex-col items-center mt-2'>
        <h1 className='text-3xl text-center'>Enter Action</h1>
        <form className='flex-1 flex-col mt-2' onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="company">Expense Name: </label>
            <input
              type="text"
              id="company"
              name="company"
              value={expense.company}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-xl mt-4 shadow-lg"
          >
            Enter
          </button>
        </form>
    </div>
  )
}
