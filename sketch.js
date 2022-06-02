var h,m,s;
var x,y,x1,y1;

function setup(){
  createCanvas(500,500);
  background(255);
  x = 0;
  x1 = 0;
  y = 0;
  y1 = 0;
  frameRate(100);
}

function draw(){
  background(255);
  clockFace();
  drawAnalog();
  timeOfDay();
  drawMinute();
  drawHour();
  drawSecond();
  strokeWeight(4);
  circle(250,250,4);
}

function clockFace(){
  stroke(0,0,0);
  strokeWeight(10);
  fill(255);
  circle(250,250,300);
}
function drawAnalog(){
  h = hour();
  m = minute();
  s = second();
  String hour = "";
  String minute = "";
  String second = "";
  String AMPM = "";
  if(h > 12){ // formatting into 12 hour time
    h -= 12;
  }
  if(h == 0){
    h = 12;
  }
  if(h < 10){ // adding a 0 before the hour if less than 10, creating 03, 04 etc.
    hour = "0" + h;
  }
  else if(h > 10){ // otherwise
    hour += h;
  }
  if(s < 10){ // adding a 0 before the second if it is less than 10
    second = "0" + s;
  }
  else if(s >= 10){ // otherwise
    second += s;
  }
  if(m < 10){ // adding a 0 before the minute if it is less than 10
    minute = "0" + m;
  }
  else if(m >= 10){ // otherwise
    minute += m;
  }
  if(hour() < 12){
    AMPM = "AM";
  }
  else if(hour() >= 12){
    AMPM = "PM";
  }
  textSize(25);
  fill(100);
  text(hour + ":" + minute + ":" + second, 20, 480); 
  text(hour + ":" + minute + " " +AMPM, 370, 480); 
}

function timeOfDay(){
  String timeofday = "";
  if(hour() >= 5 && hour() < 12){
    timeofday = "Morning";
  }
  else if(hour() > 12 && hour() < 21){
    timeofday = "Afteroon";
  }
  else if(hour() >= 21 || hour() < 5){
    timeofday = "Night";
  }
  text(timeofday, 20, 440); 
}

function drawSecond(){
  stroke(255,0,0);
  strokeWeight(2);
  x = 120 * sin(6*radians(second())) + 250;
  y = 120 * -cos(6*radians(second())) + 250;
  line(250,250,x,y);
}

function drawHour(){
  stroke(0);
  strokeWeight(4);
  x = 80 * sin(30*radians(hour())) + 250;
  y = 80 * -cos(30*radians(hour())) + 250;
  line(250,250,x,y);
}

function drawMinute(){
  stroke(0);
  strokeWeight(3);
  x = 100 * sin(6*radians(minute())) + 250;
  y = 100 * -cos(6*radians(minute())) + 250;
  line(250,250,x,y);
}
