import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../utils/Spinner'
import { signupUser } from '../../utils/auth'
import axios from 'axios'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signup, setSignup] = useState(false)
  const [name, setName] = useState('')
  const handleSignupClick = async (event) => {
    event.preventDefault()
    // signupUser(email, name, password, setEmail, setPassword, setSignup)
    try {
      const response = await axios.post(
        'https://todo-dp.onrender.com/auth/register',
        {
          user: name,
          username: email,
          password: password,
        },
      )
      const data = response.data
      localStorage.setItem('token', data.token)
      Sucesstoast('SignedUp Successfully')

      window.location.href = '/todos'
    } catch (error) {
      ErrorToast(error.response.data.message)
    } finally {
      setEmail('')
      setPassword('')
      setSignup(false)
    }
  }

  return (
  <div className="min-h-[calc(100vh-80px)] w-full grid ">
      <div className="flex items-center justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm border-2 border-[#7B7B7B] rounded-xl shadow-2xl bg-[#242933]">
          <h1 className="text-center text-2xl pt-4">Sign UP</h1>
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
                  required // Add the required attribute for validation
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
                  required // Add the required attribute for validation
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
                  required // Add the required attribute for validation
                />
              </div>
              <div className="form-control mt-5">
                <button type="submit" className="btn btn-primary">
                  {signup ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
              <div className="text-center mt-1">
                <Link to="/signin" className="link">
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
