var nosex
var nosey
var lipstick
function preload()
{
    lipstick = loadImage('https://i.postimg.cc/mkLBCyhG/image-lips-png.png')
    
}

function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded()
{
    console.log('PoseNet Is Initiazed');
}

function draw(){
    image(video,0,0,300,300);
    image(lipstick, nosey, nosex, 30, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x ; 
        nosey = results[0].pose.nose.y ;
    }
}