import React from 'react';
import BagModal from '../BagModal/BagModal';
import "./AllBagsTemplate.css";



let AllBagsTemplate = (props) => {

    console.log("BagsTemplate data", props.data);
    console.log("props", props);


    const allBags = props.data.map((item, index) =>
        <div key={index} className="allBagsWrap" >
            <BagModal
                title={item.title}
                id={item.id}
                />
        </div>
    )
    return (
        <div className="gearDiv">
            {allBags}
        </div>
    )
}


export default AllBagsTemplate;