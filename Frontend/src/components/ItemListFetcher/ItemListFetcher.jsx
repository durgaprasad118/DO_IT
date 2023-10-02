import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../../atoms/TodoState'
function ItemListFetcher() {
  const todoList = useSetRecoilState(todoListState)
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
      todoList(data)
    }
    fetchData()
  }, [todoList])

}

export default ItemListFetcher
