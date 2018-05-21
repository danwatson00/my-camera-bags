import React from 'react';
import "./homeIntro.css";
import GearCardTemplate from './GearCardTemplate';


class AllGear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allGearArray: []
        }
    }
    componentDidMount = () => {
        fetch('https://my-camera-bag.firebaseio.com/items.json',
            {
            method: "GET",
            })
            .then(results => {
                return results.json();  
            }).then((data) => {
                let stuff = Object.values(data);
                this.setState({
                    allGearArray: stuff
                })

            });
    }
    render() {

        return (
            <div>
                <GearCardTemplate data={this.state.allGearArray} />
            </div>

            
                                    
        )
    }
}
                                                     
export default AllGear;