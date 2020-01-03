console.log("hello");
//comment writing

//variables
//var b = 'nounours'
//console.log(b);

//var hisAge = 2;
//console.log(hisAge);

//var age = prompt('what is your age?');
//document.getElementById('someText').innerHTML = age;

//Number
var num1 = 11.3;
//Increment num1 by 1
num1++;

//Dreciment num1 by 1
num1--;
console.log(num1);

// Increment/decrement by any number
num1 +=400;
console.log(num1);

/* Function
1. Create a function
2. Call the function
*/
function fun(){
    console.log('thie is a function');
}
fun();

/*
Lets create a faunction that takes a name and says hello followed by the name
Example
Name: Prakash
Return: "Hello Prakash"
*/
function greeting(){
   var name =  prompt('what is your name');
   var result = 'Hello'+ ' ' + name; //string concatenation
   console.log(result);
}
//greeting();

//How do argumens work in functions?
//How do we add 2 numbers together in a function?

function sunNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
}
sunNumbers(10,10);

//My URL Builder

function addNew()
        {
            document.getElementById("newBut").innerHTML = "<input type='text' id='tb13'>";
        }
    function concatenate()
        {
            concateText = document.getElementById("tb1").value + "?utm_source=" + document.getElementById("tb2").value + "&utm_medium=" + document.getElementById("tb3").value + "&utm_campaign=" + document.getElementById("tb4").value + "&utm_term=" + document.getElementById("tb5").value + "&utm_content=" + document.getElementById("tb4").value + "|" + document.getElementById("tb6").value + "|" + document.getElementById("tb2").value + "|" + document.getElementById("tb3").value + "|" + document.getElementById("tb7").value + "|" + document.getElementById("tb8").value + "|" + document.getElementById("tb9").value + "|" + document.getElementById("tb10").value + "|"+ document.getElementById("tb11").value + "|" + document.getElementById("tb5").value + "|" + document.getElementById("tb12").value;

            document.getElementById("concateForm").value = concateText;}
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("concateForm");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
}
