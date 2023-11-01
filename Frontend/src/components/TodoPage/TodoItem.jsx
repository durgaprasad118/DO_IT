import React, { useEffect, useState } from "react";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import axios from "axios";
import { useUpdateTodoMutation } from "../../redux/api/todoApi";
import { useDeleteTodoMutation } from "../../redux/api/todoApi";
import Modal from "../TodoCreator/Modal";
import { Sucesstoast } from "../../utils/toast";
import DeleteModal from "../TodoCreator/DeleteModal";
import Spinner from "../../utils/Spinner";

const TodoItem = ({ title, completed, _id }) => {
  const [tick, setTick] = useState(completed);
  const [TITLE, setTitle] = useState(title);
  const [updateT, { isSuccess: titleEdit, isLoading, isError }] =
    useUpdateTodoMutation();
  const [del, { isSuccess: deleteTod, isError: delError }] =
    useDeleteTodoMutation();
//  deleting tasks
  async function deleteTask() {
    const result = await del({ id: _id });
  }
  if (deleteTod) {
  }
  // updating tasks
  async function updateTask(k, l) {
    const result = await updateT({ id: _id, data: { title: k, completed: l } });
  }
  useEffect(()=>{
    if (titleEdit) {
      Sucesstoast("Task updated Successfully");
    }
    if(deleteTod){
      Sucesstoast('Task deleted Successfully')
    }
  },[titleEdit,deleteTod])
  
  return (
    <div className="grid text-white grid-cols-6  h-auto md:w-3/4 w-full  grid-rows-1 md:grid-rows-1  card  rounded-box place-items-center border-opacity-50 border-2 border-[#7B7B7B] md:px-2 py-2 ">
      <input
        type="checkbox"
        checked={tick}
        onChange={(e) => {
          updateTask(TITLE, e.target.checked);
          setTick(e.target.checked);
        }}
        className="checkbox text-left border border-white"
      />
      <div className="flex items-center md:flex-row justify-between w-full col-start-2  col-end-6">
      <h1 className="text-lg ">
        {isLoading ? <Spinner></Spinner> : title}
      </h1>
      <div className="flex gap-x-2  ">
        <div>
          <label className="btn btn-success btn-sm md:btn-md " htmlFor={_id}>
            <MdEditCalendar className="font-bold text-xl" />
          </label>
          <input type="checkbox" id={_id} className="modal-toggle hidden" />
          <Modal
            title={TITLE}
            updateTask={updateTask}
            completed={tick}
            id={_id}
          ></Modal>
        </div>
        <div>
          <label
            className="btn btn-error btn-sm md:btn-md"
            htmlFor={`del${_id}`}
          >
            <MdDelete className="font-bold text-xl" />
          </label>
          <input
            type="checkbox"
            id={`del${_id}`}
            className="modal-toggle hidden"
          />
          <DeleteModal deleteTask={deleteTask} id={`del${_id}`}></DeleteModal>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TodoItem;
