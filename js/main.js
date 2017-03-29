var CarLot = (function(cArray) {

var container = document.getElementById("container");
var carCard = document.getElementsByName("car-card");

cArray.populatePage = function() {
	var publicInventory = CarLot.getInventory();
	carsForDom = "";
	for (var i = 0; i < publicInventory.length; i++) {
		carsForDom += `<div class="col-md-4 car-card">`;
        carsForDom += `<tr>`;
		carsForDom += `<td><div class="make">${publicInventory[i].make}</div></td>`;
        carsForDom += `<td><div class="yearAndModel">${publicInventory[i].year} ${publicInventory[i].model}</div></td>`;
        carsForDom += `<div class="row">`
        carsForDom += `<div class="col-md-12">`;
        carsForDom += `<a href="#" class="thumbnail">`;
        carsForDom += `<img src="images/${publicInventory[i].make}.jpg" alt="Vehicle Image">`;
        carsForDom += `</a>`;
        carsForDom += `</div>`;
        carsForDom += `</div>`;
        carsForDom += `<td>$${publicInventory[i].price}</td>`;
        carsForDom += `<td><div class="descrip-div">${publicInventory[i].description}</div></td>`;
        carsForDom += `</tr>`;
        carsForDom += `</div>`;
	}
	container.innerHTML += carsForDom;
};

    return cArray;

})(CarLot || {});