import React from 'react'
import { useRecoilValue } from 'recoil'
import { userName } from '../../atoms/TodoState'
import ItemListFetcher from '../../utils/ItemListFetcher'
const Navbar = () => {
  ItemListFetcher()
  const username = useRecoilValue(userName)
  return (
    <div className="w-full    text-neutral-content sticky z-10  top-0">
      <div className=" navbar h-[80px] bg-opacity-70 backdrop-blur-lg bg-[#353B46]  border-opacity-50 border-b-2 border-[#7B7B7B]   mx-auto  md:px-20 px-3">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold">Welcome to DoIT</h1>
        </div>
        <div className="navbar-end flex gap-x-3">
          {username ? (
            <h1 className="md:text-3xl text-xl font-semibold md:font-bold">
              {username.username}
            </h1>
          ) : (
            <button className="btn btn-primary ">logout</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
