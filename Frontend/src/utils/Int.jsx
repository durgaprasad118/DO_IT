import React, { useEffect } from 'react'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { userState } from '../store/atoms/user'
const Int = () => {
  const setUser = useSetRecoilState(userState)
  const init = async () => {
    setUser({
      isLoading: true,
      userName: null,
    })
    try {
      const response = await axios.get('https://todo-dp.onrender.com/auth/me', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      if (response.data) {
        setUser({
          isLoading: false,
          userName: response.data,
        })
      } else {
        setUser({
          isLoading: false,
          userName: null,
        })
      }
    } catch (error) {
      setUser({
        isLoading: false,
        userName: false,
      })
    }
  }
  //called only once because we dont need it multiple times
  useEffect(() => {
    init()
  }, [])
  return <></>
}

export default Int
