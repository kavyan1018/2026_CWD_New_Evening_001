/*

    if(condition){

        // code 

    }
    else{
        // code     
    } 

*/

// let a = prompt("Enter First Numebr :");
// let b = prompt("Enter Second Numebr :");

// if (a > b) {
//     console.log("A is Max !!!!");
// }
// else{
//     console.log("B is Max !!!!");
// }


// else if 

let a = Number(prompt("Enter First Numebr :"));
let b = Number(prompt("Enter Second Numebr :"));
let c = Number(prompt("Enter Third Numebr :"));


if (a > b && a > c) {
    console.log("A is Max....!!!");
}
else if(b > a && b > c){
    console.log("B is Max....!!!");
}
else{
    console.log("C is Max....!!!");
}