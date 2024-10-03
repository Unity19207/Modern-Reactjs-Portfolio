import React from "react";
import ConnectWithMe from "../ConnectWithMe";

function About() {
    return (
        <>
            <div className="min-h-[2675px] w-full pt-[200px]  pb-[100px] text-[#bcb4b4] ">
                <div className="max-h-[1655px] mx-auto max-w-[1200px] ">
                    <div className=" flex justify-between items-center max-h-[643px] max-w-[1200px] ">
                        <div className="left leading-6 max-h-[554px] max-w-[708px]   ">
                            <p className="text-[22px] font-['Roboto mono'] mb-[25px] ">
                                Hi, I am{" "}
                                <span className="p-[5px] bg-[#1e1e1e] rounded-[8px] ">
                                    Yogesh Ashok Jadhav
                                </span>
                            </p>
                            <h2 className="text-[36px] mb-[30px] font-semibold font-['Montserrat']">
                                A Developer & Tech Enthusiast
                            </h2>
                            <div className="text-[18px] font-['Roboto mono'] mb-[40px] ">
                                <div>
                                    <p>
                                        I am from Pune, India, a city of
                                        innovation and growth. Since my early
                                        years, I have been passionate about
                                        technology and design. I always strive
                                        to create things with a fresh
                                        perspective, and I aim to build
                                        solutions that are practical and
                                        impactful for others.
                                        <br /> <br />
                                        I started coding during my college
                                        years, where I developed a strong
                                        foundation in computer science. Coding,
                                        to me, is a form of art. I love merging
                                        design and functionality through code,
                                        and now I have the opportunity to craft
                                        elegant solutions using technologies
                                        like Java, JavaScript, React, and
                                        MongoDB. I find immense joy in the
                                        process of problem-solving and creating
                                        intuitive user experiences.
                                        <br /> <br />
                                        My vision is to contribute to a world
                                        where technology makes life simpler and
                                        more meaningful. As everything around us
                                        evolves, I believe it’s time to build
                                        more tools and solutions that help
                                        improve the quality of life for
                                        everyone.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-[#bcb4b4]
                                mt-[20px]
                             h-[100%] py-4 px-11 rounded-lg
                             max-w-[237px] max-h-[64px]
                              text-black text-[22px]   border-none"
                            >
                                <a
                                    className="button"
                                    href="https://drive.google.com/file/d/1BwAtJR0Il3HnaNMiqlSvsCk-lm83Fafm/view?usp=sharing"
                                    target="_blank"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                        <div className="right max-w-[472px]  ">
                            {/* <img className="h-[554px] object-cover saturate-0 bg-blend-color-burn" src={aboutphoto} alt="me" /> */}
                        </div>
                    </div>

                    <div className=" max-w-[1200px] pb-[100px]  mt-[150px]">
                        <div className=" mb-[100px]">
                            <h1 className=" text-[36px] uppercase font-semibold font-['Montserrat']">
                                Education
                            </h1>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    School
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem] ">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]  ">
                                        <div className="text-[18px] font-['Roboto mono'] ">
                                            <p>
                                                Shri Shivaji College of
                                                Engineering Parbhani
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    Collage
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem] ">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e] ">
                                        <div className="text-[18px] font-['Roboto mono']">
                                            <p>
                                                JSPM Jaywantrao Sawant College
                                                of Engineering Hadapsar Pune
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    University
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e] ">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>
                                                Savitribai Phule Pune University
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" mb-[100px]">
                            <h1 className=" text-[36px] uppercase font-semibold font-['Montserrat']">
                                My Skills
                            </h1>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    FrontEnd
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>HTML</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>JavaScript</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>REACT-Js</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    BackEnd
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>Node-Js</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>Express-Js</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    Database
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>Mysql</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>MongoDB</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>RDBMS & NoSQL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    Other
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>Git-version control</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>Network Security</p>
                                        </div>
                                    </div>
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>Testing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mb-[100px]">
                            <h1 className=" text-[36px] uppercase font-semibold font-['Montserrat']">
                                Internship
                            </h1>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    June-2020
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>Cyber Security | Internship</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    May-2024
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>
                                                React Js Development |
                                                Internship
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mb-[100px]">
                            <h1 className=" text-[36px] uppercase font-semibold font-['Montserrat']">
                                Certifications
                            </h1>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    Sept-2023
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>
                                                JavaScript | Lets Upgrade
                                                Certificate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-[20px] text-start relative flex gap-32 items-center">
                                <h1 className="title text-[24px] font-semibold font-['Montserrat']">
                                    Dec-2023
                                </h1>
                                <div className="items flex absolute gap-[1.5rem] left-[11rem]">
                                    <div className="item p-[10px] rounded-[8px] bg-[#1e1e1e]">
                                        <div className=" text-[18px] font-['Roboto mono']">
                                            <p>
                                                JAVA 17 Masterclass | Udemy
                                                Certificate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ConnectWithMe />
                </div>
            </div>
        </>
    );
}

export default About;
