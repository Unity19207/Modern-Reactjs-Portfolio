import React from "react";
import aboutimage from "../../assets/aboutimage.jpg";
import { useNavigate } from "react-router-dom";

function HomeAboutContent() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full   h-[788px] pb-[100px]  flex justify-center items-center ">
                <div className="mx-auto h-[588px] sm:w-[288px] w-[1200px]  flex sm:flex-col sm:gap-10 justify-center items-center ">
                    <div className="flex flex-col  h-[100%] text-[#bcb4b4] justify-center gap-8 items-start sm:items-center w-1/2 sm:w-full  ">
                        <div className="text-[20px] sm:text-[12px] sm:text-center">
                            <p>Let me introduce myself</p>
                            <h2 className="text-[60px] sm:text-[36px] uppercase font-bold font-['Montserrat']   ">
                                About Me
                            </h2>
                        </div>
                        <div className="text-[18px] text-wrap sm:max-w-[100%] sm:text-[14px] max-w-[80%] leading-[23px] ">
                            <p>
                                I am a developer specializing in building
                                dynamic web solutions and applications using
                                technologies like Java, MERN Stack. Coding is my
                                passion, and I always aim to deliver unique,
                                efficient, and user-friendly designs that make
                                an impact.
                            </p>
                        </div>
                        <div className="flex gap-5 justify-start sm:flex-col sm:w-full  h-[63px] items-center">
                            <button
                                className=" border-[#bcb4b4]
                                bg-[#bcb4b4]
                                text-[#262626]
                                border
                                    hover:border sm:py-2  sm:text-[18px] sm:w-full
                                  py-4 hover:text-[#bcb4b4]
                                 hover:bg-[#262626]
                                px-11 rounded-lg h-[100%]  font-normal
                                   text-[22px]
                             "
                                onClick={() => navigate("/projects")}
                            >
                                Works
                            </button>

                            <button
                                className="border border-[#bcb4b4]
                                  py-4 hover:text-[#000000]
                                 hover:bg-[#bcb4b4] sm:py-2 sm:text-[18px] sm:w-full
                                px-11 rounded-lg h-[100%] font-normal
                                  text-[#bcb4b4] text-[22px]  "
                                onClick={() => navigate("/about")}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center sm:mt-[50px] ">
                        <img
                            className="h-[488px] sm:h-[288px] sm:w-[288px] rounded-lg brightness-[70%]
                            drop-shadow-2xl  "
                            src={aboutimage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeAboutContent;
