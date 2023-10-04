import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../utils/Spinner'
import { signupUser } from '../../utils/auth'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signup, setSignup] = useState(false)
  const [name, setName] = useState('')
  const handleSignupClick = () => {
    signupUser(email, name, password, setEmail, setPassword, setSignup)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] w-full grid ">
      <div className="flex items-center justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm border-2 border-[#7B7B7B] rounded-xl shadow-2xl bg-[#242933]">
          <h1 className="text-center text-2xl pt-4">Sign UP</h1>
          <div className="card-body">
           <form action="submit"
           onClick={handleSignupClick}
           >
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="email"
                className="input input-bordered"
              />
            </div>{' '}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-5">
              <input type='submit'
                onClick={handleSignupClick}
                className="btn btn-primary"
                value="signup"
             / >
                {/* {signup ? <Spinner /> : 'Sign Up'} */}
              
            </div>
            <div className="text-center mt-1">
              <Link
                to="/signin"
                className="link"
              >
                Already Have an Account? Login
              </Link>
            </div>
            </form> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
