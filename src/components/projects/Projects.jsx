import React, { useState } from "react";
import ShowProjects from "../ShowProjects";

function Projects() {
    const [projectsLength, setProjectsLength] = useState(0);
    const handleDataFromChild = (value) => {
        setProjectsLength(value);
    };
    return (
        <>
            <div className="min-h-[1000px] pt-[150px] pb-[100px] w-full flex  justify-center  items-center">
                <div className="mx-auto text-center w-[1200px] text-[#bcb4b4]  flex flex-col justify-center items-center">
                    <div>
                        <p className="text-[20px] sm:text-[12px] font-['Roboto mono']">
                            some of my recent works
                        </p>
                        <h2 className="text-[60px] sm:text-[36px] uppercase font-bold font-['Montserrat']">
                            Projects
                        </h2>
                    </div>

                    <div className="sm:w-[288px] pt-[80px] mx-auto w-[1200px] sm:overflow-hidden min-h-[554px] relative">
                        <div
                            className=" sm:w-[288px] sm:flex-col flex sm:justify-center sm:items-start
                         flex-wrap transition-transform duration-500 ease-in-out"
                        >
                            <ShowProjects onSendData={handleDataFromChild} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
