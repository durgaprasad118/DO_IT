import React from 'react'
import { currentDate } from '../../utils/usegetDate'
import { PiNumberZeroBold } from 'react-icons/pi'
import { useSelector } from 'react-redux'
const TodoCard = () => {
  const todos = useSelector(store=> store.TodoList.todos)
  const userName = useSelector((store) => store.userName.name) ?? '';
  const answer =
    todos.reduce((acc, curr) => {
      curr.completed ? acc++ : acc
      return acc
    }, 0) ?? 0

  function percentCal(x = 0, y = 1) {
    return Math.round((x / y) * 100)
  }

  const percent = percentCal(answer, todos.length)
  return (
    <div className=" md:w-2/3 bg-[#242933] border-2 border-[#7B7B7B] rounded-xl  shadow-2xl flex flex-col  md:flex-row justify-between px-10 md:py-8 gap-2 py-3 items-center">
      <div className="flex flex-col">
        <h1 className='text-xl font-bold'>Hey! {userName}</h1>
        <h2 className="font-semibold md:text-xl"> {`Your todo status of ${currentDate}`}</h2>
      </div>
     
      <div className="stats hidden stats-horizontal  shadow">
        <div className="stat">
          <div className="stat-title">Completed</div>
          <div className="stat-value">{todos.length}</div>
          <div className="stat-desc hidden md:block">{currentDate}</div>
        </div>

        <div className="stat">
          <div className="stat-title"> Total Tasks</div>
          <div className="stat-value">{2}</div>
          <div className="stat-desc hidden md:block">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div
        className="radial-progress text-lg font-bold"
        style={{ '--value': percent }}
      >
        {isNaN(percent) ? <PiNumberZeroBold /> : percent + '%'}
      </div>
    </div>
  )
}

export default TodoCard
