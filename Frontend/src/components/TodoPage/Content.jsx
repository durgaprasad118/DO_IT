import React from 'react'
import TodoItem from './TodoItem'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../atoms/TodoState'
import Notdo from './Notdo'

const Content = ({ active }) => {
  const values = useRecoilValue(todoListState)
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
