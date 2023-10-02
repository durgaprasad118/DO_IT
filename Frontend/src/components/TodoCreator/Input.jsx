import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { todoListState } from '../../atoms/TodoState'
import { ErrorToast, Sucesstoast } from './toast'
import Spinner from '../../utils/Spinner'
const Input = () => {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useRecoilState(todoListState)
  let [r, setR] = useState(false)
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  let message
  const handleTaskAdd = async () => {
    setR(true)
    try {
      const response = await axios.post(
        'https://todo-dp.onrender.com/tasks/createTask',
        {
          title,
        },
        config,
      )
      const newTask = response.data.newTask
      message = response.data.message

      setTodos([...todos, newTask])
      setTitle('')
    } catch (er) {
      console.log(er)
      ErrorToast(er)
    } finally {
      Sucesstoast(message)
      setR(false)
    }
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
        disabled={r}
        className="btn btn-primary px-4 "
      >
        {r ? (
          <Spinner></Spinner>
        ) : (
          <AiOutlinePlus className="font-bold text-xl" />
        )}
      </button>
    </div>
  )
}

export default Input
