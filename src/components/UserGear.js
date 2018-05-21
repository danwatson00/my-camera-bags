import React from 'react';
import UserGearCardTemplate from './UserGearCardTemplate';



class UserGear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGearArray: []
        }
    }
    componentDidMount = (props) => {
        fetch(`https://my-camera-bag.firebaseio.com/userItems/json?orderBy="uid"&equalTo=${props.uid}`,
            {
                method: "GET",
            })
            .then(results => {
                return results.json();
            }).then((data) => {
                let stuff = Object.values(data);
                this.setState({
                    userGearArray: stuff
                })

            });
    }
    render() {

        return (
            <div>
                <UserGearCardTemplate data={this.state.userGearArray} />
            </div>



        )
    }
}

export default UserGear;