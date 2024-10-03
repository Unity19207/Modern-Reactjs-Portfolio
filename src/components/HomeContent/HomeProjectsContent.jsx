import React, { useState } from "react";
import ShowProjects from "../ShowProjects";

function HomeProjectsContent() {
    function NavigationArrows() {
        return (
            <>
                <button
                    onClick={handlePrev}
                    className=" absolute text-[#bcb4b4] right-20 top-8 transform  -translate-y-1/2 swiper-button-prev
                             bg-[#1e1e1e] disabled:bg-[#1e1e1e80] disabled:text-[#bcb4b4a3] p-4 rounded-md"
                    disabled={currentStartIndex === 0}
                >
                    &#9664; {/* Left arrow symbol */}
                </button>

                <button
                    onClick={handleNext}
                    className="absolute text-[#bcb4b4] right-5 top-8 transform bg-[#1e1e1e] p-4 rounded-md -translate-y-1/2
                                 swiper-button-next disabled:bg-[#1e1e1e80] disabled:text-[#bcb4b4a3]"
                    disabled={currentStartIndex >= totalProjects - slidesToShow}
                >
                    &#9654; {/* Right arrow symbol */}
                </button>
            </>
        );
    }
    const [projectsLength, setProjectsLength] = useState(0);

    const handleDataFromChild = (value) => {
        setProjectsLength(value);
    };

    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const slidesToShow = 3;
    const totalProjects = projectsLength;

    const handleNext = () => {
        if (currentStartIndex < totalProjects - slidesToShow) {
            setCurrentStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentStartIndex > 0) {
            setCurrentStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="h-[988px] py-[100px] w-full flex  justify-center  items-center">
            <div className="mx-auto text-center w-[1200px] text-[#bcb4b4]  flex flex-col justify-center items-center">
                <div>
                    <p className="text-[20px] font-['Roboto mono']">
                        some of my recent works
                    </p>
                    <h2 className="text-[60px] uppercase font-bold font-['Montserrat']">
                        Projects
                    </h2>
                </div>

                <div className="pt-[80px] mx-auto overflow-hidden w-[1200px] min-h-[554px] relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${
                                currentStartIndex * (100 / slidesToShow)
                            }%)`,
                        }}
                    >
                        <ShowProjects onSendData={handleDataFromChild} />
                    </div>

                    {/* Navigation Buttons */}
                    {totalProjects <= 3 ? null : <NavigationArrows />}
                </div>
            </div>
        </div>
    );
}

export default HomeProjectsContent;
