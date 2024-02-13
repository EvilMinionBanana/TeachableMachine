


let classifier;

// Label
let label = 'listening...';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/qq43MGKnX/';
let a=0;

function preload() {
  // Load the model
  soundFormats('mp3');
  mysong = loadSound("/static/park.mp3");
  classifier = ml5.soundClassifier(soundModel + 'model.json');


}

function setup() {

  var canvas =createCanvas(320, 240);



  canvas.parent('sketch-holder');
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);



// function loaded() {
//   song.play();
}
function draw() {
  if (a == 1) {
    if (!mysong.isPlaying()) {
      mysong.play();
      mysong.setVolume(0.5);
    }

  }
  background(0);
  // mysong.play();
  if (label == 'Park'){
      a=1;
      background(0);
      fill(34, 139, 34);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("PARKS AND REC", width / 2, height / 2);

  }
  else {
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(label, width / 2, height / 2);
  }
if (label== "Background Noise") {

  a=0;
}


  // Draw the label in the canvas

}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}

