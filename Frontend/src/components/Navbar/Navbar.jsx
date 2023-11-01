import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateName } from "../../redux/api/userSlice";
const Navbar = () => {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://todo-dp.onrender.com/auth/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (data) {
        setName(data);
        dispatch(updateName(data));
      }
    };    
    fetchData();
  }, [localStorage.getItem("token")]);
  return (
    <div className="w-full    text-neutral-content sticky z-10  top-0">
      <div className=" navbar h-[80px] bg-opacity-70 backdrop-blur-lg bg-[#353B46]  border-opacity-50 border-b-2 border-[#7B7B7B]   mx-auto  md:px-20 px-3">
        <div className="navbar-start">
          <Link to="/" className="text-3xl font-bold ">
            {" "}
            DoIT
          </Link>
        </div>
        <div className="navbar-end flex gap-x-3 items-center">
          {name ? (
            <div className="flex gap-x-4 items-center">
              <h1 className="md:text-3xl text-xl font-semibold md:font-bold">
                {name}
              </h1>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setName(null);
                  navigate("/");
                }}
                className="btn btn-error"
              >
                LogOout
              </button>
            </div>
          ) : (
            <div className="flex gap-x-2">
              <div>
                <Link to="/signin" className="btn btn-primary ">
                  Login
                </Link>
              </div>
              <div>
                <Link to="/signup" className="btn btn-primary ">
                  Signup
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
