function add(a,b){

    return a + b;
}
function sub(a,b){

    return a - b;
}
function div(a,b){

    return a / b;
}
function mul(a,b){

    return a * b;
}
var uInput1= +prompt("Enter Your First Number");
var uInput2= +prompt("enter your second Number");
var operator= prompt("Chooose Oparetor , + , - , / , *");

if(operator==="+"){
    alert(add(uInput1,uInput2));
    
}
else if(operator==="-"){
    alert(sub(uInput1,uInput2));
    
}else if(operator==="/"){
    alert(div(uInput1,uInput2));
    
}else if(operator==="*"){
    alert(mul(uInput1,uInput2));
    
}else{
    alert("invalid! operator");
    
}