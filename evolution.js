function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){

}

function drawWorld(){
	var row = "";
	var column = new Array(30);
	var ele =document.getElementById("world");

	for(var x=0;x<100;x++){
		row+=".";
	}
	for(var y=0;y<column.length;y++){		
		column[y]=row+"<br>";
	}
	ele.innerHTML=column;
}