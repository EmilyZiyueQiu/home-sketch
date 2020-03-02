//variable for drawing size
let x = 800;
let y = 500;
//variable for bouncing ball
let s = 255;
let maxHeight = 480;
//variable for shadow
let maxWidth =100;
//variable for flower
let o =0;
//variable for cushion color changing
let tr = 0;
let tg =0;
let tb =0;


// function setup and draw----------------------------------------
function setup() {
	createCanvas(windowWidth, windowHeight);
	background("black");
	frameRate(20);		
}


function draw() {	
//***a tool: to find positions
    console.log(mouseX,mouseY);	
	
	flower(140,170);
	flower(1200,650);


	//***all stuffs except two cushions
	blueFloor(x,y);
	pinkCurtain(x,y);		
   	holders();	
    tableSurface(x,y);
    pencils();		
    pencilVase();	
    ornament();	
    eraser();	
    easel();		
	signature();
	
//***two cushions
	gridCushion();
	triangleCushion();
	drawingBoard();
	orangeBalloon();
	popHeart(760,280,50);
	heart(120,350,80);
	heart(170,550,60);
	heart(120,700,40);
	heart(1300,450,80);
	heart(1200,350,60);
	heart(1350,200,70);
	heart(1200,100,55);
}


// functions created listed below-----------------------------------------
function blueFloor(x,y){
        strokeWeight(30);
	stroke(229,204,255);
	fill(204,229,255);
	rect(300,120,x,y);
}

function pinkCurtain(x,y){
	noStroke();
	fill(245,155,196,200);
	rect(315,135,x-30,y*2/3);
}

function holders(){
    	stroke(92,56,29);
	strokeWeight(20);
	line(528,360,448,482);
    	line(540,360,615,482);
    	noStroke();
	fill(92,56,29);
	rect(508,340,50,20);
}

function tableSurface(x,y){
    	noStroke();
	fill("white");
	ellipse(x*2/3,y*2/3,200,20);
}

function pencils(){
    	strokeWeight(2);
	stroke(163,58,61);
	line(493,291,485,278);//red pencil
	stroke(76,98,154);
	line(498,300,498,275);
	stroke(222,127,135);
	line(500,295,510,278);
}

function pencilVase(){
    	noStroke();
	fill(255,165,228);
	square(480,300,32);
	fill(239,216,177);
	quad(480,300,512,300,504,290,488,290);
}

function ornament(){
    	fill(255,255,51);
	quad(535,328,560,328,552,240,543,240);
	fill(153,204,255);
	quad(540,271,555,271,560,328,535,328);
	fill(228,121,54);
	quad(537,298,558,298,560,328,535,328);
}

function eraser(){
    	fill(206,255,254);
	rect(528,326,20,10);
}

function easel(){
   	strokeWeight(20);
	stroke(237,202,158);
	line(640,512,731,168);
	line(812,162,850,512);
	line(644,397,877,407);
	line(770,188,776,117);
	quad(746,206,791,204,786,194,750,196);
}

function drawingBoard(){
    	noStroke();
	fill(250,241,226);
	quad(664,389,847,397,842,201,695,205);
}

function orangeBalloon(){

	noStroke();
	fill(0,0,0,50);
	let shadowWidth = maxWidth - 40 * (Math.cos(frameCount/10));
	ellipse(897,570,shadowWidth,30);//shadow
	fill(255,138,34);
	let bally = maxHeight - 40 * (Math.cos(frameCount/10));
	ellipse(880,bally,120,120);//the ball
}

function signature(){
	noStroke();
    fill(102,51,0);
	textSize(30);
	textStyle(BOLD);
	textFont('Helvetica');
	text('Emily ꒰｡••｡꒱',910,610);
}

function gridCushion(){
    push();
	translate(400,380);
	for(let x=0;x<4;x++){
		for(let y=0;y<4;y++){
			stroke(236,255,245);
			strokeWeight(0.5);
			if(x+y==0||x*y==4){
			fill("white");
			rect(x*40+10,y*40+10,40,40);
			}
			else if(x+y==2||x*y==1){
			fill("white");
			rect(x*40+10,y*40+10,40,40);	
			}
			else if(x+y==3){
			fill(random(255),random(255),random(50,255),100);
			rect(x*40+10,y*40+10,40,40);			
			}
			else{
				fill(random(255),random(255),random(50,255),100);
			rect(x*40+10,y*40+10,40,40);
			}
		}
	}
		pop();
}

