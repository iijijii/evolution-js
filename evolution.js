function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){
	move(firstAnimal);
	addPlants();	
}

function drawWorld(){
	
	var world =document.getElementById("world");
	var line="";//表示用
	var worldArray=new Array();

	for(var y=0;y<30;y++){
		worldArray[y]=new Array();	
		for(var x=0;x<100;x++){			
			worldArray[y][x]=".";
			for(var p=0;p<plants.length;p++){
				if(x==plants[p].c&&y==plants[p].d){
					worldArray[y][x]="*";
				}
			}	
			if(x==firstAnimal.a&&y==firstAnimal.b){
				worldArray[y][x]="M";
			}
			line+=worldArray[y][x];
			
		}
		line+="\n";
	}


	world.innerText=line;
}

var plant=function(c,d){
	this.c=c;//x
	this.d=d;//y
}

var plants=new Array();

function addPlants(){
	//ジャングルの垂直方向の範囲内の乱数
	var k=Math.floor(Math.random()*10);
	k+=10;
	//ジャングルの水平方向の範囲内の乱数
	var l=Math.floor(Math.random()*10);
	l+=45;
	var plant1=new plant(l,k);
	plants.push(plant1);

	var i=Math.floor(Math.random()*100);
	var j=Math.floor(Math.random()*30);
	var plant2=new plant(i,j);
	plants.push(plant2);
	
}

var animal=function(direction,a,b){
	this.direction=direction;
	this.a=a;//x
	this.b=b;//y
}

var animals=new Array();

//方角
var directions=Math.floor(Math.random()*8);

var firstAnimal=new animal(directions,50,15);//TODO,配列に入れる


function move(animal){
	
	switch(animal.direction){
		case 0://左上
			animal.a=animal.a-1;
			animal.b=animal.b-1;
			break;
		case 1://上
			animal.b=animal.b-1;
			break;
		case 2://右上
			animal.a=animal.a+1;
			animal.b=animal.b-1;
			break;
		case 3://右
			animal.a=animal.a+1;
			break;
		case 4://右下
			animal.a=animal.a+1;
			animal.b=animal.b+1;
			break;
		case 5://下
			animal.b=animal.b+1;
			break;
		case 6://左下
			animal.b=animal.b+1;
			animal.a=animal.a-1;
			break;
		case 7://左
			animal.a=animal.a-1;
			break;
	}
}