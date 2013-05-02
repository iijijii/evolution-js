function skipDay(){
	updateWorld();
	drawWorld();
	testEnergy(firstAnimal);
}

function updateWorld(){
	//die(firstAnimal);
	turn(firstAnimal);
	move(firstAnimal);
	eat(firstAnimal);
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
			if(plants[y][x]==1){
				worldArray[y][x]="*";
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
/*********************plant*****************************/
var flag=0;

var plants=new Array();
for(var y=0;y<30;y++){
 	plants[y]=new Array();  
  	for(var x=0;x<100;x++){
    plants[y][x]=flag;  
  	}
}

function addPlants(){
	//ジャングルの水平方向の範囲内の乱数
	flag=1;
	var k=generateRandom(9);
	k+=45;
	//ジャングルの垂直方向の範囲内の乱数
	var l=generateRandom(9);
	l+=10;
	plants[l][k]=flag;
	
	var i=generateRandom(99);
	var j=generateRandom(29);
	plants[j][i]=flag;
	

}
/******************animal*********************/
var animal=function(direction,a,b,gene,energy){
	this.direction=direction;
	this.a=a;//x
	this.b=b;//y
	this.gene=gene;
	this.energy=energy;
}

var animals=new Array();

//方角
var directions=generateRandom(7);
var firstGene=generateGene();
var　firstEnergy=200;

var firstAnimal=new animal(directions,50,15,firstGene,firstEnergy);//TODO,配列に入れる


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

	if(animal.a>99){
		animal.a-=100;
	}
	if(animal.a<0){
		animal.a+=100;
	}
	if(animal.b>29){
		animal.b-=30;
	}
	if(animal.b<0){
		animal.b+=30;
	}

	animal.energy-=50;
}


function turn(animal){
	var denominator=0;
	for(var i=0;i<8;i++){
		denominator+=animal.gene[i];
	}
	// １から分母の数値までの乱数
	var randomNumber=generateRandom(denominator-1)+1;
	var value=0;
	for(var j=0;j<8;j++){
		value+=animal.gene[j];
		if(randomNumber<=value){
			animal.direction=j;
			break;
		}
	}

}

function generateGene(){
	var gene=new Array();
	for(var i=0;i<10;i++){
		gene[i]=generateRandom(9)+1;
	}
	return gene;
}
/***************************************************************/
function generateRandom(i){//０からiまでの乱数
	return Math.floor(Math.random()*(i+1));
}
/************************eat*********************************/

function eat(animal){
	if(plants[animal.b][animal.a]==1){
		plants[animal.b][animal.a]="";
		animal.energy+=80;
	}
}
/***********************test***************************/
function testEnergy(animal){ 

	document.getElementById("energy").innerText=animal.energy;
}