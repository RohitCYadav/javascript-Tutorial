//primitive and non primitive data types


//1) 7 types: string , number , boolean , null , undefined , symbol , bigint

//2) reference type (non premitive)

//array , object , fun

console.log(x);

var x = 10;

// {
//     const  y = 20;
// }
// console.log(y);

/*

Scope	Redeclare	Reassign	Hoisted	    Binds   this
var	       No	        Yes	        Yes	    Yes	    Yes
let     	Yes     	No      	Yes 	No  	No
const	    Yes 	    No      	No  	No	    No


*/


const id = Symbol("1234");

const anotherId = Symbol("1234");

console.log(id === anotherId);

const largeNumber = 12345654n;

console.log(typeof(largeNumber));

//references (non premitive)

//array , object , function

const heros = ["rohit shrma" , "virat kohli","surya yadav"];

console.log(typeof(heros));

let my_obj = {
    name : "Rohit",
    age : 12,
    profession: "coder"
}

console.log(typeof(my_obj));

const myFunction = function() {
    console.log("hello family i am rohit yadav");
}

console.log(typeof(myFunction));
