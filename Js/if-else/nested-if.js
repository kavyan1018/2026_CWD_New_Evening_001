// Write a JavaScript program to check whether a person is eligible to vote and, if eligible, check whether they have a valid voter ID.


let age = prompt("Enter your age : ");

if (age >= 18) {

    let voterId = prompt("Do you have a valid voter ID? (yes/no)");
    if(voterId === "yes") {
        console.log("You are eligible to vote and have a valid voter ID.");
    } else {
        console.log("You are eligible to vote but do not have a valid voter ID.");
    }
}
else {
    console.log("Not eligible for vote");
}