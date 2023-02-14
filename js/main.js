var container = document.getElementById("contenedor");
setTimeout(function() {
	container.classList.add("cerrar");
},12000)/*1200*/

var audio = document.getElementById("heart_to_heart");
function PlayAudio() {

	audio.play();

}