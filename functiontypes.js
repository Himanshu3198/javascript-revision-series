//  immediately invoked function
/*  it is function that runs as soon as it isdefined 

*/

// (function(){

//     console.log("this is iif");
// }) ();

/*  Explain higher order function in js?
  functions that operate on outer function either by taking them
  as arguements or returning them are called higher order function*/


  function higherOrder(fn){
      fn();
  }

  higherOrder (function(){console.log("hello world")});

