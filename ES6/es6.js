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

  //ARROW FUNCTIONS (FAT)

function fn(){
    console.log('Hello \n World');
  }
  fn();
  
  // in arrow wAY
  
  var func = () => {
  console.log('Hello \n Goddey')
  }
  func();
  
  // Alternative 1
  
  var funct = () => console.log('Hello \n World!');
  funct();
  
  // Alternative 2: if one line of code
  
  var functn = () => 'Hello \n Prez JJ'; console.log(functn());
  
  //Example
  
  var example = () => {
     let a = 2;
     let b = 3;
     return a + b;
  };
  
  console.log(example());
  
  // Alternative Method 1;
  
  var exampleAlt1 = (a, b) => {
    return a + b;
  };
  
  //console.dir(exampleAlt1(4,5));
  console.log(exampleAlt1(4,5));
  
  
  // Alternative Method 2;
  
  var exampleAlt2 = (a, b) => a + b;
  
  //console.dir(exampleAlt1(4,5));
  console.log(exampleAlt2(4,6));
  
  
  // Alternative Method 3;
  
  var exampleAlt3 = (a, b) => a + b;
  
  //console.dir(exampleAlt1(4,5));
  console.log(exampleAlt3(4,10));
  
  
  // Alternative Method 4;
  
  //var exampleAlt4 = (a) => a + 7;
  
  var exampleAlt4 = a => a + 7; // Alt
  console.log(exampleAlt4(4));
  
  
  // Using arrow as call back
  
  setTimeout(() => console.log('Hello World!!!'), 1000);