noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
word = "";


function setup(){
    video = createCapture(VIDEO);
    video.size(500,480);

    canvas = createCanvas(550,400);
    canvas.position(600,110);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function theWord(){
    word = document.getElementById("cad").value;
    
}

function draw(){
    background('skyblue');
    textSize(difference);
    fill('green');
    text(word , noseX , noseY);
}

   


function modelLoaded(){
    console.log("POSENET IS INITIALIZED");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + " and nose Y = " + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("Left wrist X = " + leftWristX + " and right wrist X = " + rightWristX);
    }
}