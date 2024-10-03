import React from "react";
import { useNavigate } from "react-router-dom";
import hometopimage from "../../assets/hometopimage.jpg";

function HomeTopContent() {
    const navigate = useNavigate();

    return (
        <>
            <div className="  h-[1000px] pt-[150px] pb-[50px] w-[100%] flex justify-center items-center sm:items-start">
                <div className="absolute uppercase text-[#bcb4b4] sm:left-[-25px]  bottom-[-37px] left-[23px] space-y-7 sm:text-[12px] text-[16px] tracking-[7px] 	">
                    <div className=" flex flex-col justify-center items-center space-y-10 tracking-[7px]">
                        <p className="rotate-90 font-light">Follow</p>
                        <svg
                            width="16"
                            height="46"
                            viewBox="0 0 16 46"
                            fillOpacity={1}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.2929 45.7071C7.68342 46.0976 8.31659 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95263 37.5384 1.31946 37.5384 0.928936 37.9289C0.538412 38.3195 0.538412 38.9526 0.928936 39.3431L7.2929 45.7071ZM7 1.02965e-07L7 45L9 45L9 -1.02965e-07L7 1.02965e-07Z"
                                fill="white"
                                fillOpacity={0.61}
                            />
                        </svg>
                    </div>
                    <ul className="flex flex-col justify-center items-center space-y-7 tracking-[5px]">
                        <li className="-rotate-90">
                            <a
                                href="https://github.com/Unity19207"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GH
                            </a>
                        </li>
                        <li className="-rotate-90">
                            <a
                                href="https://www.instagram.com/yogesh_jadhav.19/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                IG
                            </a>
                        </li>
                        <li className="-rotate-90">
                            <a
                                href="https://www.linkedin.com/in/yogesh19/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LI
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="absolute sm:text-[12px] w-[25px]  uppercase text-[#bcb4b4] bottom-[-46px] sm:right-[10px] right-[27px] text-[16px] 	">
                    <div className=" flex flex-col  justify-center items-center tracking-[7px] gap-16">
                        <p className="rotate-90 ">Scroll</p>
                        <svg
                            width="8"
                            height="44"
                            viewBox="0 0 8 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.64645 43.3536C3.84171 43.5488 4.15829 43.5488 4.35356 43.3536L7.53554 40.1716C7.7308 39.9763 7.7308 39.6597 7.53554 39.4645C7.34027 39.2692 7.02369 39.2692 6.82843 39.4645L4 42.2929L1.17157 39.4645C0.976312 39.2692 0.65973 39.2692 0.464468 39.4645C0.269206 39.6597 0.269206 39.9763 0.464468 40.1716L3.64645 43.3536ZM3.5 2.18557e-08L3.5 43L4.5 43L4.5 -2.18557e-08L3.5 2.18557e-08Z"
                                fill="white"
                                fillOpacity={0.61}
                            />
                        </svg>
                    </div>
                </div>
                <div className=" sm:flex-col sm:w-[100%] flex justify-center items-center w-[1154px] ">
                    <div className="sm:w-[284px] sm:h-[296px]  w-[896px] h-[586px] border-2 relative">
                        <img
                            className=" absolute top-0 left-0 w-full h-full brightness-[35%] object-cover"
                            src={hometopimage}
                            alt=""
                        />
                        <div className="  flex  justify-center items-center">
                            <div className="absolute sm:top-[-53px]  top-[-90px] text-center  ">
                                <p className="text-[#bcb4b4] sm:text-[15px] text-[20px]  font-semibold">
                                    Hello, This is
                                </p>
                                <h1 className="text-white sm:text-[35px] text-[70px]  font-semibold font-['Montserrat']   ">
                                    Yogesh Jadhav
                                </h1>
                            </div>
                            <div className="absolute sm:bottom-[-190px] bottom-[30px] sm:space-y-4  space-y-8  flex flex-col justify-center items-center">
                                <p className="text-[#bcb4b4] sm:w-[100%] sm:h-[100%] w-[490px] sm:text-[14px] text-[18px] h-[70px] text-pretty text-center    ">
                                    I am a Computer Science Graduate <br />
                                    Proficient in Java, React, and MERN Stack
                                    <br />
                                    Cyber Security Enthusiast
                                </p>

                                <button
                                    className=" bg-[#bcb4b4] sm:py-3 sm:px-9 py-4 px-11 rounded-xl  text-black text-[22px]   border-none  brightness-[100%] hover:brightness-[120%] "
                                    onClick={() => navigate("/projects")}
                                >
                                    see my works
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeTopContent;
