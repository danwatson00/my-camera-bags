import React from 'react';
import "./HomeIntro.css";



class HomeIntro extends React.Component {

    render() {
        return (
            <div className="homeIntro">
                <div id="intro-div"><h1 id="intro-header">Welcome to My Camera Bags</h1>
                    <p id="intro-p">My Camera Bags is a tool for photographers to organize and reference their photography gear. Login with your Google Account and begin sorting your gear into 'camera bags' so you have all the info you need to help you prepare for your photography shoots. Create a different bag for each different type of shoot, scenario, enviorment you work with.</p>
                </div>
            </div>
        );
    }
}

export default HomeIntro;