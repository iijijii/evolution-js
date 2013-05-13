function auto(){

	if(document.getElementById("auto").checked){
		autoSkip=setInterval("skipDay()",1000);
	}
	else{
		clearInterval(autoSkip);
	}
}


function skipDay(){

	var day=document.getElementById("days").value;

	for(var j=0;j<parseInt(day);j++){
		updateWorld();
		for(var i=0;i<animals.length;i++){
			testEnergy(animals[i]);
		}	
	}
	drawWorld();
}

function updateWorld(){

	//淘汰する
	for(var i=0;i<animals.length;i++){
		while(animals[i].energy==0){
			animals.splice(i,1);
		}	
	}

	for(var j=0;j<animals.length;j++){
		turn(animals[j]);
		move(animals[j]);
		eat(animals[j]);
		reproduce(animals[j]);
	}
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
			if(plants[y][x]==true){
				worldArray[y][x]="*";
			}
			for(var i=0;i<animals.length;i++){
				if(x==animals[i].a&&y==animals[i].b){
					worldArray[y][x]="M";
				}
			}
			line+=worldArray[y][x];
			
		}
		line+="\n";
	}


	world.innerText=line;
}
/*********************plant*****************************/
var flag=false;

var plants=new Array();
for(var y=0;y<30;y++){
 	plants[y]=new Array();  
  	for(var x=0;x<100;x++){
    plants[y][x]=flag;  
  	}
}

function addPlants(){
	//ジャングルの水平方向の範囲内の乱数
	flag=true;
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

var firstAnimal=new animal(directions,50,15,firstGene,firstEnergy);
animals.push(firstAnimal);


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

	animal.energy-=1;
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
	for(var i=0;i<8;i++){
		gene[i]=generateRandom(9)+1;
	}
	return gene;
}
/***************************************************************/
function generateRandom(i){//０からiまでの整数の乱数
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

	document.getElementById("energy").innerText=
	"energy"+animal.energy+"gene"+animal.gene+"\n"+
	"animalength"+animals.length;

}
/*********************************************************/

function reproduce(parent){

	if(parent.energy>=200){
		var child=new animal(directions,parent.a,parent.b,mutateGene(parent),Math.floor(parent.energy/2));
		animals.push(child);
	}
}

function mutateGene(parent){
	
	var selectedIngredient=generateRandom(7);
	var modulation=generateRandom(2)-1;

	parent.gene[selectedIngredient]+=modulation;
	return parent.gene;
}