import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../utils/Spinner'
import axios from 'axios'
import { isError, useQuery } from '@tanstack/react-query'
const Navbar = () => {
  const fetchData = async () => {
    const { data } = await axios.get('https://todo-dp.onrender.com/auth/me', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
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
