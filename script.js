// your code here
let textelement=document.getElementById(url);
document.getElementById("button").addEventListener("click",handleSubmit)
function handleSubmit(e) {
	e.preventDefault();
	let initialUrl=document.getElementById("form").action
	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;
	if(name && year) initialUrl+='?name='+name+'&year='+year;
	else if(name)initialUrl+='?name='+name;
	else initialUrl+='?year='+year;
	textelement.innerHTML=initialUrl;
}