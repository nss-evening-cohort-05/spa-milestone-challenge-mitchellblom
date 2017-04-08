var CarLot = (function(cArray) {

	var userInputTextbox = document.getElementById("input-text");

    cArray.activateEvents = function() {

        window.addEventListener("click", function(e) {
            CarLot.removeClickedClass(e);
            CarLot.addClickedClass(e);
            CarLot.linkDescrip(e);
        });

        userInputTextbox.addEventListener("keyup", function() {
            CarLot.clearTempValues();
        });

    };

    return cArray;

})(CarLot || {});