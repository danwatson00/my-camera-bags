import React from 'react'
import './AllBags.css'
import AllBagsTemplate from '../AllBagsTemplate/AllBagsTemplate'


class AllBags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allBagsArray: []
        }
    }
    componentDidMount = () => {
        fetch('https://my-camera-bag.firebaseio.com/userBags.json',
            {
                method: "GET",
            })
            .then(results => {
                return results.json();
            }).then((data) => {
                let stuff = Object.values(data);
                console.log("stuff", stuff);
                this.setState({
                    allGearArray: stuff
                })

            });
    }
    render() {

        return (
            <div>
                <AllBagsTemplate data={this.state.allBagsArray} />
            </div>



        )
    }
}

export default AllBags;