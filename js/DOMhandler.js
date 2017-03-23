var CarLot = (function(cArray) {

cArray.activateEvents = function() {

	var container = document.getElementById("container");
    var carCard = document.getElementsByClassName("car-card");
    var userInputTextbox = document.getElementById("input-text");

    window.addEventListener("click", function(e) {
        CarLot.clickedCard(e);
        CarLot.linkDescrip(e);
    });

    userInputTextbox.addEventListener("keyup", function() {
                clickedDescrip.innerHTML = userInputTextbox.value;
                userInputTextbox.onkeydown = function() {
                    if (window.event.keyCode === 13) {
                        clickedDescrip = "";
                        userInputTextbox.value = "";
                    }
                }
            });

    };

    return cArray;

})(CarLot || {});