import React from 'react'
import TodoCreator from '../TodoCreator/TodoCreator'
import TodoTab from './TodoTab'

const TodoPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)]  flex flex-col relative ">
      <div className="">
        <TodoCreator></TodoCreator>
      </div>
      <div className="flex justify-center flex-col items-center">
        <TodoTab></TodoTab>
      </div>
    </div>
  )
}

export default TodoPage
