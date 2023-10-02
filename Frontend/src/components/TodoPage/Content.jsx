import React from 'react'
import TodoItem from './TodoItem'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../atoms/TodoState'
const Content = () => {
  const values = useRecoilValue(todoListState)
  return (
    <div className="bg-[#191E24] rounded-xl md:w-3/4 w-full flex flex-col items-center gap-y-3 py-6 overflow-y-scroll h-[550px] px-3">
      {values.map((todo) => {
        return (
          <TodoItem
            key={todo._id}
            {...todo}
          ></TodoItem>
        )
      })}
    </div>
  )
}

export default Content
