
function myFirstOne (){
    document.getElementById("check").innerHTML="check done";
}

function mySecOne (){
    document.getElementById("demo").innerHTML="TSCHUS";
}

document.write(5 + 6);
window.alert("welcome to my site");
console.log(10+21);

/* statement
are fun
*/
let a , b , c ;
a= 5; b=3; c=a+b;
//write c to answer:
document.getElementById("answer").innerHTML="The value of c is =" + c + ".";

let carName;
document.getElementById("unDefine").innerHTML="IT IS  " + carName + ".!!!!!";

let text1="A"; 
let text2="B";
let result = text1<text2 ;
document.getElementById("TF").innerHTML= "Is Text 1 is Smaller than Text 2? " + result;

const person={firstName:"fandogh", lastName:"tut farangi",age:"3.5"};
document.getElementById("BIO").innerHTML= person.firstName + " is " + person.age + " years old . ";

let x = myFirstOne(4, 3);
document.getElementById("returnFunction").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}
// return function should be ask from mentor :)