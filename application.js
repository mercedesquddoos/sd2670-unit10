function myFunction() {
	var onenumber = document.getElementById("onenumber");
	var secondnumber = document.getElementById("secondnumber");	
	var output = document.getElementById("output");
	
	
		if(onenumber.value > secondnumber.value){
			output.innerHTML = "TRUE";	
		}
		else {
			output.innerHTML = "false";
		}
	
}
function myQuiz() {
	
	var onenumber = document.getElementById("onenumber");
	var secondnumber = document.getElementById("secondnumber");	
	var output = document.getElementById("output");
	
	
	
		if(secondnumber.value > onenumber.value){
			
				output.innerHTML = "TRUE";
		}
			else{
				output.innerHTML = "false";
			}
	
}

