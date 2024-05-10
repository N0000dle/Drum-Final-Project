let sound1, sound2, sound3, sound4, sound5, sound6;

function preload(){
  sound1 = loadSound("drumbeat1.mp3");
  sound2 = loadSound("drumbeat5.mp3"  );
  sound3 = loadSound("ridecymbal.mp3");
  sound4 = loadSound("leftcrash1.mp3");
  sound5 = loadSound("kick.mp3");
  sound6 = loadSound("snare1.mp3");
}



function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    background(200,0,200);

    sound1.play();

  }
  if(keyIsDown(DOWN_ARROW)){
    background(300, 200, 100);
 
    sound2.play();
  }
  
    if(keyIsDown(LEFT_ARROW)){
    background(300, 100, 300);
   
    sound3.play();
  }
  
    if(keyIsDown(RIGHT_ARROW)){
    background(100, 200, 300);
 
    sound4.play(); 
    }
      
  if(keyIsDown(32)){
    background(200, 300, 100);
 
    sound5.play(); 
    }    
}

function mousePressed(){
  if (mouseIsPressed){
    background(300, 100, 100);
    sound6.play();

  }
}

function setup() {
  createCanvas(800, 800);
  
  
}




function draw() {

  background(800, 800);
    if(keyIsDown(UP_ARROW)){
    background(200,0,200);



  }
  if(keyIsDown(DOWN_ARROW)){
    background(300, 200, 100);
 

  }
  
    if(keyIsDown(LEFT_ARROW)){
    background(100, 300, 100);
   

  }
  
    if(keyIsDown(RIGHT_ARROW)){
    background(100, 200, 300);
 
 
    }
      
  if(keyIsDown(32)){
    background(100, 0, 300);
 

    }    

  if (mouseIsPressed){
    background(300, 100, 100);


  }

}