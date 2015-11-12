window.onload = function () {
	
	alert("Hello!");
	var image = document.getElementById("myImage");
	image.addEventListener("click", changeImage);
}

function changeImage() {
	var image = document.getElementById("myImage");
	if (image.src.match("xavier2.jpg")) {
		image.src = "xavier.jpg";
	} else {
		image.src = "xavier2.jpg";
	}
}