//Create variables here
var dog;
var database;
var foods;

function preload()
{
  //load images here
  this.image = loadImage("dogImg.png");
  dogHappy = loadImage("dogImg1.png");

}

function setup() {
  database = firebase.database();

  createCanvas(800, 700);

  dog = createSprite(250,250,10,10);
  dog.image = this.image;

  foodStock = database.ref("food");
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);

  }

  drawSprites();
  //add styles here
  textSize(20);

}

function readStock(){
  foods = data.val();
}

function writeStock(X){
  if(x<=0){
    x=0;
  } 
  else{
    x=x-1;
  }

  database.ref('dog/food').update({
    food:x 
  })

}