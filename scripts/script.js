var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 7000;	// Time Between Switch
	 
// Image List
images[0] = "../images/Clarkson-Logo.png";
images[1] = "../images/download.png";
images[2] = "../images/IMG_8016.JPG";

function changeImg(){
	document.slide.src = images[i];


	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
