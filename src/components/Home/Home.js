import React from 'react';
import "./Home.css";
import HomeIntro from '../HomeIntro/HomeIntro';
import AllGear from '../AllGear/AllGear';


function Home() {
    return (
            <div className="mainDiv">
                <HomeIntro />
                <AllGear />
                
            </div>
    )
}

export default Home;