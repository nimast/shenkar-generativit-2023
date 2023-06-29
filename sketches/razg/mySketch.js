var question1 = ['?איזה סלב את','שחקן','זמר','אושיית רשת'];
var question2 = [[['https://i.ytimg.com/vi/GSFxVYrnZ8M/hqdefault.jpg','סופי צדקה'],['https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg?w=400&h=300&c=crop','לאונרדו דיקפריו']],
								 [['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm3We_ogjXEbMsG2krwC_Yls8RE5qx4gYOA&usqp=CAU','בריטני ספירס'],
									['https://tribona.co.il//media/k2/items/cache/82f87882866fcce76dca31189f8b0135_XL.jpg','זוהר ארגוב']],
								 [['https://ynet-pic1.yit.co.il/picserver5/crop_images/2023/05/10/r1SQjRdV3/r1SQjRdV3_0_126_1440_811_0_x-large.jpg','נדיר אליהו'],
									['https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/5/2020/10/13002005/%D7%A4%D7%A1%D7%98%D7%94-%D7%A8%D7%95%D7%96%D7%94-%D7%91%D7%A2%D7%A6%D7%9E%D7%941.jpg','דניאל עמית']]];

var answers = [['ערוץ הילדים יעשה קאמבק!','יש לי דוגמנית בת 20 להכיר לך'],['תגמרי כמו זוהר ','חיי הזוהר פחותמתאים לך..'],['קוד קופון 555','קוד קופון 555']];

var step = 0;
var answerIndex1, answerIndex2;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100,150,225);
}

function draw() {

	if (step == 0){
		textBox(question1[step],windowWidth/2.2, windowHeight/20, 310, 80);
		questionButtons(windowWidth/2.5, windowHeight/5.5);
	}
	if (step == 1){
		background(100,150,225);
		textBox('לחץ על הבחירה שלך',windowWidth/2.4, windowHeight/20, 450, 100);
		ansPicButtons(answerIndex1,windowWidth/2.6, windowHeight/4);
	}
	if (step == 2){
		textBoxResult(answers[answerIndex1][answerIndex2],windowWidth/2.3, windowHeight/2);
	}
}



function ans1(){
	changeStepAndCatchAns(0); 
}
function ans2(){
	changeStepAndCatchAns(1);
}
function ans3(){
	changeStepAndCatchAns(2);
}



function ansPic1(){
	changeStepAndCatchAns(0);
}
function ansPic2(){
	changeStepAndCatchAns(1);
}

function changeStepAndCatchAns(index) {
	if (step == 0){
		answerIndex1 = index;
	}
	if (step == 1){
		answerIndex2 = index;
	}
  if(step < 3){
		step = step + 1;
	}
	else {
	step = 0;
	}
}

function questionButtons(x,y){
	button1 = createButton(question1[1]);
	button1.position(x + 100, y);
	button1.mousePressed(ans1);
	button1.size(100,50);
	button2 = createButton(question1[2]);
	button2.position(x + 200, y);
	button2.mousePressed(ans2);
	button2.size(100,50);
	button3 = createButton(question1[3]);
	button3.position(x + 300, y);
	button3.mousePressed(ans3);
	button3.size(100,50);
}

function ansPicButtons(index,x,y){
	button4 = createImg(question2[index][0][0],question2[index][0][1]);
	button4.position(x + windowWidth/23, y);
	button4.size(windowWidth/9,windowHeight/4);
	button4.mousePressed(ansPic1);
	button5 = createImg(question2[index][1][0],question2[index][1][1]);
	button5.position(x + windowWidth/23 + windowWidth/9, y);
	button5.size(windowWidth/9,windowHeight/4);
	button5.mousePressed(ansPic2);
}


function textBox(str,x,y,rx,ry) {
	stroke(255, 50, 100);
  noFill();
	rect(x-10, y-10, rx, ry);
  fill(255, 150, 200);
  textSize(48);
  textFont("Georgia");
	text(str,x, y, 500,500);
}
function textBoxResult(str,x,y) {
	stroke(255, 50, 100);
  noFill();
  fill(255, 150, 200);
  textSize(48);
  textFont("Georgia");
	text(str,x, y, 500,500);
}