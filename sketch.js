let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=15
let angle=0
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================

function setup(){
  createCanvas(windowWidth,windowHeight)
      colorMode(HSB, 360, 100, 100)
  background("#dad7cd")

  points = font.textToPoints("TKUET", 550, 500, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
  angleMode(DEGREES)
  //translate(width/2,height/2)
}

function draw(){
  
  background("#dad7cd")
  //translate(width/2,height/2)
  for(let i=0; i<points.length-1; i++){
    //text(str(i),points[i].x,points[i].y)
    //ellipse(points[i].x,points[i].y,10)
    //fill("#414833")
    let hue = frameCount % 360; // 色相隨幀數變化
  fill(hue, 70, 60); // 飽和度和亮度固定
    noStroke()
    ellipse(points[i].x+r*sin(angle+i*10),points[i].y,10)
    strokeWeight(3)
    stroke("#fefae0")
    line(points[i].x+r*sin(angle+i*25),points[i].y,points[i+1].x+r*sin(angle+i*25),points[i+1].y)
  }
  angle= angle + 10
//================
  noFill()
  stroke("#a3b18a")
  strokeWeight(3)
  //
  var rect_width = 50
  var bc_w = mouseX/20
  var sc_w = 25
  //
  for(let i=0;i<30;i=i+1){
    ellipse(25+bc_w*i,25,bc_w)
    rect(rect_width*i,0,rect_width)
    ellipse(rect_width*(i+1),50,sc_w)
  }


  //===============
  for(let j=0;j<25;j=j+1){
    for(let x=0;x<width;x=x+rect_width){
      ellipse(x,25+50*j,bc_w)
    rect(x,25+50*j,rect_width)
    ellipse(25+x+rect_width,50+50*j,sc_w)
  }
  }
}