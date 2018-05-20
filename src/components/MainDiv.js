import React from 'react';
import "./mainDiv.css";
import HomeIntro from './HomeIntro';
import AllGear from './AllGear';

function MainDiv() {
    return (
        <div className="mainDiv">
            <HomeIntro />
            <AllGear />
        </div>
    )
}

export default MainDiv;