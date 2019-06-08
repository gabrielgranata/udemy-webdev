var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll('.square');
var colourDisplay = document.getElementById('colourDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {

	setUpModeButtons();
	setUpSquares();
	reset();

}

function reset() {
	colours = generateRandomColours(numSquares);
	//pick a new random colour
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = 'New Colours';
	messageDisplay.textContent = '';
	//change the squares colours
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = "steelblue"
}

function setUpModeButtons() {
	for(var i = 0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener('click', function() {
			//grab colour of clicked saure
			var clickedColour = this.style.backgroundColor;
			//compare colour to pickedColour
			if (clickedColour === pickedColour){
				messageDisplay.textContent = 'Correct!';
				changeColours(clickedColour);
				h1.style.backgroundColor = clickedColour;
				resetButton.textContent = 'Play Again?'
			} else {
				this.style.backgroundColor = '#232323'
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

resetButton.addEventListener('click', function() {
	reset();
});

function changeColours(colour){
	for (var i = 0; i < squares.length; i++){
		//change each square's colour
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour() {
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColour());
	}
	//return array
	return arr;
}

function randomColour() {
	//pick a 'red' from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a 'green' from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a 'blue' from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}