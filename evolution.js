function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){
	move();
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
			if(animals[y][x]==="M"){
				worldArray[y][x]=animals[y][x];
			}
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

var animals=new Array();
for(var y1=0;y1<30;y1++){
	animals[y1]=new Array();	
	for(var x1=0;x1<100;x1++){
		animals[y1][x1]=".";	
	}
}
animals[15][50]="M";

/*
//方角
var direction=Math.floor(Math.random()*8);*/

function move(){
	
//左に動かす
for(var m=0;m<30;m++){
	for(var n=0;n<100;n++){
		if(animals[m][n]==="M"){
			animals[m][n-1]="M";
			animals[m][n]=".";
		}
	}
}

	/*switch(direction){
		case 0://左上
			position[m][n]=;
			break;
		case 1://上
			
			break;
		case 2://右上
		
			break;
		case 3://右
			
			break;
		case 4://右下
			
			break;
		case 5:
		
			break;
		case 6:
		
			break;
		case 7:
			
			break;
	}*/
}