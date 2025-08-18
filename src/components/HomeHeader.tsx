import Profile from "../assets/ProfileImage.png";
import Heart from "../assets/Heart.png";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

function HomeHeader() {
  return (
    <header className=" sticky top-0 z-50 flex items-center justify-between w-full h-[80px] shadow px-6 bg-white">
      <div className="flex items-center gap-3 ml-[15px]">
        <img
          src={Logo}
          alt="FreshHarvest Logo"
          className="h-[20px] w-[20px] object-contain"
        />
        <h1 className="text-gray-900 text-2xl font-bold pl-2">FreshHarvest</h1>
        <div className=" flex items-center gap-10 ml-8">
          <NavLink to="/Shops" className="text-gray-700 hover:text-blue-600">
            Shop
          </NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-blue-600">
            About
          </NavLink>
          <NavLink to="/contacts" className="text-gray-700 hover:text-blue-600">
            Contact
          </NavLink>
        </div>
        <div className="flex items-center ml-160">
          <div className="relative w-48">
            <span className="absolute left-0 top-0 flex h-full items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="w-full rounded bg-gray-200 px-3 py-1 pl-10"
            />
          </div>
          <button className="ml-7 h-8 w-20 rounded bg-gray-200 hover:bg-blue-300 text-black">
            Cart
          </button>
          <img className="ml-2 h-8" src={Heart} alt="##" />
          <img className="ml-6 size-10 rounded-full" src={Profile} alt="##" />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
