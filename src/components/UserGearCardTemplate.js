import React from 'react';
import UserItemModal from './UserItemModal';
import "./gearCardTemplate.css";



let UserGearCardTemplate = (props) => {

    console.log("UserGearCardTemplate data", props.data);
    console.log("props", props);

    function handleClick(data) {
        console.log("data", data);
        console.log("yolanda", props);
        if (props.auth) {
            let userBagItemObj = {
                "fbID": data.fbID,
                "uid": data.uid
            }

            fetch('https://my-camera-bag.firebaseio.com/userBagItems',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(userBagItemObj)
                })

            window.alert("Added to Your Items")
            console.log("user adding item", props.user, props.auth);
        } else {

            window.alert("Please log in to add items to your account");
        }
    }

    const userItems = props.data.map((item, index) =>
        <div key={index} className="itemCardWrap" >
            <UserItemModal
                itemImageURL={item.itemImageURL}
                itemCategory={item.itemCategory}
                itemSubCategory={item.itemSubCategory}
                itemMake={item.itemMake}
                itemModel={item.itemModel}
                itemDescription={item.itemDescription}
                itemNotes={props.itemNotes}
                itemCondition={props.itemCondition}
                buyNewURL={item.buyNewURL}
                manualURL={item.manualURL} />
        </div>
    )
    return (
        <div className="gearDiv">
            {userItems}
        </div>
    )
}


export default UserGearCardTemplate;


