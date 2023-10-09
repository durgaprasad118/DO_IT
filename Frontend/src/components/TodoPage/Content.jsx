import React from 'react'
import TodoItem from './TodoItem'
import Notdo from './Notdo'
import axios from 'axios'
import { addTodo } from '../../redux/TodoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

const Content = ({ active }) => {
  const dispatch = useDispatch()
  const getTodos = async () => {
    const { data } = await axios.get(
      'https://todo-dp.onrender.com/tasks/getTasks',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    )
    return data.tasks
  }
  const query = useQuery({
    queryFn: getTodos,
    queryKey: ['asd'],
    onSuccess: (data) => {
      dispatch(addTodo(data))
    },
  })
  const values = useSelector((store) => store.TodoList.todos)
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
