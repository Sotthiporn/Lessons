function Test()
{
	document.getElementById("Demo").innerHTML = "<b>Hello</b> Function <br>in Head";
}
function sum(a,b)
{
 document.getElementById("sum").innerHTML= a + b;
}
function call()
{
	var x = myFunction(4,2);
	document.getElementById("return").innerHTML= "Return Type Result: " + x;
}
function myFunction(a,b){
	return a * b;
}