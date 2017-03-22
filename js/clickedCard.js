var CarLot = (function(cArray) {

    var carCard = document.getElementsByClassName("car-card");

    window.addEventListener("click", function(e) {
        for (var k = 0; k < cArray.getInventory().length; k++) {
            console.log(carCard[k].classList);
            carCard[k].classList.remove("clicked");
        }
        if (e.target.classList.value === "car-card") {
            for (var j = 0; j < cArray.getInventory().length; j++) {
                // console.log(e);
                e.target.classList.add("clicked");
                // console.log(carCard[j].classList);
            }
            //     console.log("e.target.classList", e.target.classList);
            // //     e.target.classList.add("clicked");
            // // } else if (e.target.parentNode.parentNode.classList.value === "carCard") {
            // //     e.target.parentNode.parentNode.classList.add("clicked");
        }
    });

    return cArray;

})(CarLot || {});