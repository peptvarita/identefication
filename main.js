function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mymodel= ml5.imageClassifier('MobileNet',modelLoaded)
}
function modelLoaded(){
console.log("your model has loaded")
}
function draw(){
  image (video,0,0,300,300)
  mymodel.classify(video,gotResult)
}
pr = ""
function gotResult(error,results){
if(error){
  console.log(error)
}
else{
if((results[0].confidence> 0.5)&&(pr!=results[0].label)){
console.log(results)
pr = results[0].label
synth= window.speechSynthesis
bolo= "Object detected is "+results[0].label
yehbolo= new SpeechSynthesisUtterance(bolo)
synth.speak(yehbolo)
document.getElementById("result_object_name").innerHTML= results[0].label
document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(5)
}



}











}

