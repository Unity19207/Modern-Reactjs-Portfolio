import React, { useEffect } from "react";
import taskManagerProject from "../assets/taskmanagerimage.jpg";
import reactjsPortfolioProject from "../assets/reactjsportfolioimage.jpg";
import portfolioImage from "../assets/portfolioimage.jpg";

const projects = [
    {
        id: 1,
        img: taskManagerProject,
        projectUrl: "https://github.com/Unity19207/TaskManagerApp-Todo",
        title: "Task Manager App",
        description:
            "This is a Task Manager App built using the MERN stack with user authentication.",
    },
    {
        id: 2,
        img: reactjsPortfolioProject,
        projectUrl: "https://github.com/Unity19207/Modern-Reactjs-Portfolio",
        title: "Portfolio in ReactJS",
        description:
            "A personal portfolio built with ReactJS and Tailwind CSS, showcasing my projects and skills.",
    },
    {
        id: 3,
        img: portfolioImage,
        projectUrl: "https://github.com/Unity19207/Personal-Portfolio",
        title: "Basic Portfolio",
        description: "Basic prortfolio built with HTML, CSS & JavaScript.",
    },
];

function ShowProjects({ onSendData }) {
    useEffect(() => {
        const value = projects.length;
        onSendData(value);
    }, []);

    return (
        <>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="carousel-item"
                    style={{
                        minWidth: "380px",
                        maxWidth: "380px",
                        marginRight: "20px",
                        marginBottom: "40px",
                    }}
                >
                    <div className="space-y-5">
                        <a href={project.projectUrl}>
                            <img
                                className="rounded-[12px] w-[374px] h-[394px] border-[3px] border-[#363636]  object-cover overflow-hidden"
                                src={project.img}
                                alt="project img"
                            />
                        </a>
                        <div className="bg-[#1E1E1E] text-left p-[10px] rounded-[12px]">
                            <a href="/">
                                <h3 className="text-[22px] font-bold">
                                    {project.title}
                                </h3>
                            </a>
                            <p className="text-[16px] mt-[10px]">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ShowProjects;
