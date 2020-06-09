var image; var img1; var img2;
var img3;
var canvas;
function upload(){
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  canvas=document.getElementById("can");
  image.drawTo(canvas);
  img1 = image;
  img2=image;
  img3=image;
}
function filter1(){
//[greyscale filter]  
for(var pixel of img1.values()){
  var r=pixel.getRed();var g=pixel.getGreen();
  var b=pixel.getBlue();var avg=(r+g+b)/3;
  pixel.setRed(avg);
  pixel.setGreen(avg);
  pixel.setBlue(avg);
}
  img1.drawTo(canvas);
}  
function filter2(){
  //red filter
  for(var pixel of img2.values()){
  var r=pixel.getRed();var g=pixel.getGreen();
  var b=pixel.getBlue();var a=(r+g+b)/3;
  if (a<128){
    pixel.setRed(2*a);
    pixel.setGreen(0);
    pixel.setBlue(0);}
    else
      {
        pixel.setRed(255);
        pixel.setGreen(2*a-255);
        pixel.setBlue(2*a-255);
      }
  }
  img2.drawTo(canvas);
}
function filter3(){
  
}
function reset(){
upload();
}
