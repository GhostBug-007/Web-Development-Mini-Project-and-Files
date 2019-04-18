var todoList = [] ; 

function printList(){
	console.log("********") ;
	todoList.forEach(function(element, i){
		console.log(i+": "+element) ;
	});
	console.log("********") ;
	console.log("Task Added") ;
}

function deleteTodo(){
	var index = prompt("Enter the index of list to delete") ;
	todoList.splice(index,1) ;
	console.log("Task Deleted") ;
}

function toDo(){
	var input = prompt("What would you like to do ") ; 

	while(input !== "quit")
	{
		if (input === "list") {
			printList() ;
		}
		else if (input === "new") {
			var newTodo = prompt("Enter a new todo") ; 
			todoList.push(newTodo) ;
		}
		else if(input === "delete"){
			deleteTodo() ;
		}
		input = prompt("What would you like to do") ; 
	}
	alert("Task Terminated") ; 
	console.log("Your final todos are "+todoList) ;
}

window.setTimeout(toDo,500) ;

