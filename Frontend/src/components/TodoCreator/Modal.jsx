import React from 'react'
import { useState } from 'react'
const Modal = ({ title, updateTask, completed, id }) => {
  const [value, SetValue] = useState(title)
  return (
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex  flex-col  items-center ">
        <h3 className="font-bold text-lg  text-left">Edit your Task!</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => SetValue(e.target.value)}
          placeholder="Enter Task"
          className="input input-bordered  w-full max-w-xs my-4"
        />
        <div className="text-center">
          <label
            htmlFor={id}
            className="btn btn-primary "
            onClick={() => updateTask(value, completed)}
          >
            Save
          </label>
        </div>
      </div>
    </div>
  )
}

export default Modal
