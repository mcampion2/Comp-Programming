// JavaScript Document

document.getElementById("myHome").addEventListener("click",funHome );
document.getElementById("myAbout").addEventListener("click",funAbout );
document.getElementById("myContact").addEventListener("click",funContact );
document.getElementById("myPictures").addEventListener("click",funPictures );


function funHome (){
	document.getElementById("homePageText").innerHTML = "Welcome to my home page!";
}
function funAbout (){
	document.getElementById("homePageText").innerHTML = "To find out more about me....";
}
function funContact (){
	document.getElementById("homePageText").innerHTML = "To find out how to cotact me....";
}
function funPictures (){
	document.getElementById("homePageText").innerHTML = "A picture of me....";
}

