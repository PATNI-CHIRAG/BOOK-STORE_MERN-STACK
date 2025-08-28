import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartBold } from "react-icons/pi";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/userDashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  const token = localStorage.getItem("token");

  return (
    <header className="max-w-screen-2xl mx-auto px-6 py-4 shadow-lg bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center md:gap-10 gap-4">
          <Link to="/" className="p-2 rounded-md hover:bg-gray-100 transition">
            <FaBars className="size-6 text-gray-700" />
          </Link>

          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* Logo Circle */}
            <div className="bg-yellow-400 p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
              📚
            </div>
            {/* Title */}
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 tracking-wide group-hover:text-yellow-500 transition-colors">
              BOOK <span className="text-yellow-500">STORE</span>
            </h1>
          </Link>

        </div>

        {/* Right side */}
        <div className="relative flex items-center md:space-x-4 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-8 rounded-full shadow-sm border ${currentUser ? "ring-2 ring-yellow-400" : ""
                      }`}
                  />
                </button>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg z-40 border">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : token ? (
              <Link
                to="/dashboard"
                className="border-b-2 border-yellow-500 text-yellow-600 font-medium hover:text-yellow-700"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="p-2 rounded-full"
              >
                <HiOutlineUser className="size-6 text-gray-700" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block p-2 rounded-full hover:bg-gray-100 transition">
            <IoMdHeartEmpty className="size-6 text-gray-700" />
          </button>

          <Link
            to="/cart"
            className="bg-yellow-400 hover:bg-yellow-500 p-2 sm:px-5 px-3 flex items-center rounded-lg border border-black shadow-md transition"
          >
            <PiShoppingCartBold className="size-6 text-black" />
            <span className="text-sm font-semibold ml-1">
              {cartItems.length > 0 ? cartItems.length : 0}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
