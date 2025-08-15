import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-6">
      <div className="flex justify-center items-center gap-45 h-30">
        <NavLink to="/about" className="text-gray-700 hover:text-blue-600">
          About Us
        </NavLink>
        <NavLink to="/products" className="text-gray-700 hover:text-blue-600">
          Contact
        </NavLink>
        <NavLink
          to="/Privacy Policy"
          className="text-gray-700 hover:text-blue-600"
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to="/Terms of Service"
          className="text-gray-700 hover:text-blue-600"
        >
          Terms of Service
        </NavLink>
      </div>
      <div className="mt-2">
        <p className="text-center text-gray-400 pr-20">
          @2024 FreshHarvest All Rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
