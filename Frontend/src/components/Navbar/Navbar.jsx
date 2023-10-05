import React from 'react'
import Int from '../../utils/Int'
import { Link, useNavigate } from 'react-router-dom'
import { userState } from '../../store/atoms/user'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import Spinner from "../../utils/Spinner"
import { isUserLoading } from '../../store/selectors/isUserLoading'
import { userNameState } from '../../store/selectors/userEmail'
import axios from 'axios'
import { isError, useQuery } from '@tanstack/react-query'
const Navbar = () => {
  // const isLoading = useRecoilValue(isUserLoading)
  // const userName = useRecoilValue(userNameState)
  // const setUser = useSetRecoilState(userState)
  const fetchData = async () => {
    const { data } = await axios.get('https://todo-dp.onrender.com/auth/me', {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXIiOiJEdXJnYVBSYXNhZCIsInVzZXJuYW1lIjoiZHNhZGYiLCJwYXNzd29yZCI6IiQyYSQxMCRIc3doc0RvUmIwM1ZacmMxa3RpQW9PN3Fsb3JnNWJXb2ozY0FqTGdXemZoeWZ5M25SS0JNQyIsIl9pZCI6IjY1MWYxYzlhMGY2ZGUxODUwNTUzZTIyOCIsIl9fdiI6MH0sImlhdCI6MTY5NjUzNzc1NCwiZXhwIjoxNjk2NTQxMzU0fQ.j6ZB4fmF1_7BFE_23e_94GLX6hKjuBTRxPOpdQHgPl4',
      },
    })
    return data
  }
  const { isLoading, isError, data } = useQuery({
    queryKey: ['Name'],
    queryFn: fetchData,
  })

  return (
    <div className="w-full    text-neutral-content sticky z-10  top-0">
      <div className=" navbar h-[80px] bg-opacity-70 backdrop-blur-lg bg-[#353B46]  border-opacity-50 border-b-2 border-[#7B7B7B]   mx-auto  md:px-20 px-3">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold">Welcome to DoIT</h1>
        </div>
        <div className="navbar-end flex gap-x-3">
          {isLoading ? (
            <Spinner></Spinner>
          ) : data ? (
            <div className="flex gap-x-4">
              <h1 className="md:text-3xl text-xl font-semibold md:font-bold">
                {data}
              </h1>
              <button
                onClick={() => {
                  localStorage.setItem('token', null)
                  setUser({
                    isLoading: false,
                    userEmail: null,
                  })
                }}
                className="btn btn-error"
              >
                LogOout
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="btn btn-primary "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
