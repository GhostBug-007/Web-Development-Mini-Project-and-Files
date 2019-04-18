/*var userInput = prompt("Are we there yet??") ; 
while(userInput != "yes" && userInput !="yeah")
{
	userInput = prompt("Are we there yet??") ;
}
alert("Yay, we finally made it ") ; 
*/
// Version 2

var answer = prompt("Are we there yet") ; 
while(answer.indexOf("yes") == -1)
{
	answer = prompt("Are we there yet") ; 
}
alert("Yay ! We finally made it ") ; 	