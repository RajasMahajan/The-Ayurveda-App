var title;
var coldButton;
var coughButton;
var headikeButton;
var homescreenButton;
var homescreenimage;
var gameState = 1;
var HomeScreen = 1;
var SolutionCold = 2;
var SolutionCough = 3;
var SolutionHeadike = 4;
function preload() {
  homescreenimage = loadImage("home.png");
}
function setup() {
  createCanvas(380, 600);
  title = createSprite(193, 20, 250, 30);
  coldButton = createSprite(200, 220, 200, 30);
  coughButton = createSprite(200, 300, 200, 30);
  headikeButton = createSprite(200, 380, 200, 30);
  //homescreen button
  homescreenButton = createSprite(10, 10, 30, 30);
  homescreenButton.addImage(homescreenimage);
  homescreenButton.scale = "0.1";
  homescreenButton.visible = false;
  //hiding sprites
  coldButton.shapeColor = "yellow";
  coldButton.visible = false;
  coughButton.shapeColor = "skyblue";
  coughButton.visible = false;
  headikeButton.shapeColor = "green";
  headikeButton.visible = false;
  title.visible = false;
}

function draw() {
  background(138, 219, 208);
  // gameState 1 (home screen)
  if (gameState === 1) {
    fill("black");
    title.shapeColor = "blue";
    textSize(18);
    textSize(16);
    text("Hey,Are you sick?", 10, 70);
    title.visible = true;
    coldButton.visible = true;
    coughButton.visible = true;
    headikeButton.visible = true;
    drawSprites();
    text("Cold", 185, 225);
    text("Cough", 180, 305);
    text("Headike", 175, 385);
    text("The Ayurveda Home Remedy App", 70, 30);
    text("       Try this Here you can fing every disease Home", 10, 100);
    text("Remedy Solution. You can select the disease which", 10, 120);
    text("you have by clicking on it", 10, 135);
    if (mousePressedOver(coughButton)) {
      gameState = 3;
    }
  }
  // gameState 2 (home remedy)
  if (gameState === 3) {
    coldButton.visible = false;
    coughButton.visible = false;
    headikeButton.visible = false;
    title.visible = false;
    fill("black");
    text(
      "If you have cough you need to take the following home Remedy's",
      5,
      50
    );
    text(
      "1)Use honey to treat a cough, mix 2 teaspoons (tsp) with warm water",
      5,
      100
    );
    text("or an herbal tea. Drink this mixture once or twice a day.", 5, 120);
    homescreenButton.visible = true;

    if (mousePressedOver(homescreenButton)) {
      gamesState = 1;
    }
    drawSprites();
  }
}
