var CarLot = (function(cArray) {

    var carCard = document.getElementsByClassName("car-card");
    var userInputTextbox = document.getElementById("input-text");

    window.addEventListener("click", function(e) {
        for (var i = 0; i < cArray.getInventory().length; i++) {
            carCard[i].classList.remove("clicked");
        }
        if (e.target.classList.value === "car-card") {
            for (var j = 0; j < cArray.getInventory().length; j++) {
                e.target.classList.add("clicked");
            }
        } else if (e.target.parentNode.classList.value === "car-card") {
            e.target.parentNode.classList.add("clicked");
        }
    });

    window.addEventListener("click", function(e) {
            if (e.target.classList.value === "descrip-div") {
                console.log(userInputTextbox.value);
                userInputTextbox.value = "";
                userInputTextbox.focus();
                // bind input textbox to description text
            }
        });

        return cArray;

})(CarLot || {});