const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    hammer = new Hammer(10,100);

    rubber = new Rubber(800,360,55,55);
   
    stone = new Stone(670,320,70,70);

    iron = new Iron(400,320,70,40);

    woodenplank = new woodenPlank(500,360,100,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    woodenplank.display();
}