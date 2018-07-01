import React from 'react';
import ItemModal from '../ItemModal/ItemModal';
import "./GearCardTemplate.css";



let GearCardTemplate = (props) => {

        console.log("GearCardTemplate data", props.data);
        console.log("props", props);

    function handleClick(data) {
        console.log("data", data);
        console.log("yolanda", props);
        if (props.auth) {
            let userItemObj = {
                "itemCategory": data.itemCategory,
                "itemSubCategory": data.itemSubCategory,
                "uid": data.uid,
                "itemCondition": data.itemCondition,
                "itemDescription": data.itemDescription,
                "itemImageURL": data.itemImageURL,
                "itemMake": data.itemMake,
                "itemModel": data.itemModel,
                "itemNotes": data.itemNotes,
                "manualURL": data.manualURL
            }

            fetch('https://my-camera-bag.firebaseio.com/userItems',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(userItemObj)
                })

            window.alert("Added to Your Items")
            console.log("user adding item", props.user, props.auth);
        } else {

            window.alert("Please log in to add items to your account");
        }
    }
    console.log("Gear Card Props after auth", props)

    const allItems = props.data.map((item, index) =>
        <div key={index} className="itemCardWrap" >
            <ItemModal
                itemImageURL={item.itemImageURL}
                itemCategory={item.itemCategory}
                itemSubCategory={item.itemSubCategory}
                itemMake={item.itemMake}
                itemModel={item.itemModel}
                itemDescription={item.itemDescription}
                buyNewURL={item.buyNewURL}
                manualURL={item.manualURL} />
        </div>
    )
    return (
        <div className="gearDiv">
            {allItems}
        </div>
    )
}


export default GearCardTemplate;


