import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";

function Header() {
  return (
    <header className=" sticky top-0 z-50 flex items-center justify-between w-full h-[80px] shadow px-6 bg-white">
      <div className="flex items-center gap-3 ml-[15px]">
        <img
          src={Logo}
          alt="FreshHarvest Logo"
          className="h-[20px] w-[20px] object-contain"
        />
        <h1 className="text-gray-900 text-2xl font-bold">FreshHarvest</h1>
      </div>

      <div className="flex items-center gap-10">
        <NavLink to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </NavLink>
        <NavLink to="/products" className="text-gray-700 hover:text-blue-600">
          Products
        </NavLink>
        <NavLink to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </NavLink>

        <div className="flex items-center gap-[8px]">
          <LogInButton />
          <SignUpButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
