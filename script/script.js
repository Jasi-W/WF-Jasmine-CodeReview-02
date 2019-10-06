
function calculateInsurance() {
	var selectCountry = document.getElementById("countries").value;
	var name = document.getElementById("name").value;
	var age = parseInt(document.getElementById("age").value);
	var horsepower = parseInt(document.getElementById("horsepower").value);


	switch(selectCountry) {
		case"Austria":
			var cost = Math.round(horsepower*100/age+50);
			document.getElementById("text-box").innerText = name+" your insurance cost $ "+cost;
			break;
						
		case"Hungary":
			var cost = Math.round(horsepower*120/age+100);
			document.getElementById("text-box").innerText = name+" your insurance cost $ "+cost;
			break;
		
		case"Greece":
			var cost = Math.round(horsepower*150/(age+3)+50);
			document.getElementById("text-box").innerText = name+" your insurance cost $ "+cost;
			break;
		
		default:
			document.getElementById("text-box").innerText = "Please fill out all fields correctly!";
	}
}
