var CarLot = (function(cArray) {

    var inventory = [];
    var inventoryLoader = new XMLHttpRequest();

    loadInventory = function(callback) { // data becomes callback
        console.log(callback.cars.length);
        for (var i = 0; i < callback.cars.length; i++) {
        	inventory.push(callback.cars[i]);
        }
        	console.log("inventory to pass to public: ", inventory);
        	return cArray
    };

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

})(CarLot || {});