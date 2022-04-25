status1 = ""
objects = []

function preload(){

}

function setup(){
    canvas = createCanvas(350,350)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(350,350)
    video.hide()
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status : Object Detected";

}

function draw(){
    image(video, 0,0, 350,350)
    if(status1 != ""){
        r = random(255)
        g = random(255)
        b = random(255)
        objectDetector.detect(video, gotResults)
        for(i = 0;i< objects.length;i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected Are: "+objects.length;
            fill(r,g,b)
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label+" "+percent + "%", objects[i].x, objects[i].y)
            nofill()
            stroke(r,g,b)
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
        objects = results
    }




