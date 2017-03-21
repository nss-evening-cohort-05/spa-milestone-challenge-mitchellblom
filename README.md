# NSS Single Page Application - Milestone Challenge

### GOAL

 - Have an application where you can update the description and availability of each car in your inventory. 
 - Use the Bootstrap grid to lay out your HTML structure.

### Behavior

<!-- 1. Create an array of cars in the `inventory.json` file. 
	- Put at least three cars in the array. -->
1. Use an XHR to load the contents of the JSON file, 
	- On page load.
	- Parse them into a native JavaScript object.
1. Loop over your array of cars and build up an HTML string to build a card for each car.
	- Use Bootstrap to create rows.
	- Each row should contain 3 columns.
	- <!-- Have a parent element with a class of `container`. --> 
		__Hint:__ You must build up the entire string of columns/rows before injecting into the DOM. 
		Use a counter variable to know when to close a row after three columns.
1. Put a standard Bootstrap navbar element at the top of your page.
1. Put a text input field in the navigation bar.
1. Make sure you display all properties of the car in the DOM. 
	- Basic styling is up to you.
1. Make sure that each car card element has a CSS class which adds a black border around it.
1. Change the width of the border to a higher value, 
	- When you click on one of the car elements.
	- Change the background color to any other color of your choosing
1. Clear the value of the text input in the navbar, 
	- On click of the car element
	- Put the cursor in the text input.
1. Bind exactly only the description of the selected car to the navbar's text input
	- When type is entered into it

### Technical Requirements

1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
1. IIFE ONE:
	Add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable.
	Expose a public getter to read the array of cars (e.g. `getInventory`).
1. IIFE TWO 
	Augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
1. IIFE THREE 
	Augment the object with two more functions. 
		First function resets the border thickness and background color for each car element back to the original values. Second function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    1. A car DOM element that was clicked on.
    1. A color name of your choice (see behavior requirement 5 above).
1. Have a complete Readme

