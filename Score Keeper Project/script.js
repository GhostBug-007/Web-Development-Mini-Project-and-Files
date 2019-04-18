var btn1 =  document.getElementById("b1") ; 
var btn2 = document.querySelector("#b2") ; 
var rBtn = document.querySelector("#reset") ; 
// var h1 = document.querySelector("h1") ; 
var p1Display = document.querySelector("#p1") ;
var	p2Display = document.querySelector("#p2") ;
var p1Score = 0 ;
var p2Score = 0 ; 
var gameOver = false ;  	
var winScore  = 5 ; 

	btn1.addEventListener("click",function(){
		if(!gameOver){
			p1Score++ ;
			p1Display.textContent = p1Score;
			if(p1Score === winScore){
				console.log("GAME OVER!!") ;
				p1Display.classList.add("winner") : 
				gameOver = true ;
			}
		}
	}) ;

	btn2.addEventListener("click",function(){
		if(!gameOver){
			p2Score++ ; 
			p2Display.textContent = p2Score;
			if(p2Score === winScore){
				console.log("GAME OVER!!") ;
				p1Display.classList.add("winner") : 
				gameOver = true ;
			}
		}
	}) ;

	rBtn.addEventListener("click",function(){
		if(gameOver){
			gameOver = false ;
			p1Score = 0;
			p1Display.textContent = p1Score;
			p2Score = 0 ;
			p2Display.textContent = p2Score;
		}
	})


