

{/*               My Card Below            


<div class="itemCard-wrap">
    <div id="${item}-card" class="itemCard">
        <img src="${currentItem.itemImageURL}" class="listImage" alt="${currentItem.itemMake} ${currentItem.itemModel} image">
            <h4 class="list-headline">${currentItem.itemMake} ${currentItem.itemModel}</h4>
            <button id="${item}" class="addItem-btn btn btn-outline-secondary">Add Item To My Gear</button>
            <button id="${item}-infobtn" class="info-btn btn  btn btn-outline-secondary" data-toggle="modal" data-target="#${item}-infoModal">More Info</button>
                                </div>
    </div>

    {/* More Info Modal */}
<div class="modal fade modalStyle" id="${item}-infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title" id="exampleModalLabel">
                    <h4>${currentItem.itemMake} ${currentItem.itemModel}</h4>
                    <small>Item Category: ${currentItem.itemCategory}: ${currentItem.itemSubCategory}</small>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div>
                    <img src="${currentItem.itemImageURL}" class="modal-image" alt="${currentItem.itemMake} ${currentItem.itemModel} image"></img>
                    <h5 class="infoModal-h5">Item Description</h5>
                    <p>${currentItem.itemDescription}</p></div>
                <h5>Product Manual</h5><p><a href="${currentItem.itemManualURL}">${currentItem.itemMake} ${currentItem.itemModel} Manual</a></p>

            </div>

            <div class="modal-footer">
                <a type="button" class="btn btn-default buy-btn" href="${currentItem.buyNewURL}" target="_blank">Buy New</a>
                <button type="button" id="${item}" class="btn btn-danger deleteItem-btn" data-dismiss="modal">Delete</button>
                <button id="${item}" data-toggle="modal" data-target="#${item}-editItemModal" class="btn btn-success">Edit Item</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>

    {/*Edit Item Modal */}
    <div class="modal fade modalStyle" id="${item}-editItemModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Your Item</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="itemModalForm" class="modal-body">

                    <label>Item Make:</label><input type="text" class="modal-input" name="${currentItem.itemMake}" value="${currentItem.itemMake}" id="${item}itemMake-input"><br>
                        <label>Item Model:</label><input type="text" class="modal-input" name="${currentItem.itemModel}" value="${currentItem.itemModel}" id="${item}itemModel-input"><br>
                            <label>Item Category</label><input type="text" class="modal-input" name="${currentItem.itemCategory}" value="${currentItem.itemCategory}" id="${item}itemCat-input"><br>
                                <label>Item SubCategory:</label><input type="text" class="modal-input" name="${currentItem.itemSubCategory}" value="${currentItem.itemSubCategory}" id="${item}itemSub-input"><br>
                                    <label>Item Image URL:</label><input type="text" class="modal-input" name="${currentItem.itemImageURL}" value="${currentItem.itemImageURL}" id="${item}itemImageURL-input"><br>
                                        <label>Buy New URL:</label><input type="text" class="modal-input" name="${currentItem.buyNewURL}" value="${currentItem.buyNewURL}" id="${item}buyNew-input"><br>
                                            <label>Item Manual/Instructions URL:</label><input type="text" class="modal-input" name="${currentItem.itemManualURL}" value="${currentItem.itemManualURL}" id="${item}manual-input"><br>
                                                <label>Item Description:</label><input type="text" class="modal-input" name="${currentItem.itemDescription}" value="${currentItem.itemDescription}" id="${item}desc-input"><br>
                                            
                                        </form>
                                                    <div class="modal-footer">
                                                        <button type="button" id="${item}" class="btn btn-secondary deleteItem-btn">Delete</button>
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                        <button type="submit" id="${item}" class="btn btn-primary submitEdit-btn" data-dismiss="modal">Submit</button>
                                                    </div>
                                </div>
                            </div>