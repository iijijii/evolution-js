function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){
	addPlants();
}

function drawWorld(){
	
	var world =document.getElementById("world");
	var line="";
	var worldArray=new Array();
	for(var y=0;y<30;y++){
		worldArray[y]=new Array();	
		for(var x=0;x<100;x++){
			worldArray[y][x]=".";
			line+=worldArray[y][x];	
		}
		line+="\n";
	}

	world.innerText=line;
}

var plants;

/*function addPlants(){
	var x=Math.floor(Math.random()*100);
	var y=Math.floor(Math.random()*30);
	column[y].charAt[x]="*";
}*/