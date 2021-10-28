/* this keyword in js : it store current excecution of program */


var obj={

    name:"hs",
    getName:function(){
        console.log(this.name);
    }
}
obj.getName();


//  call():  this method allows an object to use function of another object


var obj1={

    age:23,
    getAge:function(){
        console.log( this.age);
    }
}

var obj2={age:54};
obj1.getAge.call(obj2);




// apply(): it similar to call() but only difference is takes array as agruments

function helper(message){

   console.log(this.name +"-"+message);
    
}
var person={name:"john"};
helper.apply(person,["doe"]);


// bind:this method return a new function where the value of "this" keyword will 
// be bound to owner of object which is provide as a parameter
// In others word bind an object to a function using this

let c1={
    x:5,
    y:10
};

let c2={
    x:20,
    y:40
}

function printCoordinates(){

    console.log(this.x +","+this.y);
}

let c1_func=printCoordinates.bind(c1);
let c2_func=printCoordinates.bind(c2);
c1_func();
c2_func();



var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    console.log( this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName);
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
detailsOfPerson1();