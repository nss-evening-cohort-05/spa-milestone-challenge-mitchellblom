var CarLot = (function(cArray) {

    var userInputTextbox = document.getElementById("input-text");
    var carCard = document.getElementsByClassName("car-card");

    cArray.removeClickedClass = function(e) {
        for (var i = 0; i < cArray.getInventory().length; i++) {
            carCard[i].classList.remove("clicked");
        }
    };

    cArray.addClickedClass = function(e) {
        if (e.target.classList.value === "car-card") {
            for (var j = 0; j < cArray.getInventory().length; j++) {
                e.target.classList.add("clicked");
            }
        } else if (e.target.parentNode.classList.value === "car-card") {
            e.target.parentNode.classList.add("clicked");
        }
    };

    cArray.linkDescrip = function(e) {
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

    cArray.clearTempValues = function(e) {
        clickedDescrip.innerHTML = userInputTextbox.value;
        userInputTextbox.onkeydown = function() {
            if (window.event.keyCode === 13) {
                clickedDescrip = "";
                userInputTextbox.value = "";
            }
        }
    };

    return cArray;

})(CarLot || {});