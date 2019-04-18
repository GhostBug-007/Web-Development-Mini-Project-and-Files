var age = prompt("Enter your age in years ") ; 
alert("You've been on this planet for about "+ age*365+" days") ; 

if (age <= 0) 
	alert("Enter valid age") ; 
if (age < 18)
{
	console.log("Don't you dare think about entering into the party") ;
}
else if (age < 21) 
{
	console.log("You can enter, but don't you dare touch the alcohol") ;
}
else 
	console.log("Come on in. The party is for you") ;
if (age == 21)
	alert("Happy 21st Birthday") ;
if (age % 2 == 1) 
	console.log("Your age is odd") ; 
if (Math.sqrt(age) % 1 == 0) 
	console.log("This is a perfect square" ) ; 