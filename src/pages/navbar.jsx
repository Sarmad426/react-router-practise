import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  const handleClasses = ({ isActive }) => {
    let classes = "nav-item link ";
    classes += isActive && " active-link";
    return classes;
  };
  return (
    <div>
      <nav>
        <NavLink to="/" className={handleClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={handleClasses}>
          About
        </NavLink>
        <NavLink to="/products" className={handleClasses}>
          Products
        </NavLink>
        <Outlet />
      </nav>
    </div>
  );
};
export default Navbar;
