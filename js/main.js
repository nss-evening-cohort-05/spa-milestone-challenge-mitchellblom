var CarLot = (function(cArray) {

var container = document.getElementById("container");
var carCard = document.getElementsByName("car-card");

cArray.populatePage = function() {
	var publicInventory = CarLot.getInventory();
	carsForDom = "";
	for (var i = 0; i < publicInventory.length; i++) {
		carsForDom += `<div class="car-card">`;
		carsForDom += `<table class="table">`;
		carsForDom += `<div>${publicInventory[i].make}</div>`;
        carsForDom += `<div>${publicInventory[i].model}</div>`;
        carsForDom += `<div>${publicInventory[i].year}</div>`;
        carsForDom += `<div>$${publicInventory[i].price}</div>`;
        carsForDom += `<p class="descrip-div">${publicInventory[i].description}</p>`;
        carsForDom += `</table>`;
        carsForDom += `</div>`;
        if (([i]+1) % 3 === 0) {
        	carsForDom += `<br>`;
        }
	}
	container.innerHTML += carsForDom;
};

    return cArray;

})(CarLot || {});