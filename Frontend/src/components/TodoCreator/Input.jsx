import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { todoListState } from '../../atoms/TodoState'
const Input = () => {
  const [title, setTitle] = useState('')
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const handleTaskAdd = async () => {
   const response= await axios.post(
      'https://todo-dp.onrender.com/tasks/createTask',
      {
        title,
      },
      config,
    )
    console.log(response.data);
    setTitle('')
    alert('Task added Successfully!')
  }

  return (
    <div className="flex  items-center  gap-x-4 w-ful ">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task"
        className="input input-bordered md:w-1/2 w-full "
      />
      <button
        onClick={handleTaskAdd}
        className="btn btn-success px-4 "
      >
        <AiOutlinePlus className="font-bold text-xl" />
      </button>
    </div>
  )
}

export default Input
