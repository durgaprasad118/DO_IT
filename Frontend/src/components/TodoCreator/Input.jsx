import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import { ErrorToast, Sucesstoast } from '../../utils/toast'
import Spinner from '../../utils/Spinner'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/TodoSlice'
const Input = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const [title, setTitle] = useState('')
  const postTodo = async ({ title }) => {
    const { data } = await axios.post(
      'https://todo-dp.onrender.com/tasks/createTask',
      {
        title,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    return data.newTask
  }
  const todoMutation = useMutation({
    mutationFn: postTodo,
    onSuccess: (data) => {
      dispatch(add(data))
      queryClient.invalidateQueries(['asd'])
      Sucesstoast("Todo Added Successfully")
    },
    onError:(error)=>{
      ErrorToast(error)
    }
  })

  function handleCLick() {
    todoMutation.mutate({
      title: title,
    })
    setTitle('')
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
        onClick={handleCLick}
        disabled={todoMutation.isLoading}
        className="btn btn-primary px-4 "
      >
        {todoMutation.isLoading ? (
          <Spinner></Spinner>
        ) : (
          <AiOutlinePlus className="font-bold text-xl" />
        )}
      </button>
    </div>
  )
}

export default Input
