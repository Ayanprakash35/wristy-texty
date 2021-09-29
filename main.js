difference = 0;
rightwristx = 0;
leftwristx = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Mission posenet is ready for take off');
}

function draw(){
    background( '#ADD8E6');
    document.getElementById("Font_size").innerHTML = "font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#ebb734');
    text('LOL', 50, 400);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("leftwristx = "+leftwristx + "rightwristx = "+rightwristx + "difference = "+difference);
    }
    
}
