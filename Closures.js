// console.log("hello world");
//  Closures : A function always bundle with its lexical scope forms a closures
// function x(){
//     var a=7;

//     function y(){

//         console.log(a);
//     }

//     y();
// }
// x();


// lexical scope: A child function can access the variables of parent function .


// function x(){

//     var a=7;
//     function y(){

//         console.log(a);
//     }
//     y();
// }
// x();

// clousers:
function x(){

    var a=7;
    function y(){

        console.log(a+5);
    }
    return y;
}

let catchy=x();
console.log(catchy);
catchy();




