status1 = ""
objects = []

function preload(){

}

function setup(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    canvas = createCanvas(350,350)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

}

function draw(){
    image(video, 0,0, 350,350)
    if(status1 != ""){
        R = random(255)
        G = random(255)
        B = random(255)
        objectDetector.detect(video, gotResults)
        for(i = 0;i< objects.length;i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected Are: "+objects.length;
            fill("#FF0000")
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label+" "+percent + "%", objects[i].x, objects[i].y)
            nofill()
            stroke("FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    
    }

}




function modelLoaded(){
    console.log("Model Loaded!")
    status1 = true
    
}

function gotResults(error, results){
    if(error){
        console.error(error)

    }
        console.log(results)
        object = results
    }




