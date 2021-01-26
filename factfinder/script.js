var funfact1 = "<h3>That tiny pocket in jeans was designed to store pocket watches.</h3>";
var funfact2 = "<h4>Most Disney characters wear gloves to keep animation simple.</h4>";
var funfact3 = "<h3>The current American flag was designed by a high school student.</h3>";
var funfact4 = "<h3>Movie trailers originally played after the movie.</h3>";
var funfact5 = "<h3>Japan released sushi-inspired KitKats.</h3>";


document.querySelector("#fact1").addEventListener("click",funnyFact1);
document.querySelector("#fact2").addEventListener("click",funnyFact2);
document.querySelector("#fact2").addEventListener("click",funnyFact2);
document.querySelector("#fact3").addEventListener("click",funnyFact3);
document.querySelector("#fact4").addEventListener("click",funnyFact4);
document.querySelector("#fact5").addEventListener("click",funnyFact5);

function funnyFact1(){
	document.querySelector("#factBox").innerHTML = funfact1;
}

function funnyFact2(){
	document.querySelector("#factBox").innerHTML = funfact2 + "<img src='images/Mickey Mouse.jpg' alt='Mickey Mouse'>";
	
}

function funnyFact3(){
	document.querySelector("#factBox").innerHTML = funfact3;
}

function funnyFact4(){
	document.querySelector("#factBox").innerHTML = funfact4;
}

function funnyFact5(){
	document.querySelector("#factBox").innerHTML = funfact5;
}