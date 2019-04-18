// alert("Hello") ;
var button = document.querySelector("button") ; 
console.log(button);
// var body = document.querySelector("body") ; 
/*var isWhite = true; 

 //// **** This code is using the boolean values ***** /////

button.addEventListener("click", function() {
	if(isWhite){
	document.body.style.background = "black" ; 
	// isWhite = false ;
}
else{
	document.body.style.background = "white" ; 
	// isWhite = true ;
}
	isWhite = !isWhite ;
}); 
*/

//// **** This part of the code is adding a class to get desired output *** ////

button.addEventListener("click",function(){
	document.body.classList.toggle("pink") ; 
});



