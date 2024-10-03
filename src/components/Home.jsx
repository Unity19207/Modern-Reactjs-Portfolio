import React from "react";
import HomeTopContent from "./HomeContent/HomeTopContent";
import HomeAboutContent from "./HomeContent/HomeAboutContent";
import HomeServicesContent from "./HomeContent/HomeServicesContent";
import HomeProjectsContent from "./HomeContent/HomeProjectsContent";
import ConnectWithMe from "./ConnectWithMe";

function Home() {
    return (
        <>
            <HomeTopContent />
            <HomeAboutContent />
            <HomeServicesContent />
            <HomeProjectsContent />
            <div className="sm:my-[0px] mt-[100px] mb-[200px]">
                <ConnectWithMe />
            </div>
        </>
    );
}

export default Home;
