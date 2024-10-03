import React from "react";

function HomeServicesContent() {
    return (
        <div className="w-full sm:h-[830px]  sm:items-start  text-[#bcb4b4] h-[530px] py-[100px] flex  justify-center items-center  ">
            <div className=" mx-auto w-[1200px] sm:w-[288px]  flex flex-col justify-center items-center">
                <div className="text-center">
                    <p className="text-[20px] sm:text-[12px]  font-['Roboto mono'] ">
                        What i will do for you
                    </p>
                    <h2 className="text-[60px] sm:text-[36px] font-bold font-['Montserrat'] uppercase">
                        Services
                    </h2>
                </div>
                <div className="h-[176px] my-[50px]  gap-[100px] sm:gap-[50px] flex justify-around items-center sm:flex-col">
                    <div className="w-[333px] sm:w-[288px]  flex flex-col justify-center items-center">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="30px"
                                width="30px"
                            >
                                <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"></path>
                            </svg>
                        </div>
                        <div className="text-[25px] font-['Montserrat'] font-semibold">
                            Frontend
                        </div>
                        <div>
                            <p className="text-[18px] sm:text-[14px] fonnt-[Roboto] text-center">
                                Responsive high-performance interfaces with
                                React & Tailwind CSS
                            </p>
                        </div>
                    </div>
                    <div className="w-[333px] sm:w-[288px]  flex flex-col justify-center items-center">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="30px"
                                width="30px"
                            >
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
                            </svg>
                        </div>
                        <div className="text-[25px] font-['Montserrat'] font-semibold">
                            Backend
                        </div>
                        <div>
                            <p className="text-[18px] sm:text-[14px] fonnt-[Roboto] text-center">
                                Scalable systems using Java SQL MongoDB &
                                Express
                            </p>
                        </div>
                    </div>
                    <div className="w-[333px] sm:w-[288px]  flex flex-col justify-center items-center">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="30px"
                                width="30px"
                            >
                                <path
                                    d="M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"
                                    className=""
                                ></path>
                            </svg>
                        </div>
                        <div className="text-[25px] font-['Montserrat'] font-semibold">
                            Web Design
                        </div>
                        <div>
                            <p className="text-[18px] sm:text-[14px] fonnt-[Roboto] text-center">
                                Unique user-friendly UI/UX for a professional
                                look{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeServicesContent;
