import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Sucesstoast } from "../../utils/toast";
import { useAddTodoMutation } from "../../redux/api/todoApi";
import Spinner from "../../utils/Spinner";

import { useDispatch } from "react-redux";
const Input = () => {
  const [title, setTitle] = useState("");
  const [addTodo, { isLoading, isSuccess, isError, error }] =
    useAddTodoMutation();

  async function handleCLick() {
    const result = await addTodo({ title });
    setTitle("");
  }
  if (isError) {
    console.log(error);
  }
  useEffect(() => {
    isSuccess && Sucesstoast("Task added");
  }, [isSuccess]);
  
  return (
    <div className="flex  items-center  gap-x-4 w-ful ">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task"
        className="input input-bordered md:w-1/2 w-full "
      />
      <button
        onClick={handleCLick}
        disabled={isLoading}
        className="btn btn-primary px-4 "
      >
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <AiOutlinePlus className="font-bold text-xl" />
        )}
      </button>
    </div>
  );
};

export default Input;
