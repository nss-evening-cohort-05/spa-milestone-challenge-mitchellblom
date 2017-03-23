var CarLot = (function(cArray) {

var container = document.getElementById("container");
var carCard = document.getElementsByName("car-card");

cArray.populatePage = function() {
	var publicInventory = CarLot.getInventory();
	carsForDom = "";
	for (var i = 0; i < publicInventory.length; i++) {
		carsForDom += `<div class="col-md-4">`;
        carsForDom += `<div class="car-card">`;
		carsForDom += `<h3>${publicInventory[i].make}</h3>`;
        carsForDom += `<h5>${publicInventory[i].year} ${publicInventory[i].model}</h5>`;
        carsForDom += `<div></div>`;
        carsForDom += `<div>$${publicInventory[i].price}</div>`;
        carsForDom += `<p class="descrip-div">${publicInventory[i].description}</p>`;
        carsForDom += `</div>`;
        carsForDom += `</div>`;
	}
	container.innerHTML += carsForDom;
};

    return cArray;

})(CarLot || {});