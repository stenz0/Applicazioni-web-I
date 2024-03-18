"use strict"

function compact(strings){

    for (let string of strings){
            let n = string.length;
            let s = string[0] + string[1] + string[n-2] + string[n-1];
            console.log(s);
    }
}

let stringhe = ["ciao", "ema", "ema biondo", "cacca"];
compact(stringhe);