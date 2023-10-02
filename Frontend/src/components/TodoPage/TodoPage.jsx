import React from 'react'
import TodoCreator from '../TodoCreator/TodoCreator'
import { useEffect } from 'react'
import TodoItem from '../TodoTasks/TodoItem'
import TodoTab from './TodoTab'
import Content from './Content'
import axios from 'axios'
import { todoListState } from '../../atoms/TodoState'
import { useRecoilValue } from 'recoil'
import ItemListFetcher from '../ItemListFetcher/ItemListFetcher'
const TodoPage = () => {
  ItemListFetcher()
  const values = useRecoilValue(todoListState)
  return (
    <div className="min-h-[calc(100vh-80px)]  flex flex-col relative ">
      <div className="">
        <TodoCreator></TodoCreator>
      </div>
      <div className="flex justify-center flex-col items-center">
        <TodoTab></TodoTab>
        <Content></Content>
      </div>
    </div>
  )
}

export default TodoPage
