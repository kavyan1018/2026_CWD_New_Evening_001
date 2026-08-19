/*

    if(){
    
    }
    else if(){

    }
    else{
    
    }
*/

// find max between 3 numbers

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter third number");

if (a > b && a > c) {
    console.log(a + " is the maximum number");
}
else if (b > a && b > c) {
    console.log(b + " is the maximum number");
}
else {
    console.log(c + " is the maximum number");
}