var database;
var form;
var StudentNumber=0;
var name;
var quiz;
var qn=1;

var gs=1;

var question1Yes;
var question1No;

var question2Yes;
var question2No;

var question3Yes;
var question3No;
var ty;

var thankYou;

var answer;

var score=0;



function preload()
{
  bg=loadImage("bg.jpg");
  ty=loadImage("p.png");
  bg2=loadImage("bg2.jpg");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight*2);
  database=firebase.database();
  
  
thankYou=createElement('h2');

  var playerCountRef = database.ref('Students/StudentNumber');
  playerCountRef.on('value',(data)=>{
    StudentNumber= data.val();
  })



  

  form=new Form();
  
}

function draw() {
  background(bg);  
  form.display();
 if(gs===2)
 {
  background(bg2);
  imageMode(CENTER);
  image(ty,displayWidth/2,displayHeight/2,1000,1000);
 }
 console.log(score);

  if(gs===3)
  {
    background(bg)
        quiz.questionN.hide();
        quiz.question.hide();
        textSize(50);
        fill("#7ACFB2");
        textStyle(BOLD);
        textAlign(CENTER);
        textFont("marvel");
        thankYou.html("ThankYou");
        thankYou.position(displayWidth/2,displayHeight/2-150);
        text("Your Score:"+score,displayWidth/2,displayHeight/2);
        quiz.options.hide();
        quiz.optionsMedium.hide();
        quiz.optionsLong.hide();
        
        quiz.optionA.hide();
        quiz.optionB.hide();
        quiz.optionC.hide();
        quiz.optionD.hide();

        
  }
}

 
