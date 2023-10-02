import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'https://todo-dp.onrender.com/auth/register',
        {
          username: email,
          password: password,
        },
      )
      let data = response.data
      // console.log(data.message)
    } catch (er) {
      //error message
      // console.log('ther', er.response.data.message)
    }
    localStorage.setItem('token', data.token)
    window.location = '/todos'
  }
  return (
    <div className="min-h-[calc(100vh-80px)] w-full grid ">
      <div className="flex items-center justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm border-2 border-[#7B7B7B] rounded-xl shadow-2xl bg-[#242933]">
          <h1 className="text-center text-2xl pt-4">Sign UP</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-5">
              <button
                onClick={handleSignup}
                className="btn btn-primary"
              >
                SignUp
              </button>
            </div>
            <div className="text-center mt-1">
              <Link
                to="/signin"
                className="link"
              >
                Already Have an Account? Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
