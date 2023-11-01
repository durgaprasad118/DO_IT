import React from 'react'

const DeleteModal = ({ deleteTask ,id}) => {
  return (
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex  flex-col  items-center gap-y-2">
        <h3 className="font-bold text-black text-lg  text-left">
          Are you sure to Delete?
        </h3>

        <div className="text-center flex gap-x-3 ">
          <label
            htmlFor={id}
            className="btn btn-error "
            onClick={() => deleteTask()}
          >
            Delete
          </label>
          <label
            htmlFor={id}
            className="btn btn-warning"
            onClick={() => {}}
          >
            Cancel
          </label>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal;
