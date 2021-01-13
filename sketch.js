//namespace the physics engine 
//aliasing 

const Engine=Matter.Engine;//main physics engine 
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,myobject,myball;

function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var options={
    'friction':0.5,
    'restitution':0.8,
    'density':1,
    'isStatic':true
  
  }//JSON format JAVASCRIPT OBJECT NOTATION 
  myobject=Bodies.rectangle(200,height,400,50,options)
  World.add(myworld,myobject);

var options={
    'friction':0.5,
    'restitution':2,
    'density':1,
    'isStatic':false
  
  }//JSON format JAVASCRIPT OBJECT NOTATION 
  myball=Bodies.circle(200,50,20,options)
  World.add(myworld,myball);

  console.log(myobject);
  //Engine.run(myengine);
 
}

function draw() {
  background(0); 
  Engine.update(myengine);
  fill("brown");
  rectMode(CENTER); 
  rect(myobject.position.x,myobject.position.y,400,50);

fill("red");
  ellipseMode(RADIUS); 
  ellipse(myball.position.x,myball.position.y,20,20);

}