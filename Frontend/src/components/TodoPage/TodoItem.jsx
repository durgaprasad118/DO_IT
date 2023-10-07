import React, { useState, useEffect } from 'react'
import { MdDelete, MdEditCalendar } from 'react-icons/md'
import axios from 'axios'
import Modal from '../TodoCreator/Modal'

import { Sucesstoast } from '../../utils/toast'
import DeleteModal from '../TodoCreator/DeleteModal'
const TodoItem = ({ title, completed, _id }) => {
  const [tick, setTick] = useState(completed)
  const [todos, setTodos] =[] 
  const index = todos.findIndex((item) => item._id === _id)
  const deleteTask = async () => {
    const axiosConfig = {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
    const response = await axios.delete(
      'https://todo-dp.onrender.com/tasks/deleteTask/' + _id,
      axiosConfig,
    )
    Sucesstoast(response.data.message)
    setTodos(todos.filter((x) => x._id !== _id))
  }
  const updateTask = async (title, completed) => {
    const axiosConfig = {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
    const response = await axios.put(
      'https://todo-dp.onrender.com/tasks/updateTask/' + _id,
      {
        title: title,
        completed: completed,
      },
      axiosConfig,
    )
    Sucesstoast('Todo Updated Successfully!')

    const udpatedValue = response.data.updatedTask
    const updatedArray = [...todos]
    updatedArray[index] = udpatedValue
    setTodos(updatedArray)
  }

  return (
    <div className="grid grid-cols-6  h-auto md:w-3/4 w-full  grid-rows-2 md:grid-rows-1  card bg-[#242933] rounded-box place-items-center border-opacity-50 border-2 border-[#7B7B7B] md:px-2 py-2 ">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          const answer = e.target.checked
          setTick(answer)
          // if we just pass the updateTask without the value it renders the prvious value only
          updateTask(title, answer)
        }}
        className="checkbox text-left"
      />
      <h1 className="text-lg col-start-2 md:col-end-5 col-end-7">{title}</h1>
      <div className="flex gap-x-2 col-start-1 col-end-7 md:col-start-5 md:col-end-7 ">
        <div>
          <label
            className="btn btn-success btn-sm md:btn-md "
            htmlFor="my-modal-6"
          >
            <MdEditCalendar className="font-bold text-xl" />
          </label>
          <input
            type="checkbox"
            id="my-modal-6"
            className="modal-toggle hidden"
          />
          <Modal
            title={title}
            updateTask={updateTask}
            completed={completed}
          ></Modal>
        </div>
        <div>
          <label
            className="btn btn-error btn-sm md:btn-md"
            htmlFor="my-modal-5"
          >
            <MdDelete className="font-bold text-xl" />
          </label>
          <input
            type="checkbox"
            id="my-modal-5"
            className="modal-toggle hidden"
          />
          <DeleteModal deleteTask={deleteTask}></DeleteModal>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
