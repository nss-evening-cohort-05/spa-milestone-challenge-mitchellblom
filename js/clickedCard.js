var CarLot = (function(cArray) {


    cArray.clickedCard = function(e) {
        var carCard = document.getElementsByClassName("car-card");
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
    };

    cArray.linkDescrip = function(e) {
        var userInputTextbox = document.getElementById("input-text");
        if (e.target.classList.value === "descrip-div") {
            userInputTextbox.value = "";
            userInputTextbox.focus();
            clickedDescrip = e.target;
            userInputTextbox.value = clickedDescrip.innerHTML;
            
        } else {
            clickedDescrip = "";
            userInputTextbox.value = "";
        }
    };

    return cArray;

})(CarLot || {});