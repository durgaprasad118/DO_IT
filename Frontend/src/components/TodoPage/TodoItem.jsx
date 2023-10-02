import React, { useState } from 'react'
import { MdDelete, MdEditCalendar } from 'react-icons/md'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../atoms/TodoState'
const TodoItem = ({ title, completed, _id }) => {
  const [tick,setTick]= useState(false)
  const [todos, setTodos] = useRecoilState(todoListState);
  const index = todos.findIndex(item=> item._id === _id);
  const deleteTask = async () => {
    const isConfirmed = window.confirm('Are you sure you want to proceed?')
    if (isConfirmed) {
      const axiosConfig = {
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
      const response = axios.delete(
        'https://todo-dp.onrender.com/tasks/deleteTask/' + _id,
        axiosConfig,
      )
      setTodos(todos.filter((x) => x._id !== _id))
    }
  }
  const updateTask= async()=>{
     const axiosConfig = {
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }

      const response = axios.put("",axiosConfig)
      
  }
  return (
    <div className="grid grid-cols-6  h-auto md:w-3/4 w-full  grid-rows-2 md:grid-rows-1  card bg-[#242933] rounded-box place-items-center border-opacity-50 border-2 border-[#7B7B7B] md:px-2 py-2">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setTick(e.target.checked)}
        className="checkbox text-left"
      />
      <h1 className="text-lg col-start-2 md:col-end-5 col-end-7">{title}</h1>
      <div className="flex gap-x-2 col-start-1 col-end-7 md:col-start-5 md:colend">
        <button className="btn btn-success btn-sm md:btn-md ">
          <MdEditCalendar className="font-bold text-xl" />
        </button>
        <button
          className="btn btn-error btn-sm md:btn-md"
          onClick={deleteTask}
        >
          <MdDelete className="font-bold text-xl" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
