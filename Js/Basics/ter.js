/*
*
*   Syntax :
*             // cond    //T    //F
*             condition ?  Ex1 : Ex2
*
* */
//
// let a = 18;
// let num = a >= 18 ? "Adult" : "Child";
// console.log(num);



// Positive, Zero, Neg

a = prompt("Enter the Number :");

let res = a > 0 ? "The Numebr is Positive !" :
                 a < 0 ? "The Numebr is Negative !" :
                 "The Numebr is Zero";

console.log(res);