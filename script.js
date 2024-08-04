// your code here
 let textelement=document.getElementById(url);
document.getElementById("button").addEventListener("click",handleSubmit)
function handleSubmit(e) {
	e.preventDefault();
	let initialUrl="";
	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;
	if(name && year) textelement.textcontent+='?name='+name+'&year='+year;
	else if(name)textelement+='?name='+name;
	else textelement+='?year='+year;
	

// 	const myUrl2 = new URL(window.location.toLocaleString()).searchParams;

// const name=myUrl2.get('name')
// const year=myUrl2.get('year');
// 	document.getElementById('name').value=name;
// 	document.getElementById('year').value=year;
}