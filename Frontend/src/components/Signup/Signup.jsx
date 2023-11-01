import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../utils/Spinner';
import { useRegisterMutation } from '../../redux/api/userApi'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const [register,{isSuccess,isLoading,isError,error}]= useRegisterMutation();
  
  const handleSignupClick = async(event) => {
    event.preventDefault()
   
    const result = await register({
      user:name,
      username:email,
      password,
    }) 
      navigate("/signin")
  }
  if(isError){
    ErrorToast(error.data.message)
 }
  return (
    <div className="min-h-[calc(100vh-80px)] w-full grid ">
      <div className="flex items-center justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm border-2 border-[#7B7B7B] rounded-xl shadow-2xl bg-[#242933]">
          <h1 className="text-center text-2xl pt-8 text-white">Sign UP</h1>
          <form onSubmit={handleSignupClick}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered"
                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input input-bordered"
                  required 
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
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-5">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {isLoading ? (<Spinner/>) : 'Sign Up'}
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
