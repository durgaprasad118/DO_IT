import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { userName } from '../../atoms/TodoState'
import { todoListState } from '../../atoms/TodoState'
function ItemListFetcher() {
  const todoList = useSetRecoilState(todoListState)
  const setUserName = useSetRecoilState(userName)
  useEffect(() => {
    const fetchData = async () => {
      const axiosConfig = {
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
      const response = await axios.get(
        'https://todo-dp.onrender.com/tasks/getTasks',
        axiosConfig,
      )
      const data = response.data
      todoList(data.tasks)
      setUserName(data.user)
    }
    fetchData()
  }, [todoList])
}

export default ItemListFetcher
