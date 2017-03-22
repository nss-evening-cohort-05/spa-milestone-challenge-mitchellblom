var CarLot = (function(cArray) {

    var inventory = [];
    var inventoryLoader = new XMLHttpRequest();

    loadInventory = function(callback) { // data becomes callback
        for (var i = 0; i < callback.cars.length; i++) {
        	inventory.push(callback.cars[i]);
        	console.log("this is where i want to write cars to array");
        }
        	CarLot.populatePage();
    };

    cArray.getInventory = function() {
        return inventory;
    }

    function executeOnLoad() {
        var data = JSON.parse(this.responseText);
        loadInventory(data);
    };

    function executeOnFail() {
        alert("Page failed to load.");
    };

    inventoryLoader.addEventListener("load", executeOnLoad);
    inventoryLoader.addEventListener("error", executeOnFail);
    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();

    return cArray;

})(CarLot || {});