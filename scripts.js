// JavaScript Document


function openWindow (){
var window = document.getElementById ("window");
window.style = "display: block";

}

function closeWindow (element){
var window = document.getElementById ("window");
window.style = "display: none";	
}

var image = document.getElementsByTagName("img");
var i;
for (i = 0; i < image.length; i++) {
  image[i].addEventListener ("click", openWindow ());
}


/*

	this.style = "display: none;"
	element.style = "z-index:51;"
	element.style = "position: fixed;"
	element.style = "width: 90%;"
	element.style = "max-width: none;"
	element.style = "margin-bottom: 50px;"
	element.style = "margin-right: 10px"
	
	*/