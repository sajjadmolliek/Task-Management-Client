import { BsPersonCircle } from "react-icons/Bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useCustomeHook from "../../Hooks/useCustomeHook";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useCustomeHook();
  const [toggle, setToggle] = useState(true);
  const navgate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logOut();
    navgate('/')
  };
  const userName = user?.displayName;

  const navitems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[black] font-bold underline"
              : "text-[#15849E] font-bold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[black] font-bold underline"
              : "text-[#15849E] font-bold"
          }
          to={"/Dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[black] font-bold underline"
              : "text-[#15849E] font-bold"
          }
          to={"/feature"}
        >
          Features
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#C6C6C633]">
      <div className="w-[95%] mx-auto">
        <div className="navbar col-span-1 justify-center ">
          <div className="navbar-start gap-2 md:gap-4 lg:w-[40%]">
            <div className="dropdown  ">
              <div onClick={handleToggle}>
                <label
                  onClick={handleToggle}
                  tabIndex={0}
                  className=" text-[#C6C6C6]  lg:hidden"
                >
                  {!toggle ? (
                    <>
                      <h1 className="text-xl">X</h1>
                    </>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  )}
                </label>
              </div>
              {!toggle ? (
                <ul
                  tabIndex={0}
                  className=" bg-[#f9e4e4] menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-56 h-60 space-y-3"
                >
                  {navitems}

                  <div className="flex items-center">
                    {user != null ? (
                      <button className="px-3 py-2 rounded-lg mx-3  text-white border-[2px] border-[#C6C6C6] bg-[#C6C6C6]">
                        {userName}
                      </button>
                    ) : (
                      ""
                    )}
                    {user != null ? (
                      user?.photoURL ? (
                        <img
                          className="w-[20%] rounded-full mr-2 border-0"
                          src={user.photoURL}
                          alt="User"
                        />
                      ) : (
                        <BsPersonCircle className="text-2xl mr-2 border-0"></BsPersonCircle>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </ul>
              ) : (
                <></>
              )}
            </div>
            <NavLink to={"/"}>
              <div className="flex lg:justify-start items-start">
                <img
                  className="w-[35%] md:w-[20%] inline"
                  src={logo}
                  alt="logo"
                />
              </div>
            </NavLink>
          </div>
          <div className="navbar-start col-span-3 justify-center hidden lg:flex lg:w-full">
            <ul className=" flex gap-6 px-1 text-[16px]">{navitems}</ul>
          </div>
          <div className="navbar-end">
            {user != null ? (
              user?.photoURL ? (
                <a className="w-[4rem] md:w-[3rem]" href="#" title={userName}>
                  <img
                    className={`w-[66%] md:w-[84%] border-0 rounded-full mr-3`}
                    src={user.photoURL}
                    alt="User"
                  />
                </a>
              ) : (
                <BsPersonCircle className="text-4xl border-0 mr-3"></BsPersonCircle>
              )
            ) : (
              ""
            )}
          </div>
          <div className="navbar-center">
            {user != null ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm  text-white border-[2px] border-[#38697f] bg-[#38697f]"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to={"/logins"}
                  className="mr-4 btn btn-sm  text-white border-[2px] border-[#38697f] bg-[#38697f]"
                >
                  Login
                </Link>
                <Link
                  to={"/Resister"}
                  className="btn btn-sm  text-white border-[2px] border-[#38697f] bg-[#38697f]"
                >
                  Resister
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
