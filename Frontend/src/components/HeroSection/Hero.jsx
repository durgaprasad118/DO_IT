import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { currentDate } from '../../utils/usegetDate'
const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-80px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 w-full">
          <p className="py-6 text-4xl">
            <span className="text-6xl text-white ">Organize Your Tasks like a pro</span></p>
          <Link
            to="/signup"
            className="btn btn-accent"
          >
            Get Started
          </Link>
        </div>
        <div className=" md:w-1/2 w-full ">
          <div className="animate-pulse mockup-code md:w-2/3 h-[38vh] bg-[#191E24]">
            <pre
              data-prefix="$"
              className="text-lg"
            >
              <code className="border-b-2 border-slate-500 font-bold">{currentDate}</code>
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
