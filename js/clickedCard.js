var CarLot = (function(cArray) {

    var carCard = document.getElementsByClassName("car-card");

    window.addEventListener("click", function(e) {
        for (var i = 0; i < cArray.getInventory().length; i++) {
            // console.log(carCard[i].classList);
            carCard[i].classList.remove("clicked");
        }
        if (e.target.classList.value === "car-card" ) {
            for (var j = 0; j < cArray.getInventory().length; j++) {
                e.target.classList.add("clicked");
            }
        }
            else if (e.target.parentNode.classList.value === "car-card") {
                console.log("table click firing parentNode: ", e.target.parentNode);
                e.target.parentNode.classList.add("clicked");

            //     console.log("e.target.classList", e.target.classList);
            // //     e.target.classList.add("clicked");
            // // } else if (e.target.parentNode.parentNode.classList.value === "carCard") {
            // //     e.target.parentNode.parentNode.classList.add("clicked");
    }
    });

    return cArray;

})(CarLot || {});