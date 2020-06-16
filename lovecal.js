function getPercentage(fname, sname){
	fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "b8c9e70753msh5918b828c8a46b1p13241ajsn6701be1cb400"
	}
	})
	.then(response => response.json())
	.then(response => {
		console.log(response);
	alert(response.fname+"\n"+response.sname+"\n"+response.percentage+"%"+"\n"+response.result);
	// document.getElementById("results").
	})
	.catch(err => {
		console.log(err);
	});
	document.getElementById('firstname').value=null;
	document.getElementById('secname').value=null;

}




document.getElementById('myBtn').addEventListener("click", submitButton);





function submitButton(){
	var firstname= document.getElementById("firstname").value;
	var secname= document.getElementById("secname").value;
	



	getPercentage(firstname, secname);
}


