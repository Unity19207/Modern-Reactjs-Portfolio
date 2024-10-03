import React from "react";
import { useNavigate } from "react-router-dom";

function ConnectWithMe() {
    const navigate = useNavigate();

    return (
        <>
            <div className="  max-w-[1200px]  h-[256px] bg-[#1e1e1e] rounded-[12px] mx-auto">
                <div className=" pt-[50px]  text-[#bcb4b4]  text-center ">
                    <div className="max-w-[500px] mx-auto text-[18px] font-['Roboto mono'] leading-[23px] ">
                        <p>Have a project in mind</p>
                    </div>
                    <h3 className=" text-[40px] mb-[20px] font-semibold font-['Montserrat']">
                        Let me help you
                    </h3>
                    <button
                        className=" bg-[#bcb4b4]
                             h-[100%] py-4 px-11 rounded-lg  text-black text-[22px]   border-none"
                        onClick={() => navigate("/contact")}
                    >
                        Contact Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default ConnectWithMe;
