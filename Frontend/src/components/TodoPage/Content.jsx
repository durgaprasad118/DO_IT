import React from 'react'
import TodoItem from '../TodoTasks/TodoItem'

const Content = () => {
  return (
    <div className="bg-[#191E24] rounded-xl flex flex-col items-center gap-y-3 py-6 overflow-y-scroll h-[550px] px-3">
      <TodoItem></TodoItem>
    
    </div>
  )
}

export default Content
