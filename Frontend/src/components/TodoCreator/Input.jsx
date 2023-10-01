import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Input = () => {
  return (
    <div className="flex  items-center  gap-x-4 w-ful ">
      <input
        type="text"
        placeholder="Enter Task"
        className="input input-bordered md:w-1/2 w-full "
      />
      <button className="btn btn-success px-4 ">
        <AiOutlinePlus className="font-bold text-xl" />
      </button>
    </div>
  )
}

export default Input
