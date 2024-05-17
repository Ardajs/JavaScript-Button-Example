//TODO:Button 1
function button1()
{
    alert("Hello World !") 
}

//!Button2
const p1 =document.querySelector(".p1")

function button2()
{
  p1.style.color="blue";
}

//TODO:Button 3
document.querySelector("#button3").onclick=function()
{
    window.location.href="https://duzce.edu.tr/"
}

//Button 4
var count=0;
var output=document.getElementById('output');
function button4()
{
    count=count+1;
    output.innerHTML=count;
}

// *Button 5
var btnSelam=document.getElementById("button5");
	btnSelam.onclick=function(){
		window.alert("Welcomo to my Website");
	}