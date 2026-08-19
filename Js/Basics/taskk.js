// 5. check character is alphabet , number or special character ?


// user input

let a = prompt("Enter a any value : ");

// check 

let result = a >= '0' && a <= '9' ? "it's a Number !" :
            (a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z') ? "it's an Alphabet !" :
            "it's a Special Character !";

console.log(result);