import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div
                className="w-full text-[#bcb4b4] bg-[#1e1e1e] h-[393px] py-[100px] text-[18px]  font-['Roboto mono']
               "
            >
                <div className="h-[199px]  max-w-[1200px] w-[90%]  mx-auto gap-[3rem]   flex justify-between items-start ">
                    <div className="w-[444px] place-content-start space-y-2">
                        <h1 className="text-[35px] font-semibold font-['Montserrat']">
                            Yogesh Jadhav
                        </h1>
                        <div className=" text-wrap leading-[23px] ">
                            <p>
                                Computer Science Graduate skilled in <br />
                                Java & MERN Stack Passionate about technology A
                                quick learner and team player always eager to
                                grow and contribute to innovative IT solutions
                            </p>
                        </div>
                    </div>
                    <div className="footer__col2">
                        <div className="space-y-2">
                            <h2 className="text-[24px] font-semibold font-['Montserrat']">
                                Important Links
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__col3">
                        <div className="space-y-2">
                            <h2 className="text-[24px] font-semibold font-['Montserrat']">
                                Contact Info
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="tel:+917218208115"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        +917218208115
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:yajadhav19@gmail.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        yajadhav19@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://maps.app.goo.gl/W2ajdfrM38hyhbyYA"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Pune,
                                        <br />
                                        Maharashtra,
                                        <br />
                                        India
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__col4">
                        <div className="space-y-2">
                            <h2 className="text-[24px] font-semibold font-['Montserrat']">
                                Social Links
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://github.com/Unity19207"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/yogesh19/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/yogesh_jadhav.19/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[#262626] mx-auto w-full   h-[44px] flex justify-center items-start  p-[10px] mt-[50px]">
                    <div className="w-[1200px]">
                        <div className="">
                            <p>
                                © 2024 - Yogesh Jadhav | Created By{" "}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/Unity19207"
                                >
                                    YAJ
                                </a>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
