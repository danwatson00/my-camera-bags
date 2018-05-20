import React from 'react';
import ItemModal from './ItemModal';



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
            <div id={item} className="itemCard">
                <ItemModal
                    imageURL={item.itemImageURL}
                    category={item.itemCategory}
                    subCategory={item.itemSubCategory}
                    make={item.itemMake}
                    model={item.itemModel}
                    description={item.itemDescription}
                    buyNewURL={item.buyNewURL}
                    manualURL={item.manualURL} />
                <button id={item + "userItemObj"} class="addItem-btn btn btn-outline-secondary">Add To My Gear</button>
                <button id={item + "moreInfo"} class="info-btn btn  btn btn-outline-secondary" data-toggle="modal" data-target="#${item}-infoModal">More Info</button>
            </div>
        </div>
    )
    return (
        <div className="">
            {allItems}
        </div>
    )
}


export default GearCardTemplate;


