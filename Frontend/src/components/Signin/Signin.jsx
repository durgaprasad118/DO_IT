import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleLogin } from '../../utils/auth' // Adjust the path as needed
import Spinner from '../../utils/Spinner'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLoginClick = () => {
    handleLogin(email, password, setLoggedIn, setEmail, setPassword)
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
                type="text"
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
                onClick={handleLoginClick}
                className="btn btn-primary  "
              >
                {loggedIn ? <Spinner /> : 'Login'}
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
