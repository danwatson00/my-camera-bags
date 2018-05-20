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
        fetch('https://my-camera-bag.firebaseio.com/items.json')
            .then(results => {
                return results.json();  
            }).then((data) => {
                this.setState({
                    allGearArray: data
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