function webcam(){
Webcam.set({
    width:300,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
}

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log("Ml5.version",ml5.version);