import React from 'react'
import TodoItem from './TodoItem'
import Notdo from './Notdo'
import axios from 'axios'

import { useQuery } from '@tanstack/react-query'

const Content = ({ active }) => {
  const fetchData = async () => {
    const { data } = await axios.get(
      'https://todo-dp.onrender.com/tasks/getTasks',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    return data
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: fetchData,
    queryKey: ['todos'],
  })
  let { tasks } = data || []
  if (isLoading) {
    tasks = []
  }

  const values = [...tasks]
  const toDo = values.filter((x) => x.completed == false)
  const Done = values.filter((x) => x.completed == true)
  const finalArray = active == 'todo' ? toDo : Done
  let ans
  if (finalArray.length == 0) {
    ans = <Notdo></Notdo>
  } else {
    ans = finalArray.map((todo) => {
      return (
        <TodoItem
          key={todo._id}
          {...todo}
        ></TodoItem>
      )
    })
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-[#191E24] rounded-xl md:w-3/4 w-full flex flex-col items-center gap-y-3 py-6 overflow-y-scroll h-[550px] px-3">
        {ans}
      </div>
    </div>
  )
}

export default Content
