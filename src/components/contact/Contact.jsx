import React from "react";

function Contact() {
    return (
        <>
            <div className=" min-h-[937px] sm:w-full py-[150px] text-[#bcb4b4] ">
                <div className="container sm:max-w-[288px] max-w-[1200px] mx-auto ">
                    <div className=" section-title text-center">
                        <p className="text-[18px] sm:text-[12px] font-['Roboto mono']">
                            get in touch
                        </p>
                        <h2 className=" text-[60px] sm:text-[36px] uppercase font-semibold font-['Montserrat']">
                            contact
                        </h2>
                    </div>
                    <div className=" mt-[70px] flex sm:flex-col flex-wrap justify-between gap-[5rem]">
                        <div className="left w-[100%] max-w-[500px]">
                            <div className=" p-[12px] bg-[#1e1e1e] flex justify-start items-center rounded-[8px] mb-[2rem] gap-[2rem]  ">
                                <div className="icon  bg-[#262626] p-[1.3rem] flex justify-center items-center rounded-3xl">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                                    </svg>
                                </div>
                                <div className="info  font-['Roboto mono']">
                                    <div className=" max-w-[500px] mx-auto sm:text-[14px] text-[1.3rem]    ">
                                        <p>+91 7218208115</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-[12px] bg-[#1e1e1e] flex justify-start items-center rounded-[8px] mb-[2rem] gap-[2rem] ">
                                <div className="icon  bg-[#262626] p-[1.3rem] flex justify-center items-center rounded-3xl">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                                    </svg>
                                </div>
                                <div className="info font-['Roboto mono']">
                                    <div className=" max-w-[500px] mx-auto sm:text-[14px] text-[1.3rem]    a ">
                                        <p>yajadhav19@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-[12px] bg-[#1e1e1e] flex justify-start items-center rounded-[8px] mb-[2rem] gap-[2rem] ">
                                <div className="icon  bg-[#262626] p-[1.3rem] flex justify-center items-center rounded-3xl ">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                    </svg>
                                </div>
                                <div className="info font-['Roboto mono']">
                                    <div className=" max-w-[500px] mx-auto sm:text-[14px] text-[1.3rem]    a ">
                                        <p>Pune, Maharashtra, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right sm:px-5 sm:py-5 w-[100%] max-w-[500px] rounded-[12px]">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="w-[100%]"
                            >
                                <div className="form-group w-[100%] mb-[2rem] ">
                                    <label htmlFor="name text-[1.8rem]">
                                        Your Name
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-[100%] sm:text-[18px]  text-[1rem] p-[1.2rem] bg-[#1e1e1e] outline-none
                                            border-none rounded-[8px] mt-[1rem] "
                                        />
                                    </label>
                                </div>
                                <div className="form-group w-[100%] mb-[2rem] ">
                                    <label htmlFor="email text-[1.8rem]">
                                        Your Email
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-[100%] sm:text-[18px] text-[1rem] p-[1.2rem] bg-[#1e1e1e] outline-none border-none rounded-[8px] mt-[1rem]"
                                        />
                                    </label>
                                </div>
                                <div className="form-group w-[100%] mb-[2rem] ">
                                    <label htmlFor="message text-[1.8rem]">
                                        Your Message
                                        <textarea
                                            type="text"
                                            id="message"
                                            name="message"
                                            className="w-[100%] sm:text-[18px] text-[1rem] p-[1.2rem] bg-[#1e1e1e] outline-none border-none rounded-[8px] mt-[1rem]"
                                        ></textarea>
                                    </label>
                                </div>
                                <button
                                    className="bg-[#bcb4b4] sm:text-[20px]  sm:py-3 sm:px-10
                             h-[100%] py-2 px-7 rounded-lg  text-black text-[22px]   border-none"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" contactbackground relative max-h-[400px] min-h-[400px] text-[#bcb4b4] ">
                <div className="absolute w-full h-[400px] opacity-70 bg-[#1e1e1e]"></div>
                <div className="container relative min-h-[400px] z-10 ">
                    <div
                        className="map__card absolute sm:right-[4%] sm:bottom-[4%] right-[20%] bottom-[10%] p-[30px]
                     bg-[#1e1e1e] w-[100%] max-w-[300px] rounded-[12px]"
                    >
                        <h3 className=" text-[1.5rem] mb-[0.6rem]">
                            Here is me
                        </h3>
                        <div className=" max-w-[300px] mx-auto text-[1.1rem]    ">
                            <p>Pune, Maharashtra, India</p>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/W2ajdfrM38hyhbyYA"
                            target="_blank"
                            rel="noreferrer"
                            className="block text-[0.9rem] mt-[1rem] underline"
                        >
                            Open in google map
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
