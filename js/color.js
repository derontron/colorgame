var colors = [
	// all red
	"rgb(255, 0, 0)",
	// all red and all green (yellow)
	"rgb(255, 255, 0)",
	// zero red and all green
	"rgb(0, 255, 0)",
	// zero red all green and all blue
	"rgb(0, 255, 255)",
	// zero red zero green 255 blue
	"rgb(0, 0, 255)",
	// all red zero green all blue
	"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");

for (i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
}