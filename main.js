function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,550);
    canvas.position(650,100);
    
    poseNet=ml5.poseNet(video, modeloaded)
    poseNet.on('pose', gotPoses);
    
    }
    difference=0;
    leftWristX=0;
    rightWristX=0;
    
    function draw(){
    background('#b016e2');
    fill('#FFFF00');
    textSize(difference);
    text('Bao',50,400);
    }
    
    function modeloaded(){
    console.log('Model Loaded Sucessfully !!!!!!!!!')
    }
    noseX=0;
    noseY=0;
    
     function gotPoses(results){
    if (results.length > 0)
    {
        console.log("results");
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("nose X="+ noseX + "nose Y=" + noseY)
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference= floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference=" + difference);
    
    }
     }
    