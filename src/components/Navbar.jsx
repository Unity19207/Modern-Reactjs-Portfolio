import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="flex sm:justify-end justify-center items-center w-full z-50 bg-[#262626] h-[66px] py-[10px] fixed top-0 px-4">
                {/* Menu Icon for Small Screens */}
                <div className="sm:flex hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Regular Navbar Links */}
                <div className="sm:hidden flex items-center">
                    <ul className="navbarlinks flex justify-center items-center space-x-8 text-[#bcb4b4] text-[20px]">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? ""
                                        : isActive
                                        ? "text-white rounded-[12px]"
                                        : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? ""
                                        : isActive
                                        ? "text-white rounded-[12px]"
                                        : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? ""
                                        : isActive
                                        ? "text-white rounded-[12px]"
                                        : ""
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? ""
                                        : isActive
                                        ? "text-white rounded-[12px]"
                                        : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Sidebar for Small Screens */}
                <div
                    className={`fixed top-0 right-0 w-full h-fit bg-[#262626] transform ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out sm:block`}
                >
                    <div className="flex flex-col justify-center items-center rounded-xl bg-[#1e1e1e] p-4 space-y-6">
                        <button
                            onClick={toggleMenu}
                            className="self-end text-white focus:outline-none"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                        <NavLink
                            to="/"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg"
                                    : "text-[#bcb4b4] text-lg hover:text-white"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg"
                                    : "text-[#bcb4b4] text-lg hover:text-white"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/projects"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg"
                                    : "text-[#bcb4b4] text-lg hover:text-white"
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white text-lg"
                                    : "text-[#bcb4b4] text-lg hover:text-white"
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>

                {/* Overlay to close sidebar */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 md:hidden"
                        onClick={toggleMenu}
                    ></div>
                )}
            </div>
        </>
    );
}

export default Navbar;
