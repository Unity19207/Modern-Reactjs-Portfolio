
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
                        <p className="text-[20px] font-['Roboto mono']">
                            some of my recent works
                        </p>
                        <h2 className="text-[60px] uppercase font-bold font-['Montserrat']">
                            Projects
                        </h2>
                    </div>

                    <div className="pt-[80px] mx-auto w-[1200px] min-h-[554px] relative">
                        <div className="flex flex-wrap  transition-transform duration-500 ease-in-out">
                            <ShowProjects onSendData={handleDataFromChild} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
