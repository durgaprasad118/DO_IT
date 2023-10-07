import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const signUPPost = async ({ user, username, password }) => {
    const { data } = await axios.post(
      'https://todo-dp.onrender.com/auth/register',
      {
        user,
        username,
        password,
      },
    )
    return data
  }
  const signupMutation = useMutation({
    mutationFn: signUPPost,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
     navigate("/todos")
    },
  })
   const handleSignupClick =  (event) => {
    event.preventDefault();
    signupMutation.mutate({
      user:name,
      username:email,
      password:password,
    })

    //   localStorage.setItem('token', data.token)
    //   Sucesstoast('SignedUp Successfully')

    //   window.location.href = '/todos'
    // } catch (error) {
    //   ErrorToast(error.response.data.message)
    // } finally {
    //   setEmail('')
    //   setPassword('')
    // }
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
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {signupMutation.isLoading ? 'Signing Up...' : 'Sign Up'}
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
