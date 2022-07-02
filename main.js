var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");

function start(){
Textbox.innerHTML = "";
Recognition.start();
}

Recognition.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    Textbox.innerHTML = content;
    console.log(content);
    if (content == "selfie"){
        console.log(content);
        speak();
    }
    
    
}

function speak(){
    var synth = window.speechSynthesis;

    speakData = "Tirando sua selfe em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData); 
    synth.speak(utterThis)
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save();

    }
    ,5000
    );
    }
    
    camera = document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
    });

    function takeSelfie(){
        Webcam.snap(function(data_uri){
             document.getElementById("result").innerHTML = '<img id = "selfeImage" src = "'+ data_uri +'"/>';

        });
    }
      

    function save(){
        link = document.getElementById("link");
        image = document.getElementById("selfeImage").src;
        link.href = image;
        link.click();
    }

