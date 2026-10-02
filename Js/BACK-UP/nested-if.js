// nested if - else 
/*
    if (true){
        
        if(check){
        
        }
    }


    vote 

        -> age 18+ -> vote 
            -> u have valid iD ?   -> Y then vote -> N no vote 

*/


let a = parseInt(prompt("Enter Your Age to check the Eli :"))

if(a > 18){
    
    let b = prompt("You Have Voter ID ? if Yes then pess Y or esle press N");

    if(b == 'y' || b == 'Y'){
        console.log("You can Vote :)")
    }   
    else{
        console.log("You can't Vote :)")
    }
}
else{
    console.log("Not ele for Vote !!!");
}