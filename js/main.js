var writeThisToDom = document.getElementById("container");

document.addEventListener("click", function() {		// temporarily listening to the whole doc
	var publicInventory = CarLot.getInventory();
	console.log(publicInventory);
	carsForDom = "";
	for (var i = 0; i < publicInventory.length; i++) {
		carsForDom += `<div class="carCard">`;
		carsForDom += `<tr class="col-md-6">`;
		carsForDom += `<td>${publicInventory[i].make}</td>`;
        carsForDom += `<td>${publicInventory[i].model}</td>`;
        carsForDom += `<td>${publicInventory[i].year}</td>`;
        carsForDom += `<td>$${publicInventory[i].price}</td>`;
        carsForDom += `<td>${publicInventory[i].description}</td>`;
        carsForDom += `</tr>`;
        carsForDom += `</div>`;
	}
	writeThisToDom.innerHTML += carsForDom;
});


function populatePage (inventory) {
  CarLot.loadInventory();
  
  // Now that the DOM is loaded, establish all the event listeners needed

}







// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();
