var button = document.querySelector('.blue');
var element = document.querySelector('#Granaatappels');

button.addEventListener("click", function() {
  element.classList.toggle("Granaatappelsweg");
});

var buttonZeewierRoze = document.querySelector('.pink');
var elementZeewierRoze = document.querySelector('#Zeewier_roze');
console.log(elementZeewierRoze);
buttonZeewierRoze.addEventListener("click", function() {
  elementZeewierRoze.classList.toggle("blue");
});


var buttonZeewierGeel = document.querySelector('.yellow');
var elementZeewierGeel = document.querySelector('#Zeewier_geel');

buttonZeewierGeel.addEventListener("click", function() {
  elementZeewierGeel.classList.toggle("darkgreen");
});


var buttonZeewierGroen = document.querySelector('.darkgreen');
var elementZeewierGroen = document.querySelector('#Zeewier_donker_groen');

buttonZeewierGroen.addEventListener("click", function() {
  elementZeewierGroen.classList.toggle("orange");
});

var buttonZeewierOranje = document.querySelector('.orange');
var elementZeewierOranje = document.querySelector('#Zeewier_oranje');

buttonZeewierOranje.addEventListener("click", function() {
  elementZeewierOranje.classList.toggle("lightgreen");
});



var parkiet =document.getElementById('Parkiet');
var meermin =document.getElementById('Zeemeermin');
var licht = document.getElementById('Zeewier_licht_groen');
var bleu = document.getElementById('Zeewier_blauw');
var orangina = document.getElementById('Zeewier_oranje');
var gelig =document.getElementById('Zeewier_geel');
var donkert =document.getElementById('Zeewier_donker_groen');
var appel = document.getElementById('Granaatappels');
var roz =document.getElementById('Zeewier_roze');

window.addEventListener('keydown', toggle)

function toggle(event) {

  if(event.keyCode === 72) {
    Zeemeermin.classList.toggle('lightblauw');
    fillColor()
  }

  if(event.keyCode === 69) {
    Parkiet.classList.toggle('felgroen');
    fillColor()
  }

  if(event.keyCode === 78) {
    Zeewier_licht_groen.classList.toggle('rood');
    fillColor()
  }

  if(event.keyCode === 82) {
    Zeewier_blauw.classList.toggle('turkois');
    fillColor()
  }

  if(event.keyCode === 73) {
    Zeewier_oranje.classList.toggle('lichtroze');
  }

  if(event.keyCode === 83) {
    Zeewier_geel.classList.toggle('felpaars');
  }

  if(event.keyCode ===77) {
    Zeewier_donker_groen.classList.toggle('felgeel');
  }

  if(event.keyCode ===65) {
    Granaatappels.classList.toggle('heelgroen');
  }

  if(event.keyCode ===84) {
    Zeewier_roze.classList.toggle('bordo');
  }
}
// Touchstart
var roze = document.getElementById("Zeewier_roze");
roze.addEventListener("touchstart", function () {
    document.getElementById("Zeewier_roze").style.display = "none";
});

roze.addEventListener("touchend", function () {
    document.getElementById("Zeewier_roze").style.display = "inline";
});

var grun = document.getElementById("Zeewier_blauw");
grun.addEventListener("touchstart", function () {
    document.getElementById("Zeewier_blauw").style.display = "none";
});

grun.addEventListener("touchend", function () {
    document.getElementById("Zeewier_blauw").style.display = "inline";
});

var ron = document.getElementById("Zeewier_oranje");
ron.addEventListener("touchstart", function () {
    ron.classList.toggle("felpaars");
  });

var grond =document.getElementById("Zeewier_geel");
grond.addEventListener("touchstart", function() {
  grond.classList.toggle("rood");
});

var cat =document.getElementById("Zeewier_licht_groen");
cat.addEventListener("touchstart", function() {
  cat.classList.toggle("lightblauw");
});

var ap =document.getElementById("Granaatappels");
ap.addEventListener("touchstart", function() {
  ap.classList.toggle("felgroen");
});

var pup =document.getElementById("Zeewier_donker_groen");
pup.addEventListener("touchstart", function() {
  pup.classList.toggle("felgeel");
}); 
