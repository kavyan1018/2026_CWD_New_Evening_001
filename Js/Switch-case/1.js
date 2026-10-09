/*

    switch case  -> c 
    multiple types of options -> selet -> condition call 

    // calc 


    1. +
    2. -
    3. *
    4. /
    5. %

    user choice 
    condition call 

    switch(choice / var)
    {

        case 1: 
                // code 
                break;        
        case 2: 
                // code 
                break;        
        case 3: 
                // code 
                break;
        
        default:
            // code 
            break;
    }

*/


var a = parseInt(prompt("Enter the First Number :"))

var b = parseInt(prompt("Enter the First Number :"))

var choice = prompt("Enter the Opration (+, -, *, /) :")

switch (choice) {

    case '+':
        var sum = parseInt(a) + parseInt(b)
        console.log("The sum of :" + sum)
        break;

    case '-':
        var sum = parseInt(a) - parseInt(b)
        console.log("The sum of :" + sum)
        break;

    default:
        console.log("Invalid Choice !!!!")
}