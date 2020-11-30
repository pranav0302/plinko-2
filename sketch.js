const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkos = [];
var divisions = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  
	engine = Engine.create();
	world = engine.world;

floor = new Ground(240,800,480,20);
wall1 = new Ground(0,400,20,800);
wall2 = new Ground(480,400,20,800);


// creating divisions
for( var i = 80 ; i <= width - 80 ; i = i + 80){
  divisions.push(new Division(i , height - divisionHeight/2,10,divisionHeight));
}
  // first row of plinkos
for( var k = 40; k <=width ; k = k + 50){
  plinkos.push( new Plinko(k , 75 , 10));
}
// second row of plinkos
for( var k = 65; k <=width - 20 ; k = k + 50){
  plinkos.push( new Plinko(k , 175 , 10));
}

// third row of plinkos
for( var k = 40; k <=width ; k = k + 50){
  plinkos.push( new Plinko(k , 275 , 10));
}

// fourth row of plinkos
for( var k = 65; k <=width - 20 ; k = k + 50){
  plinkos.push( new Plinko(k , 375 , 10));
}



Engine.run(engine);
}

function draw() {
 
  background("black");  

 console.log(frameCount);
 // creating partcles
if(frameCount % 50 === 0){
  particles.push(new Particle(random(150,350),10,10));
}

  floor.display();
  wall1.display();
  wall2.display();



  for( var i = 0 ; i < divisions.length ; i++){
divisions[i].display();
  }

  for( var k = 0 ; k < plinkos.length ; k++){
    plinkos[k].display();
      }

      for( var j = 0 ; j < particles.length ; j++){
        particles[j].display();
          }
}