import { useState } from "react";
import logo from "../../../public/Images/Navbar Logo.png";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navItemStyle = `text-xl tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400`;
  return (
    <div>
      <div className="bg-black py-3">
    <div className="flex items-center justify-between container px-20">
      <div>sfsafsfsdfssdffdf</div>
      <div>
      <Link to="" className="inline-black rounded-full px-5 py-1 border-2 border-white  text-md  text-white  hover:text-white  focus:ring ">Free Home Evalution</Link>
      </div>
      <div>
        <p className="text-md text-white font-bold"> 416-742-8000</p>
      </div>
    </div>
      </div>
    <div className="container">
      <div className="px-4  mx-auto py-3 md:block hidden">
        <div className=" flex items-center justify-between lg:justify-center lg:space-x-16 ">
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/featuer/buy"
                aria-label="Our product"
                title="Our product"
                className={navItemStyle}
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/featuer/pre-construction"
                aria-label="Our product"
                title="Our product"
                className={navItemStyle}
              >
                Pre Construction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/featuer/sell"
                aria-label="Our product"
                title="Our product"
                className={navItemStyle}
              >
                Sell
              </NavLink>
            </li>
            
          </ul>
          <NavLink
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} alt="Enamul Haque Website Logo" />
          </NavLink>
          <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
              <NavLink
                to="/about"
                aria-label="Product pricing"
                title="Product pricing"
                className={navItemStyle}
              >
                About Us
              </NavLink>
            </li> <li>
              <NavLink
                to="/blogs"
                aria-label="blogs"
                title="blogs"
                className={navItemStyle}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                aria-label="Contact Us"
                title="Contact Us"
                className={navItemStyle}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* for Tab and phone  */}
      <nav className="bg-white shadow md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <NavLink
                to="/"
                className="flex items-center text-gray-800 font-bold"
              >
                Logow
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  exact
                  to="/"
                  className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-100"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-100"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-100"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              exact
              to="/"
              className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="bg-gray-100"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="bg-gray-100"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="bg-gray-100"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};
