import React from 'react'
import TodoCard from './TodoCard'
import Input from './Input.jsx'
const TodoCreator = () => {
  return (
    <div className=" mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1  items-center  md:px-24 px-3  gap-3 mt-4">
        <div className="col-span-2">
          <TodoCard></TodoCard>
        </div>
        <Input></Input>
      </div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider h-1"></div>
      </div>
    </div>
  )
}
export default TodoCreator
