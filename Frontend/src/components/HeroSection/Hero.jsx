import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { Link } from 'react-router-dom'
const Hero = () => {
  let current = new Date()
  return (
    <div className="hero min-h-[calc(100vh-80px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 w-full">
          {/* <h1 className="text-5xl font-bold">Do IT</h1> */}
          <p className="py-6 text-4xl">
            Organize and Get Things done Lorem ipsum dolor sit amet consectetur
            adipisicing elit. 
          </p>
          <Link to="/signup" className="btn btn-accent">Get Started</Link>
        </div>
        <div className=" md:w-1/2 w-full ">
          <div className="mockup-code md:w-2/3 h-[38vh] bg-[#242933]">
            <pre
              data-prefix="$"
              className="text-lg"
            >
              <code className="border-b-2 border-slate-500">{`${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`}</code>
            </pre>
            <pre
              data-prefix=""
              className="text-warning text-lg"
            >
              <code></code>
            </pre>
            <pre
              data-prefix=">"
              className="text-warning text-lg"
            >
              <code>Go to Gym</code>
            </pre>
            <pre
              data-prefix=">"
              className="text-success text-lg"
            >
              <code>Get Groceries</code>
            </pre>
            <pre
              data-prefix=">"
              className="text-error text-lg"
            >
              <code>Review PR</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
