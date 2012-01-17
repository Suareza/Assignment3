/*
 Agustin Suarez
 January 16, 2012
 Project 3
*/






// Boolean Function

var whatIf = function (win, loose){
        console.log("What would I do with all the money if I win the tournament \(are my thoughts as I begin to come really close to reaching a set in the finals\)?");
        var result;
        if (win !== true){ result = "I would pay all my debit and buy my parents a house!"; }
        else { result = "I will go home $10.00 dollars less, then what I had to begin with."; }
        return result;
};
var resultBoolean = whatIf(true, false);
console.log(resultBoolean); // return Boolean
