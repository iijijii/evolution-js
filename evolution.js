function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){
	//move();
	addPlants();	
}

function drawWorld(){
	
	var world =document.getElementById("world");
	var line="";//表示用
	var worldArray=new Array();

	for(var y=0;y<30;y++){
		worldArray[y]=new Array();	
		for(var x=0;x<100;x++){			
			worldArray[y][x]=plants[y][x];		
			if(x==firstAnimal.a&&y==firstAnimal.b){
				worldArray[y][x]="M";
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

var animal=function(direction,a,b){
	this.direction=direction;
	this.a=a;//x
	this.b=b;//y
}

var animals=new Array();
var firstAnimal=new animal(1,50,15);//TODO方角,配列に入れる


//方角
/*var direction=Math.floor(Math.random()*8);*/
/*
function move(animal){
	
for(var m=0;m<30;m++){
	for(var n=0;n<100;n++){
		
			switch(animal.direction){
				case 0://左上
					animals[m-1][n-1]="M";
					break;
				case 1://上
					animals[m-1][n]="M";
					break;
				case 2://右上
					animals[m-1][n+1]="M";
					break;
				case 3://右
					animals[m][n-1]="M";
					break;
				case 4://右下
					
					break;
				case 5:
				
					break;
				case 6:
				
					break;
				case 7:
					animals[m][n-1]="M";
					break;
			}
			
			animals[m][n]=".";
		}
	}
}


}*/