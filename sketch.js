var hr,mn,sc;
var hrangle,mnangle,scangle;















function setup() {
  createCanvas(400,400);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
translate(200,200)
rotate(-90)
hr=hour()
mn=minute()
sc=second()
scangle=map(sc,0,60,0,360)
push()
rotate(scangle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()


mnangle=map(mn,0,60,0,360)
push()
rotate(mnangle)
stroke("blue")
strokeWeight(7)
line(0,0,70,0)
pop()


hrangle=map(hr,0,12,0,360)
push()
rotate(hrangle)
stroke("green")
strokeWeight(7)
line(0,0,55,0)
pop()
noFill()
stroke(255,0,0)
arc(0,0,300,300,0,scangle)

noFill()
stroke("blue")
arc(0,0,280,280,0,mnangle)


noFill()
stroke("green")
arc(0,0,260,260,0,hrangle)






  drawSprites();
}