import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogin } from '../../utils/auth' // Adjust the path as needed
import { useMutation } from '@tanstack/react-query'
import Spinner from '../../utils/Spinner'
import axios from 'axios'
const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const postLogin = async ({ username, password }) => {
    const { data } = await axios.post(
      'https://todo-dp.onrender.com/auth/login',
      {
        username,
        password,
      },
    )
    return data;
  }
  const createLoginMutation = useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      console.log(data)
      navigate("/")
    },
  })

  function handleLogin() {
    createLoginMutation.mutate({
      username: email,
      password: password,
    })
  }
  return (
    <div className="min-h-[calc(100vh-80px)]  px-3 md:py-0  grid ">
      <div className="flex items-center justify-center">
        <div className="card border-2 border-[#7B7B7B] rounded-xl  flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#242933]">
          <h1 className="text-center text-2xl pt-4">Sign IN</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-5">
              <button
                onClick={handleLogin}
                className="btn btn-primary  "
              >
                {createLoginMutation.isLoading ? <Spinner /> : 'Sign in'}
              </button>
            </div>
            <div className="text-center mt-1">
              <Link
                to="/signup"
                className="link"
              >
                New? Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
