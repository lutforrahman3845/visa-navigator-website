import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeProvider";
import { AuthContext } from "../Context/AuthProvider";
import userIcon from "../assets/free-user-icon-3296-thumb.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 10){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return ()=>{ window.removeEventListener('scroll', handleScroll)}

  },[])

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` px-3 py-2 rounded-lg ${
              isActive
                ? "text-base text-white bg-gray-900  font-semibold"
                : "text-gray-300 hover:bg-gray-700 hover:text-white text-base font-medium"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` px-3 py-2 rounded-lg ${
              isActive
                ? "text-base text-white bg-gray-900  font-semibold"
                : "text-gray-300 hover:bg-gray-700 hover:text-white text-base font-medium"
            }`
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` px-3 py-2 rounded-lg ${
              isActive
                ? "text-base text-white bg-gray-900  font-semibold"
                : "text-gray-300 hover:bg-gray-700 hover:text-white text-base font-medium"
            }`
          }
          to="/all_visas"
        >
          All visas
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` px-3 py-2 rounded-lg ${
              isActive
                ? "text-base text-white bg-gray-900  font-semibold"
                : "text-gray-300 hover:bg-gray-700 hover:text-white text-base font-medium"
            }`
          }
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              ` px-3 py-2 rounded-lg ${
                isActive
                  ? "text-base text-white bg-gray-900  font-semibold"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white text-base font-medium"
              }`
            }
            to="/add_visa"
          >
            Add Visa
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              ` px-3 py-2 rounded-lg ${
                isActive
                  ? "text-base text-white bg-gray-900  font-semibold"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white text-base font-medium"
              }`
            }
            to="/added_visas"
          >
            My added visas
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              ` px-3 py-2 rounded-lg ${
                isActive
                  ? "text-base text-white bg-gray-900  font-semibold"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white text-base font-medium"
              }`
            }
            to="/visa_applications"
          >
            My Visa applications
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className={`sticky top-0  z-50  ${scrolled ? "backdrop-blur-3xl bg-gray-800/70": "bg-gray-800"}`}>
      <Disclosure as="nav" >
        <div className=" px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex  items-center justify-center sm:items-center sm:justify-start">
              <Link to={"/"} className="flex shrink-0 items-center">
                <img alt="Your Company" src={logo} className="h-8 w-auto" />
                <h1 className="text-white font-bold text-xl md:text-2xl ml-3 ">
                  Visify
                </h1>
              </Link>
              <div className="hidden sm:ml-6 lg:block">
                <div className="flex list-none">{links}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={toggleTheme} className="text-white">
                {theme === "dark" ? (
                  <svg
                    className="swap-off h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                ) : (
                  <svg
                    className="swap-on h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                )}
              </button>
              {user && user?.email ? (
                <div className="dropdown dropdown-hover dropdown-end">
                  {user?.photoURL ? (
                    <div tabIndex={1} role="button" className="w-10 h-10 ">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={user?.photoURL}
                        alt="User imge"
                      />
                    </div>
                  ) : (
                    <div tabIndex={1} role="button" className="w-10 h-10 ">
                      <img
                        className="w-full h-full rounded-full border border-primary p-[2px]"
                        src={userIcon}
                        alt="Default User Icon"
                      />
                    </div>
                  )}
                  <ul
                    tabIndex={1}
                    className="dropdown-content menu bg-gray-700 rounded-box z-50 w-52 p-2 shadow"
                  >
                    <li className="text-base text-white hover:bg-gray-900 rounded-lg font-semibold">
                      <a>{user?.displayName}</a>
                    </li>
                    <li
                      onClick={() => logOut()}
                      className="text-base text-white hover:bg-gray-900 rounded-lg  font-semibold"
                    >
                      <a>logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="hidden sm:flex items-center gap-2 ">
                  <Link
                    to={"/login"}
                    className="bg-primary py-2 px-3 rounded-lg text-base font-medium text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="bg-primary py-2 px-3 rounded-lg text-base font-medium text-white"
                  >
                    Register
                  </Link>
                </div>
              )}
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel>
          <div className="space-y-4 px-2 pb-3 pt-2 list-none lg:hidden">
            {links}
          </div>
          {user?.email ? (
            ""
          ) : (
            <div className="flex flex-col  gap-2 mx-3 pb-5 sm:hidden">
              <Link
                to={"/login"}
                className="bg-primary py-2 px-3 rounded-lg text-base font-medium text-white text-center"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-primary py-2 px-3 rounded-lg text-base font-medium text-white text-center"
              >
                Register
              </Link>
            </div>
          )}
        </DisclosurePanel>
      </Disclosure>
      </div>
  );
};

export default Navbar;
