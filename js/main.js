var writeThisToDom = document.getElementById("container");

document.addEventListener("click", function() {		// temporarily listening to the whole doc
	var publicInventory = CarLot.getInventory();
	console.log(publicInventory);
	carsForDom = "";
	for (var i = 0; i < publicInventory.length; i++) {
		carsForDom += `<div class="carCard">`;
		carsForDom += `<table class="table">`;
		carsForDom += `<div>${publicInventory[i].make}</div>`;
        carsForDom += `<div>${publicInventory[i].model}</div>`;
        carsForDom += `<div>${publicInventory[i].year}</div>`;
        carsForDom += `<div>$${publicInventory[i].price}</div>`;
        carsForDom += `<div>${publicInventory[i].description}</div>`;
        carsForDom += `</table>`;
        carsForDom += `</div>`;
        if (([i]+1) % 3 === 0 && [i] > 1) {
        	carsForDom += `<br>`;
        }
	}
	writeThisToDom.innerHTML += carsForDom;
});

function populatePage (inventory) {
  CarLot.loadInventory();

}