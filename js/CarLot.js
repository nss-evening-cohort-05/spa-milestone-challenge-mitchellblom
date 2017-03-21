var CarLot = (function (cArray) {

  var inventory = [];
  var inventoryLoader = new XMLHttpRequest();


    loadInventory = function (callback) {	// data becomes callback
      	console.log(callback);
    };

function executeOnLoad() {
    var data = JSON.parse(this.responseText);
    console.log("getting to execute...");
    loadInventory(data);
}

function executeOnFail() {
    alert("Page failed to load.");
}

inventoryLoader.addEventListener("load", executeOnLoad);
inventoryLoader.addEventListener("error", executeOnFail);
inventoryLoader.open("GET", "inventory.json");
inventoryLoader.send();

	return cArray;

})(CarLot || {});