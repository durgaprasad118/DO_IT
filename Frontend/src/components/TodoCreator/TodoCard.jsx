import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../atoms/TodoState'
import { currentDate } from '../../utils/usegetDate'
const TodoCard = () => {
  const todos = useRecoilValue(todoListState)
  return (
    <div className=" md:w-2/3 bg-[#242933] border-2 border-[#7B7B7B] rounded-xl  shadow-2xl flex flex-col  md:flex-row justify-between px-10 md:py-8 gap-2 py-3 items-center">
      <div className="flex flex-col">
        <h1>Todos Done</h1>
        <h2 className='font-bold md:text-xl'> {currentDate}</h2>
      </div>

      <div className="stats stats-horizontal  shadow">
        <div className="stat">
          <div className="stat-title">Completed</div>
          <div className="stat-value">{todos.length}</div>
          <div className="stat-desc hidden md:block">{currentDate}</div>
        </div>

        <div className="stat">
          <div className="stat-title"> Total Tasks</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc hidden md:block">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  )
}

export default TodoCard
