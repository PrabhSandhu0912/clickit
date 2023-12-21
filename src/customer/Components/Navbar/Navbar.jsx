import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavigation, setIsNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="bg-blue-700 text-white border-b border-gray-200 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center py-6">
              <img
                src="C:\Users\sandh\Pictures\logo2.jpg"
                alt="gokarnshopping"
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-white text-lg">
                Gokarn Shopping
              </span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex items-center space-x-4">
              <li>
                <Link
                  to="/men"
                  className="font-medium text-white hover:text-black"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="font-medium text-white hover:text-black"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="font-medium text-white hover:text-black"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  to="/home-living"
                  className="font-medium text-white hover:text-black"
                >
                  Home & Living
                </Link>
              </li>
              <li>
                <Link
                  to="/beauty"
                  className="font-medium text-white hover:text-black"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="font-medium text-white hover:text-black"
                >
                  Offers
                </Link>
              </li>
            </ul>

            {/* Search bar */}

            <div className="flex">
              <span className="px-2">User</span>
              <span className="px-2">Cart</span>
            </div>

            {/* Mobile navigation menu */}
            <div className="md:hidden flex items-center">
              <button onClick={handleShowMenu} className="text-white p-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col py-4 space-y-2 px-5">
            <li>
              <Link
                to="/men"
                className="font-medium text-white hover:text-gray"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="font-medium text-white hover:text-gray"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="font-medium text-white hover:text-gray"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/home-living"
                className="font-medium text-white hover:text-gray"
              >
                Home & Living
              </Link>
            </li>
            <li>
              <Link
                to="/beauty"
                className="font-medium text-white hover:text-gray"
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="font-medium text-white hover:text-gray"
              >
                Offers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}
export default Navbar;
