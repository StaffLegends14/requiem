
var gameState = 0,Button = "Mouse",b = 0;

var Start,Help,S,H;

var button,Bon,Bof;

var Hunter,HL,HR,HU,HD;

var r,l,u,d;

var BG_start,BG_game,BG_about;

function setup() {

  createCanvas(windowWidth,windowHeight);

  Hunter = createSprite(width/2,height/2,20,20);
  Hunter.addImage("Man",HL);
  Hunter.scale = 0.05;

  r = createSprite(width/2 + 50,height/2,2,10);
  r.visible = false;
  l = createSprite(width/2 - 50,height/2,2,10);
  l.visible = false;
  d = createSprite(width/2,height/2 + 50,10,2);
  d.visible = false;
  u = createSprite(width/2,height/2 - 50,10,2);
  u.visible = false;

  button = createSprite(width/2 ,height/1.5,50,20);
  button.setCollider("rectangle",0,0,button.width * 10,button.height * 10);
  button.addImage("button",Boff);
  button.scale = 0.1
  button.visible = false;
  //button.debug = true;

  Start = createSprite(width/2,height/2,100,100);
  Start.addImage("Start",S);
  Start.scale = 0.3;
  Start.setCollider("rectangle",0,0,Start.width/1.4,Start.height/3.5);
  //Start.debug = true;

  Help = createSprite(width/2,height/1.3,100,100);
  Help.addImage("Help",H);
  Help.scale = 0.3;
  Help.setCollider("rectangle",0,0,Help.width/1.2,Help.height/3.5);
  //Help.debug = true;

}


function preload(){

  HL = loadImage("./VFX/Hunter_left.png");

  HR = loadImage("./VFX/Hunter_right.png");

  HU = loadImage("./VFX/Hunter_up.png");

  HD = loadImage("./VFX/Hunter_down.png");

  BG_start = loadImage("./VFX/BG_main.png");

  BG_game = loadImage("./VFX/BG_game.png");

  BG_about = loadImage("./VFX/BG_about.png")

  S = loadImage("./VFX/Start.png");

  H = loadImage("./VFX/Help.png");

  Bon = loadImage("./VFX/Button_on.png");

  Boff = loadImage("./VFX/Button_off.png");

}


function draw() {

  if(Button === "keyBoar"){
    Button = "keyBoard";
  }

  if(gameState === 0){
  background(BG_start);
  Hunter.visible = false;

  Start.visible = true;
  Help.visible = true;

  if(mousePressedOver(Start)){

    gameState = 1;

  }

  if(mousePressedOver(Help)){

    gameState = 2;

  }
}

  if(gameState === 1){

    background(BG_game);
    Hunter.visible = true;

    if(keyDown("ESC")){
      gameState = 0
    }

    Start.visible = false;
    Help.visible = false;

    if(Button === "Mouse"){
    if(mouseY > d.y && mouseX < r.x && mouseX > l.x){
      Hunter.addImage("Man",HD);
    }
    if(mouseY < u.y){
      Hunter.addImage("Man",HU)
    }
    if(mouseX < l.x){
      Hunter.addImage("Man",HL)
    }
    if(mouseX > r.x){
      Hunter.addImage("Man",HR)
    }
  }

  if(Button === "keyBoard"){
    if(keyDown("DOWN_ARROW")){
      Hunter.addImage("Man",HD);
    }
    if(keyDown("UP_ARROW")){
      Hunter.addImage("Man",HU)
    }
    if(keyDown("LEFT_ARROW")){
      Hunter.addImage("Man",HL)
    }
    if(keyDown("RIGHT_ARROW")){
      Hunter.addImage("Man",HR)
    }
  }

    console.log(d.y)
   
  }

  if(gameState === 2){

    background(BG_about);

    button.visible = true;

    if(keyDown("ESC")){
      gameState = 0;
      button.visible = false;
    }

    if(mousePressedOver(button) && Button === "Mouse"){

      Button = "keyBoar";
      button.addImage("button",Bon);
      b = 1;
      button.visible = false;
      Start.visible = true;
    Help.visible = true;
      
    }

    if(Button === "Mouse"){

      fill("black");
      text("Mouse",button.x - 18,button.y + 20);
      textSize(8);
      text("controls",button.x + 45,button.y - 10);
      text("hunter faces the mouse",button.x + 45,button.y);
      text("Left-Click to shoot",button.x + 45,button.y + 10);
      text("press ESC to go back",button.x + 45, button.y + 20);

    }

    if(Button === "keyBoard"){

      fill("white");
      text("KeyBoard",button.x - 25,button.y + 20);
      fill("black")
      textSize(8);
      text("controls",button.x - 150,button.y - 10);
      text("arrow keys to control direction",button.x - 150,button.y);
      text("SPACEBAR to shoot",button.x - 150,button.y + 10);
      text("press ESC to go back",button.x - 150, button.y + 20);
      
    }

    if(mousePressedOver(button) && Button === "keyBoard"){

      Button = "Mouse";
      button.addImage("button",Boff);
      button.visible = false;
      Start.visible = true;
    Help.visible = true;
    console.log("E");
      
    }

    Start.visible = false;
    Help.visible = false;

    textSize(15);
    fill("black");
    text("The story is about a hunter who has",width/3.8,height/4);
    text("A huge bounty on his head",width/3,height/3);
    text("and has to protect himself",width/3,height/2.4);

  }
  drawSprites();

}