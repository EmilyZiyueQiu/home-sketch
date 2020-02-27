
function setup() {
	createCanvas(windowWidth, windowHeight);
    background(226,255,219);	
    	
//***size of the whole drawing	
	let x = 800;
    let y = 500;	

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
    drawingBoard();	
    orangeBalloon();	
    signature();	
}

function draw() {	
//***a tool: to find positions
    console.log(mouseX,mouseY);	
    
//***two cushions
	gridCushion();
    triangleCushion();
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
	ellipse(897,570,100,30);//shadow
	fill(255,138,34);
	ellipse(880,520,120,120);//the ball
}

function signature(){
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
			fill(0,51,51);
			rect(x*40+10,y*40+10,40,40);
			}
			else if(x+y==2||x*y==1){
			fill(133,141,147);
			rect(x*40+10,y*40+10,40,40);	
			}
			else if(x+y==3){
			fill(250,255,247);
			rect(x*40+10,y*40+10,40,40);			
			}
			else{
			fill(195,201,189);
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
	fill(42,50,69);
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