var gameRunning = false;
var turnOrder = 0;
var gameLength = 0;

function StartGame(){
	if (!gameRunning){
		//console.log("Game starting!");
		ResetGame();
		gameRunning=true;
		gameLength=0;
	}
	else{
		//console.log("Game already running!");
		return;
	}
}

function ResetGame(){
	for(var i = 0; i < 9; i++){
		document.getElementsByClassName('all')[i].innerHTML = "";
	}
	gameLength=0;
}

function SelectBox(box){
	if (turnOrder==0){
		playerX(box);
	}
	if (turnOrder==1)
	{
		playerO(box);
	}
}

function CheckDraw(){
	gameLength++;
	console.log(gameLength);
	if (gameLength==9){
		gameRunning=false;
		alert("Draw!");
	}
}
	
function playerX(box){
	if (!gameRunning){
		//console.log("Game isn't running!");
		return;
	}
	else {
		if (document.getElementById(box).innerHTML == ""){
			document.getElementById(box).innerHTML="x";
			//console.log("Taking spot!");
			CheckBoard(box, "x");
			turnOrder=1;
			CheckDraw();
		}
		else {
			//console.log("Spot already occupied!");
		}
	}
}

function playerO(box){
	if (!gameRunning){
		//console.log("Game isn't running!");
		return;
	}
	else {
		if (document.getElementById(box).innerHTML == ""){
			document.getElementById(box).innerHTML="o";
			//console.log("Taking spot!");
			CheckBoard(box, "o");
			turnOrder=0;
			CheckDraw();
		}
		else {
			//console.log("Spot already occupied!");
		}
	}
}

function CheckBoard(box, player){
	if (document.getElementById(box).className.includes("top")){
		CheckRow('top', player);
	}
	if (document.getElementById(box).className.includes("mid")){
		CheckRow('mid', player);
	}
	if (document.getElementById(box).className.includes("bot")){
		CheckRow('bot', player);
	}
	if (document.getElementById(box).className.includes("right")){
		CheckRow('right', player);
	}
	if (document.getElementById(box).className.includes("left")){
		CheckRow('left', player);
	}
	if (document.getElementById(box).className.includes("center")){
		CheckRow('center', player);
	}
	if (document.getElementById(box).className.includes("desc")){
		CheckRow('desc', player);
	}
	if (document.getElementById(box).className.includes("asc")){
		CheckRow('asc', player);
	}
	else {
		console.log("placed at ID: "+box);
	}
}

function CheckRow(row, player){
	var victoryCount = 0;
	for(var i = 0; i < 3; i++){
		if (document.getElementsByClassName(row)[i].innerHTML==player){
			//console.log(player+" is present on "+row+" ("+(victoryCount+1)+")");
			victoryCount++;
			if(victoryCount==3){
				gameRunning=false;
				alert("Player "+player+" has won!");
				gameLength=0;
			}
		}
		else{
			return;
		}
	}
}
