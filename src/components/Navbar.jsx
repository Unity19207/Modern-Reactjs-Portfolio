import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex justify-center items-center w-full z-50 bg-[#262626] h-[66px] py-[10px]  fixed top-0">
                <div className="flex justify-center  mx-auto items-center   ">
                    <ul
                        className="navbarlinks flex  justify-center items-center space-x-2 px-[300px] text-[#bcb4b4]
                 menu-vertical h-[46px] text-[20px] lg:menu-horizontal  rounded-lg   "
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? " "
                                        : isActive
                                        ? " text-white rounded-[12px]"
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
                                        ? " "
                                        : isActive
                                        ? " text-white rounded-[12px]"
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
                                        ? " "
                                        : isActive
                                        ? " text-white rounded-[12px]"
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
                                        ? " "
                                        : isActive
                                        ? " text-white rounded-[12px]"
                                        : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
