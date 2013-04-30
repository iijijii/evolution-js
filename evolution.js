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
			worldArray[y][x]=plants[y][x];
			line+=worldArray[y][x];	
		}
		line+="\n";
	}

	world.innerText=line;
}

var plants=new Array();
for(var y=0;y<30;y++){
	plants[y]=new Array();	
	for(var x=0;x<100;x++){
		plants[y][x]=".";	
	}
}

function addPlants(){
	//ジャングルの垂直方向の範囲内の乱数
	var k=Math.floor(Math.random()*10);
	k+=10;
	//ジャングルの水平方向の範囲内の乱数
	var l=Math.floor(Math.random()*10);
	l+=45;
	plants[k][l]="*";

	var i=Math.floor(Math.random()*100);
	var j=Math.floor(Math.random()*30);
	plants[j][i]="*";
	
}