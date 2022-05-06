object = [];
video = ""
status1 = ""
function preload(){
    video = createVideo("video.mp4")
    video.hide()
}


function setup(){
    canvas = createCanvas(350,350)
    canvas.center()


}


function draw(){
    image(video, 0, 0, 350,350)
    if(status1 != ""){
        objectDetector.detect(video, gotResults)
        
        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Objects Detected: "
            document.getElementById("number_of_objects").innerHTML = "Number of object detected are: "+objects.length;

            fill("FF0000")
            percent = floor(objects[i].confidence*100)
            text(objects[i].label+  ""+ percent + "%", objects[i].x + 15 +  objects[i].y + 15)
        }
    }

  
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modeLoaded)
    document.getElementById("status").innerHTML = "Status: detecting objects"
}

function modeLoaded(){
    console.log("Model Loaded!")
    status1 = true
    video.loop()
    video.speed(1)
    video.volume(0)
}


function gotResults(error, results){
    if(error){
        console.error(error)
    }
    console.log(results)
    object.results()
}


