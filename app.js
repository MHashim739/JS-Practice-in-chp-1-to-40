// function add(a,b){

//     return a + b;
// }
// function sub(a,b){

//     return a - b;
// }
// function div(a,b){

//     return a / b;
// }
// function mul(a,b){

//     return a * b;
// }
// var uInput1= +prompt("Enter Your First Number");
// var uInput2= +prompt("enter your second Number");
// var operator= prompt("Chooose Oparetor , + , - , / , *");

// if(operator==="+"){
//     alert(add(uInput1,uInput2));
    
// }
// else if(operator==="-"){
//     alert(sub(uInput1,uInput2));
    
// }else if(operator==="/"){
//     alert(div(uInput1,uInput2));
    
// }else if(operator==="*"){
//     alert(mul(uInput1,uInput2));
    
// }else{
//     alert("invalid! operator");
    
// }

// function add(a,b,c){
//     return a + b + c ;

// }
// function mul(a,b,c){
//     return a * b * c ;
    
// }
// function div(a,b,c){
//     return a / b / c ;
    
// }
// function sub(a,b,c){
//     return a - b - c ;
    
// }
// var uInput1 = +prompt("Enter your first Num");
// var uInput2 = +prompt("Enter your second Num");
// var uInput3 = +prompt("Enter your Third Num");
// var Operaters = prompt("Choose Any Operators + , * , / , -");
// switch (Operaters){
//     case "+":
//         alert(add(uInput1,uInput2,uInput3));
//         break;
//     case "*":
//         alert (mul(uInput1,uInput2,uInput3));
//         break;
//     case "/":
//         alert(div(uInput1,uInput2,uInput3));
//         break;
//     case "-":
//        alert(sub(uInput1,uInput2,uInput3));
//        break;
//     default:
//         alert("Invalid! Operator");            
// }


// for(var i=1; i<4; i++){
//     console.log("hello World!"+i);
    
// }
// for(var j=1; j<=10; j++){
//     console.log(j);
    
// }

// var a=10;
// a--;
// a--;
// a--;
// console.log(a);

// for(var i=10; i>=1; i--){
//     console.log(i);
    
// }
// for(var i=30; i>21; i++){
//     console.log(i);
    
// }

// var monts = [1,2.2,3 ,"first","second",false ,12,"World"];
// console.log(typeof(monts[monts.length-1]));

// for (var i=10; i>=5; i--){
//     console.log("hello World!"+i);
    
// }
// for(var j=1; j<=10; j++){
//     console.log("World"+j);
    
// }

// click event ankar tag
function showCard(){
    document.getElementById("card").style.display="block";
}
function hideCard(){
    document.getElementById("card").style.display="none"
}