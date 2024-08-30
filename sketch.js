function setup() {
    createCanvas(600, 600);
   background("green");
  }
  
  function draw() {
  
  
  stroke("blue")
  fill ("red")
  
    // conslole.log(mouseIsPressed);
  
   if(mouseIsPressed){
   rect(mouseX, mouseY, 30, 30);
   }
  }