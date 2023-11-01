import React, { useState, useEffect } from 'react'
import { MdDelete, MdEditCalendar } from 'react-icons/md'
import axios from 'axios'
import Modal from '../TodoCreator/Modal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Sucesstoast } from '../../utils/toast'
import DeleteModal from '../TodoCreator/DeleteModal'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../../redux/TodoSlice'
const TodoItem = ({ title, completed, _id }) => {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const [tick, setTick] = useState(completed)
  const [TITLE, setTitle] = useState(title)
  const values = useSelector((store) => store.TodoList.todos)
  const index = values.findIndex((item) => item._id === _id)
  const deleteTodo = async () => {
    const { data } = await axios.delete(
      'https://todo-dp.onrender.com/tasks/deleteTask/' + _id,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    return data
  }
  1
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (data) => {
      dispatch(removeTodo(_id))
      queryClient.invalidateQueries(['asd'])
      Sucesstoast(data.message)
    },
  })
  function deleteTask() {
    deleteMutation.mutate()
  }

  const updatu = async ({ title, completed }) => {
    const { data } = await axios.put(
      'https://todo-dp.onrender.com/tasks/updateTask/' + _id,
      {
        title: title,
        completed: completed,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    setTick(completed)
    setTitle(title)
    return data
  }

  const updateMutation = useMutation({
    mutationFn: updatu,
    onSuccess: (data) => {
      Sucesstoast(`${data.message}`)
      dispatch(updateTodo(data.updatedTask))
    },
  })
  function updateTASK(x, y) {
    updateMutation.mutate({
      title: x,
      completed: y,
    })
  }
  return (
    <div className="grid text-white grid-cols-6  h-auto md:w-3/4 w-full  grid-rows-2 md:grid-rows-1  card  rounded-box place-items-center border-opacity-50 border-2 border-[#7B7B7B] md:px-2 py-2 ">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          const answer = e.target.checked
          updateTASK(TITLE, answer)
          setTick(answer)
        }}
        className="checkbox text-left border border-white"
      />
      <h1 className="text-lg col-start-2 md:col-end-5 col-end-7">{title}</h1>
      <div className="flex gap-x-2 col-start-1 col-end-7 md:col-start-5 md:col-end-7 ">
        <div>
          <label
            className="btn btn-success btn-sm md:btn-md "
            htmlFor={_id}
          >
            <MdEditCalendar className="font-bold text-xl" />
          </label>
          <input
            type="checkbox"
            id={_id}
            className="modal-toggle hidden"
          />
          <Modal
            title={TITLE}
            updateTask={updateTASK}
            completed={tick}
            id={_id}
          ></Modal>
        </div>
        <div>
          <label
            className="btn btn-error btn-sm md:btn-md"
            htmlFor={`del${_id}`}
          >
            <MdDelete className="font-bold text-xl" />
          </label>
          <input
            type="checkbox"
            id={`del${_id}`}
            className="modal-toggle hidden"
          />
          <DeleteModal deleteTask={deleteTask} id={`del${_id}`}></DeleteModal>
          
        </div>
      </div>
    </div>
  )
}

export default TodoItem
