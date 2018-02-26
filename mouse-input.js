var freqA = 1000;
var freqS = 350;
var freqD = 200;
var freqF = 300;
var freqG = 250;
var freqH = 1000;
var freqJ = 850;
var freqK = 550;
var freqL = 900;

var oscA, oscS, oscD, oscF, oscG, oscH, oscJ, oscK, oscL;

var playing = false;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(200, 0, 255);
  textAlign(LEFT);

  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();

  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();

  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();

  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();

  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();

  oscH = new p5.Oscillator();
  oscH.setType('triangle');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();

  oscJ = new p5.Oscillator();
  oscJ.setType('triangle');
  oscJ.freq(freqJ);
  oscJ.amp(0);
  oscJ.start();

  oscK = new p5.Oscillator();
  oscK.setType('triangle');
  oscK.freq(freqK);
  oscK.amp(0);
  oscK.start();

  oscL = new p5.Oscillator();
  oscL.setType('triangle');
  oscL.freq(freqL);
  oscL.amp(0);
  oscL.start();
}

function draw() {
  if (playing) {
    //background(255, 0, 0);
    // } else {
    //  background(255, 0, 255);
    if (keyIsPressed && mouseIsPressed) {
      stroke(random(0), random(255), random(255));
			line(random(500), random(400), random(), random());
      oscA.freq(freqA + 100);
      oscS.freq(freqS + 100);
      oscD.freq(freqD + 100);
      oscF.freq(freqF + 100);
      oscG.freq(freqG + 100);
      oscH.freq(freqH + 100);
      oscJ.freq(freqJ + 100);
      oscK.freq(freqK + 100);
      oscL.freq(freqL + 100);
    }
  }
  text('Click Here,\n then press A/S/D/F/\nG/H/J/K/L\n ', width / 2, 128);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    background(150, 80, 10);
  } else if (key == 'S') {
    osc = oscS;
    background(160, 70, 80);
  } else if (key == 'D') {
    osc = oscD;
    background(170, 60, 70);
  } else if (key == 'F') {
    osc = oscF;
    background(180, 50, 200);
  } else if (key == 'G') {
    osc = oscG;
    background(190, 40, 150);
  } else if (key == 'H') {
    osc = oscH;
    background(200, 30, 0);
  } else if (key == 'J') {
    osc = oscJ;
    background(210, 20, 50);
  } else if (key == 'K') {
    osc = oscK;
    background(220, 10,100);
  } else if (key == 'L') {
    osc = oscL;
    background(230, 0,255);
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    background(255, 255, 255);
  } else if (key == 'S') {
    osc = oscS;
    background(255, 255, 255);
  } else if (key == 'D') {
    osc = oscD;
    background(255, 255, 255);
  } else if (key == 'F') {
    osc = oscF;
    background(255, 255, 255);
  } else if (key == 'G') {
    osc = oscG;
    background(255, 255, 255);
  } else if (key == 'H') {
    osc = oscH;
    background(255, 255, 255);
  } else if (key == 'J') {
    osc = oscJ;
    background(255, 255, 255);
  } else if (key == 'K') {
    osc = oscK;
    background(255, 255, 255);
  } else if (key == 'L') {
    osc = oscL;
    background(255, 255, 255);
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

function mouseReleased() {
  oscA.freq(freqA);
  oscS.freq(freqS);
  oscD.freq(freqD);
  oscF.freq(freqF);
  oscG.freq(freqG);
  oscH.freq(freqH);
  oscJ.freq(freqJ);
  oscK.freq(freqK);
  oscL.freq(freqL);
}