import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
//React icon
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // set toggleMenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.addEventListener("scroll", handleSticky);
    };
  });

  // navbar item
  const navItems = [
    { page: "Home", path: "/" },
    { page: "Donation", path: "/donation" },
    { page: "Statistics", path: "/statistics" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ">
      <nav
        className={`py-4 lg:px-14 px-4   ${
          isSticky
            ? "static top-0 left-0 right-0 border-b backdrop-filter backdrop-blur-md text-black shadow-lg duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/">
            <img src={logo} alt="" className="w-40 inline-block items-center" />{" "}
          </Link>

          {/* Nav items for large devices  */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ page, path }) => (
              <NavLink
                to={path}
                key={path}
                className="  rounded block text-black hover:text-red-200 focus:font-bold focus:text-red-600 "
              >
                {page}
              </NavLink>
            ))}
          </ul>

          {/* btn for large device // if you dont want just comment btn div */}
          {/* <div className="space-x-12 hidden lg:flex items-center">
              <Link
                to="/"
                className="hidden lg:flex items-center text-brandPrimary hover:text-grey900"
              >
                Login
              </Link>
              <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
                SignUp
              </button>
            </div> */}

          {/* menu btn for only mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Nav item for mobile device */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-white ${
            isMenuOpen ? " fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ page, path }) => (
            <NavLink
              to={path}
              offset={-100}
              key={path}
              className=" block text-red-400 hover:text-black first:font-medium hover:translate-x-2  duration-300 "
            >
              {page}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
