var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext("2d");

class Point {
  constructor(x,y,ctx) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.ctx = ctx;
    this.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
/*
var points = [
  new Point(295,0,ctx),
  new Point(0,590,ctx),
  new Point(590,590,ctx)
];
*/
var points = [
  new Point(0,0,ctx),
  new Point(0,590,ctx),
  new Point(590,590,ctx),
  new Point(590,0,ctx),
  new Point(300,300,ctx)
];

for (var i=0; i<points.length; i++) {
  points[i].draw();
}

var from = new Point(300,222,ctx);
var prev;

function nextPoint() {
  var to = parseInt(Math.random()*points.length);
  while (to == prev) {
    to = parseInt(Math.random()*points.length);
  }
  prev = to;

  var newX = (from.x - points[to].x)/2 + points[to].x;
  var newY = (from.y - points[to].y)/2 + points[to].y;

  var newPoint = new Point(newX,newY,ctx);
  from = newPoint;

  newPoint.draw();
}

setInterval(nextPoint, 3);
