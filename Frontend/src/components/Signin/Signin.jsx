import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../redux/api/userApi'
import Spinner from '../../utils/Spinner'
import {ErrorToast} from "../../utils/toast"
const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login,{isSuccess,isLoading,isError,error}]= useLoginMutation();
  const  handleLogin=async()=> {
    const result = await login({
      username:email,
      password,
    });
      localStorage.setItem('token', result.data.token)
      navigate("/todos")
    }
    if(isError){
      ErrorToast(error.data.message)
   }

  const onSubmit = async(e)=>{
    e.preventDefault();
    await handleLogin()
  }
  
  
  
  return (
    <div className="min-h-[calc(100vh-80px)]  px-3 md:py-0  grid ">
      <div className="flex items-center justify-center">
        <div className="card border-2 border-[#7B7B7B] rounded-xl  flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#242933]">
          <h1 className="text-center text-2xl pt-4">Sign IN</h1>
          <div className="card-body">
 <h1 className="text-2xl   text-white text-center">
              Login to your account
            </h1>
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
                onClick={onSubmit}
                className="btn btn-primary  "
              >
                {isLoading ? <Spinner /> : 'Sign in'}
              </button>
            </div>
            <div className="text-center mt-1 text-white">
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
