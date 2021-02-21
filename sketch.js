var title;
var coldButton;
var coughButton;
var headikeButton;
var homescreenButton;
var coldimage;
var coughimage;
var headikeimage;
var intro1;
var intro1image;
var coughremedy;
var coughremedyimage;
var homescreenimage;
var coughteaimage;
var coughimagesprite;
var headikeremedy;
var headikeremedyimage;
var titleimage;
var coldHomeRemedy;
var coldHomeRemedyimage;
var headacheremedyimage, headacheremedyimageimage;
var coughremedyimage, coughremedyimageimage;
var gameState = 1;
var HomeScreen = 1;
var SolutionCold = 2;
var SolutionCough = 3;
var SolutionHeadike = 4;
function preload() {
  titleimage = loadImage("title.png");
  intro1image = loadImage("intro 1.png");
  headacheremedyimageimage = loadImage("headacheremedyimage.jpg");
  homescreenimage = loadImage("home.png");
  coldimage = loadImage("cold.png");
  coughimage = loadImage("cough.png");
  coughremedyimageimage = loadImage("coughremedyimage.jpg");
  headikeremedyimage = loadImage("headikeremedy.png");
  headikeimage = loadImage("headacheimages.png");
  coughteaimage = loadImage("honeytea.jpg");
  coughremedyimage = loadImage("coughRemedy.png");
  coldHomeRemedyimage = loadImage("coldhomeremedy.png");
}
function setup() {
  createCanvas(500, 600);
  // title = createSprite(250, 30, 250, 30);
  // text image/sprite0
  intro1 = createSprite(250, 150, 50, 50);
  intro1.addImage(intro1image);
  intro1.scale = 0.6;
  intro1.visible = false;
  //cough remedy image
  coughRemedyimage = createSprite(250, 480, 50, 50);
  coughRemedyimage.addImage(coughremedyimageimage);
  coughRemedyimage.scale = "0.27";
  //headacheimage
  headacheremedyimage = createSprite(250, 470, 50, 50);
  headacheremedyimage.addImage(headacheremedyimageimage);
  headacheremedyimage.visible = false;
  //k
  coldHomeRemedy = createSprite(250, 210, 50, 50);
  coldHomeRemedy.addImage(coldHomeRemedyimage);
  coldHomeRemedy.scale = 0.6;
  coughremedy = createSprite(250, 200);
  coughremedy.addImage(coughremedyimage);
  coughremedy.scale = 0.7;
  headikeremedy = createSprite(250, 210, 10, 10);
  headikeremedy.addImage(headikeremedyimage);
  headikeremedy.scale = 0.7;
  coughimagesprite = createSprite(250, 430);
  coughimagesprite.addImage(coughteaimage);
  coughimagesprite.scale = 0.6;
  //sprites
  coldButton = createSprite(230, 300, 200, 30);
  coughButton = createSprite(230, 420, 200, 30);
  headikeButton = createSprite(230, 530, 200, 30);
  //homescreen button
  homescreenButton = createSprite(20, 20, 30, 30);
  homescreenButton.addImage(homescreenimage);
  homescreenButton.scale = 0.1;
  //hiding sprites
  coldButton.addImage(coldimage);
  coldButton.scale = 0.3;
  coldButton.visible = false;
  coughButton.addImage(coughimage);
  coughButton.scale = 0.36;
  coughButton.visible = false;
  headikeButton.addImage(headikeimage);
  headikeButton.scale = 0.2;
  headikeButton.visible = false;
}

function draw() {
  background(204, 240, 229);
  if (gameState === 1) {
    coldHomeRemedy.visible = false;
    coughremedy.visible = false;
    homescreenButton.visible = false;
    coughRemedyimage.visible = false;
    headikeremedy.visible = false;
    coughimagesprite.visible = false;
    intro1.visible = true;
    headacheremedyimage.visible = false;
    fill("black");
    //title.shapeColor = "blue";
    textSize(18);
    textSize(16);
    coldButton.visible = true;
    coughButton.visible = true;
    headikeButton.visible = true;
    //
    if (mousePressedOver(coughButton) && gameState === 1) {
      gameState = 3;
    }
  }
  if (mousePressedOver(coldButton) && gameState === 1) {
    gameState = 2;
  }
  if (mousePressedOver(headikeButton) && gameState === 1) {
    gameState = 4;
  }
  // gameState 3 (home remedy)
  if (gameState === 3) {
    headikeremedy.visible = false;
    intro1.visible = false;
    coughButton.visible = false;
    coldButton.visible = false;
    headikeButton.visible = false;
    coughremedy.visible = true;
    homescreenButton.visible = true;
    coughimagesprite.visible = true;
  }
  // gameState 2 (home remedy)
  if (gameState === 2) {
    intro1.visible = false;
    headikeremedy.visible = false;
    coughButton.visible = false;
    headikeButton.visible = false;
    // title.visible = false;
    coldButton.visible = false;
    coughRemedyimage.visible = true;
    homescreenButton.visible = true;
    coldHomeRemedy.visible = true;
  }
  //gamestate=4
  if (gameState === 4) {
    intro1.visible = false;
    headikeremedy.visible = false;
    headacheremedyimage.visible = true;
    coughButton.visible = false;
    headikeButton.visible = false;
    //title.visible = false;
    coldButton.visible = false;
    headikeremedy.visible = true;
    homescreenButton.visible = true;
  }
  if (mousePressedOver(homescreenButton)) {
    gameState = 1;
  }
  drawSprites();
  fill("black");
  textSize(28);
  //textWeight("bold");
  text("The Ayurvedic Home Remedies", 50, 40);
}