function triangleCushion(){
    push();
	translate(600, 450);
	rotate(PI / 2.1);
	noStroke();

	if (mouseX<200){
		tr = 0;
		tg =0;
		tb =102;
	}else if (mouseX>200&&mouseX<400){
		tr =76;
		tg =0;
		tb =153;
	}else if(mouseX<600&&mouseX>400){
		tr =153;
		tg =76;
		tb =0;
	}else if(mouseX<800&&mouseX>600){
		tr =0;
		tg =102;
		tb =51;
	}else if(mouseX<1000&&mouseX>800){
		tr =153;
		tg =0;
		tb =76;
	}else if(mouseX<1200&&mouseX>1000){
		tr =160;
		tg =160;
		tb =160;
	}else {
		tr =146;
		tg =17;
		tb =17;
	}


	fill(tr,tg,tb);

	rect(-42,-40,165,165);
	pop();
	
	//white triangeles
	noStroke();
	fill("white");
	triangle(510,430,495,440,518,445);
	triangle(538,466,559,467,543,480);
	triangle(497,496,489,512,516,501);
	triangle(593,415,587,427,612,420);
	triangle(595,499,617,499,596,512);
	triangle(546,536,533,550,560,542);
	triangle(622,546,635,546,625,558);
}

function flower(f,l){

	//let o =50 - 50 * abs((Math.cos(frameCount/20)));
	
	if(o<40){
	noStroke();
	fill("white");
	ellipse(f,l-2.1*o,o,3*o);//top

	push();//right-top
	translate(f+1.5*o,l-1.5*o);
	rotate(PI/4);
	ellipse(0,0,o,3*o);
	pop();

	ellipse(f+2.1*o,l,3*o,o);//right

	push();//right-bottom
	translate(f+1.5*o,l+1.5*o);
	rotate(PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f,l+2.1*o,o,3*o);//bottom

	push();//left-bottom
	translate(f-1.5*o,l+1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f-2.1*o,l,3*o,o);//left

	push();//left-top
	translate(f-1.5*o,l-1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,o,3*o);
	pop();

	o = o+0.1;
} else{
	noStroke();
	fill("black");
	ellipse(f,l-2.1*o,o,3*o);//top

	push();//right-top
	translate(f+1.5*o,l-1.5*o);
	rotate(PI/4);
	ellipse(0,0,o,3*o);
	pop();

	ellipse(f+2.1*o,l,3*o,o);//right

	push();//right-bottom
	translate(f+1.5*o,l+1.5*o);
	rotate(PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f,l+2.1*o,o,3*o);//bottom

	push();//left-bottom
	translate(f-1.5*o,l+1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,3*o,o);
	pop();

	ellipse(f-2.1*o,l,3*o,o);//left

	push();//left-top
	translate(f-1.5*o,l-1.5*o);
	rotate(3*PI/4);
	ellipse(0,0,o,3*o);
	pop();

	//let o returns value 0
	o = 0;
}
	fill("#FFE326");
	ellipse(f,l,50,50);
}

function popHeart(he,ha){
	let hr = map(mouseX,0,windowWidth,10,70);
	stroke("white");
	strokeWeight(4);
	fill(243,0,0,200);
	beginShape();
	vertex(he,ha);
	bezierVertex(he-hr/2,ha-hr/2,he-hr,ha+hr/3,he,ha+hr);
	bezierVertex(he+hr,ha+hr/3,he+hr/2,ha-hr/2,he,ha);
	endShape();
}

function heart(he,ha,hr){
	stroke("white");
	strokeWeight(7);
	noFill();
	beginShape();
	vertex(he,ha);
	bezierVertex(he-hr/2,ha-hr/2,he-hr,ha+hr/3,he,ha+hr);
	bezierVertex(he+hr,ha+hr/3,he+hr/2,ha-hr/2,he,ha);
	endShape();
}



// failed try, later revised

/*
function mouseDragged(){
		stroke(s);
		strokeWeight(7);
		line(mouseX,mouseY,pmouseX,pmouseY);
	}
	
	
	function mousePressed(){
		s=color (random(100,255), random(0,255),random(0,255));
	}
	
	function keyPressed(){
		if(key===" "){
			background(random(255), random(255),random(255));
		}
	}
*/
