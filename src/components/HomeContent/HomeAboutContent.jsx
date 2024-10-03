import React from "react";
import aboutimage from "../../assets/aboutimage.jpg";
import { useNavigate } from "react-router-dom";

function HomeAboutContent() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-[788px] pb-[100px]  flex justify-center items-center ">
                <div className="mx-auto h-[588px] w-[1200px] flex justify-center items-center ">
                    <div className="flex flex-col  h-[100%] text-[#bcb4b4] justify-center gap-8 items-start w-1/2  ">
                        <div className="text-[20px]">
                            <p>Let me introduce myself</p>
                            <h2 className="text-[60px] uppercase font-bold font-['Montserrat']   ">
                                About Me
                            </h2>
                        </div>
                        <div className="text-[18px] text-wrap max-w-[80%] leading-[23px] ">
                            <p>
                                I am a developer specializing in building
                                dynamic web solutions and applications using
                                technologies like Java, MERN Stack. Coding is my
                                passion, and I always aim to deliver unique,
                                efficient, and user-friendly designs that make
                                an impact.
                            </p>
                        </div>
                        <div className="flex gap-5 justify-start h-[63px] items-center">
                            <button
                                className=" border-[#bcb4b4]
                                bg-[#bcb4b4]
                                text-[#262626]
                                border
                                    hover:border
                                  py-4 hover:text-[#bcb4b4]
                                 hover:bg-[#262626]
                                px-11 rounded-lg h-[100%] font-normal
                                   text-[22px]
                             "
                                onClick={() => navigate("/projects")}
                            >
                                Works
                            </button>

                            <button
                                className="border border-[#bcb4b4]
                                  py-4 hover:text-[#000000]
                                 hover:bg-[#bcb4b4]
                                px-11 rounded-lg h-[100%] font-normal
                                  text-[#bcb4b4] text-[22px]  "
                                onClick={() => navigate("/about")}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center    ">
                        <img
                            className="h-[488px] rounded-lg brightness-[70%] drop-shadow-2xl  "
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
