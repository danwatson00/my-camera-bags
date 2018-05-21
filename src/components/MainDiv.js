import React from 'react';
import "./mainDiv.css";
import HomeIntro from './HomeIntro';
import AllGear from './AllGear';
import UserGear from './UserGear';
import AllBags from './AllBags';
import { Route } from 'react-router-dom';

function MainDiv() {
    return (
        <div className="mainDiv">
            <HomeIntro />
            <Route exact path='/' component={AllGear} />
            <Route path='/AllBags' component={AllBags} />
            <Route exact path="/UserGear" render={props => <UserGear user={this.props.user} auth={this.props.auth} {...props} />} />
        </div>
    )
}

export default MainDiv;