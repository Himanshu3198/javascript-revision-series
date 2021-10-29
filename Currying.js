console.log("Currying...")

/* Currying in Javascript
It is a advanced technique to transform a function of n arguments
to n function or one less arguments i.e f(a,b,c)=f(a)(b)(c) It can be 
done using two methods: 
1 )bind method 
2) clousers
*/

// 1 bind method
let multiply= function(x,y){
    console.log(x*y);
}

// let multiplyByTwo=multiply.bind(this,2);
let multiplyByTwo=multiply.bind(this);

// multiplyByTwo(5); 
multiplyByTwo(2,3);  //Currying


// output:10

// 2 clousers
let mutiply=function(x){
    return function(y){
        console.log(x*y);
    }
}


let mutiplyByTwo=mutiply(2);
mutiplyByTwo(3);

// output 6


// Another example 

function curry(f){

    return function(a){
        return function(b){
            return function(c){
                console.log( f(a,b,c));
            }
        }
    }
}

function sum(a,b,c){
    return a+b+c;
}

let curriedSum=curry(sum);
curriedSum(5)(5)(5);


// Currying? What for?
// To understand the benefits we need a worthy real-life example.

// For instance, we have the logging function log(date, importance, message) 
// that formats and outputs the information. In real projects such functions 
// have many useful 
// features like sending logs over the network, here we’ll just use alert:

// function log(date, importance, message) {
//     console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
//   }