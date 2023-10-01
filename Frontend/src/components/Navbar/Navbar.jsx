import React from 'react'
const Navbar = () => {
  return (
    <div className="w-full    text-neutral-content sticky z-10  top-0">
      <div className=" navbar h-[80px] bg-opacity-70 backdrop-blur-lg bg-[#353B46]  border-opacity-50 border-b-2 border-[#7B7B7B]   mx-auto  md:px-20">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold">Welcome!</h1>
        </div>
        <div className="navbar-center">
          <a className="  text-3xl">Do IT</a>
        </div>
        <div className="navbar-end flex gap-x-3">
          
          <button className="btn btn-primary ">logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
