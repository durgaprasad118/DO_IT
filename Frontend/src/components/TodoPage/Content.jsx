import React from 'react'
import TodoItem from './TodoItem'
import Notdo from './Notdo'
import { useGettodosQuery } from '../../redux/api/todoApi'
const Content = ({ active }) => {
  const {data,isLoading,isError}= useGettodosQuery()
  if(isError){
    console.log('error');
  }
  const todos = data?.tasks ?? []; 

  const notDone = todos.filter((x) => x.completed == false)
  const Done = todos.filter((x) => x.completed == true)
  const finalArray = active == 'todo' ? notDone : Done;
  let ans;
  if (todos.length == 0) {
    ans = <Notdo></Notdo>
  } else {
    ans = finalArray.map((todo) => {
      return (
        <TodoItem
          key={todo._id}
          {...todo}
        ></TodoItem>
      )
    })
  }
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-[#191E24] rounded-xl md:w-3/4 w-full flex flex-col items-center gap-y-3 py-6 overflow-y-scroll h-[450px] 2xl:h-[550px] px-3">
        {isLoading?(<h1 className='text-white'>Loading....</h1>):ans}
      </div>
    </div>
  )
}

export default Content
