const Name = "rohit";
const surname = "yadav";
// console.log(Name+surname+"king of won life");

console.log(`My name is ${Name} and my Surname is ${surname}`);

console.log(surname);
console.log(surname.toUpperCase());
console.log(surname.toLowerCase());
console.log(surname.charAt(0));
console.log(surname.indexOf("a"));

const subString = Name.substring(0,4);
console.log(subString);

const anotherString = surname.slice(0,4)

//trim and replace

const newString = "          rohit    ";
console.log(newString.trim())
console.log("------------");
console.log(Name.replace("rohit","Ro-Hit"));
console.log(newString.includes("rohit"));
console.log(newString.includes("ritika"));

// now we will be check the how split methos will works

const myFruits = "i am very happy that i feel a most of alovely and likely food after many days";
console.log(myFruits.split(""));
