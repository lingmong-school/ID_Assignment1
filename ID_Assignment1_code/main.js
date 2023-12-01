

console.log('main.js loaded');


var slider_img = document.querySelector('.slider-img');
var images = ['gray.jpg', 'pink.jpeg','black.jpg','white.jpg'];
var i = 0;

function prev(){
	console.log('Previous button clicked');
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	console.log('Next button clicked');
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}