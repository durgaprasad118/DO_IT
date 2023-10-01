import React from 'react'
import { MdDelete, MdEditCalendar } from "react-icons/md";
const TodoItem = () => {
  return (
    <div className="grid grid-cols-6  h-auto md:w-3/4 w-full grid-rows-2 md:grid-rows-1  card bg-[#242933] rounded-box place-items-center border-opacity-50 border-2 border-[#7B7B7B] md:px-2 py-2">
      <input
        type="checkbox"
        checked="checked"
        className="checkbox text-left"
      />
      <h1 className="text-lg col-start-2 md:col-end-5 col-end-7">
       
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, vitae?
      </h1>
      <div className="flex gap-x-2 col-start-1 col-end-7 md:col-start-5 md:colend">
        <button className="btn btn-success btn-sm md:btn-md "><MdEditCalendar className="font-bold text-xl"/></button>
        <button className="btn btn-error btn-sm md:btn-md"> <MdDelete className="font-bold text-xl"/></button>
      </div>
    </div>
  )
}

export default TodoItem
