import React, { useEffect } from 'react'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { userState } from '../store/atoms/user'
const Int = () => {
  const setUser = useSetRecoilState(userState)
  const init = async () => {
    try {
      const response = await axios.get('https://todo-dp.onrender.com/auth/me', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username,
        })
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        })
      }
    } catch (error) {
      setUser({
        isLoading: false,
        userEmail: false,
      })
    }
  }

  useEffect(() => {
    init()
  }, [])
  return <></>
}

export default Int
