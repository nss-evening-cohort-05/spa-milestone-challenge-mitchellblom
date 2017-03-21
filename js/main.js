
document.addEventListener("click", function() {		// temporarily listening to the whole doc
	var publicInventory = CarLot.getInventory();
	console.log(publicInventory);
	for (var i = 0; i < publicInventory.length; i++) {
		carsForDom = "";
		carsForDom += <p>${}
	}
});


function populatePage (inventory) {
  CarLot.loadInventory();
  
  // Now that the DOM is loaded, establish all the event listeners needed

}







// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();
