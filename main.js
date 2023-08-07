mustache= ""

function preload(){
    mustache= loadImage("Mustache png image- coding project.png")
}

function setup(){
    canvas= createCanvas(500,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(500,500)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("model is loaded")
}

noseX=0
noseY=0

function gotPoses(results){
    
     if(results.length>0) {
        console.log(results)
        noseX= results[0].pose.nose.x- 30
        noseY= results[0].pose.nose.y- 50
    }
}

function draw(){
    image(video,0,0,500,400)
    image(mustache,noseX,noseY,65,48)
}

function takeSnapshot(){
    save("My_Selfie.png")
}