var player1 = "Player 1";
var player2 = "Player 2";

function rollTheDice() {
	var randonNum1 = Math.floor(Math.random() * 6) + 1;
	var randonNum2 = Math.floor(Math.random() * 6) + 1;
	document.querySelector(".img1").setAttribute("src", "images/dice" + randonNum1 + ".png");
	document.querySelector(".img2").setAttribute("src", "images/dice" + randonNum2 + ".png");
	if (randonNum1 === randonNum2) {
		document.querySelector("h1").innerHTML = player1 + " And " + player2 + " draw!!";
	}
	else if (randonNum1 < randonNum2) {
		document.querySelector("h1").innerHTML = player2 + " WINS ";
	}
	else {
		document.querySelector("h1").innerHTML = player1 + " WINS ";
	}
}

function editNames() {
	player1 = prompt("CHANGE NAME OF PLAYER 1");
	player2 = prompt("CHANGE NAME OF PLAYER 2");
	document.querySelector("p.player1").innerHTML = player1;
	document.querySelector("p.player2").innerHTML = player2;
}