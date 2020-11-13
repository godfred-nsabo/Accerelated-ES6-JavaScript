//Let & BLock Scope
//console.log('something');

//var name = "Goddey";
//let name = "Goddey";
//console.log(name);

let age = 39;
if (true) {
  let name = "Goddey";
  let age = 83;
console.log(age);
}
//console.log(name);

console.log(age);


//Constants with 'Const' 

//const Age = 27;
//Age  = 29

const AGES = [27,29,31];
console.log(AGES);
AGES.push(25);
console.log(AGES);

const OBJ = {
age: 27
};
console.log(OBJ);
OBJ.age = 30;
console.log(OBJ);


//Hoisting

//let age; // correct-declare berfore initialisation

//age = 27;
//console.log(age);
//var age; 

//age = 27;
//console.log(age);
//let age; // generates error

function doSmth(){
    age = 29;
  }
  let age;
  doSmth();
  console.log(age);
  
  //Alternative using arrow function
  
  const doSomth = () => {
    AGES = 30
  }
  let AGES;
  doSomth();
  console.log(AGES);