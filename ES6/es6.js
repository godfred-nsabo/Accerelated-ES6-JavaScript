// //Let & BLock Scope
// //console.log('something');

// //var name = "Goddey";
// //let name = "Goddey";
// //console.log(name);

// let age = 39;
// if (true) {
//   let name = "Goddey";
//   let age = 83;
// console.log(age);
// }
// //console.log(name);

// console.log(age);


// //Constants with 'Const'

// //const Age = 27;
// //Age  = 29

// const AGES = [27,29,31];
// console.log(AGES);
// AGES.push(25);
// console.log(AGES);

// const OBJ = {
// age: 27
// };
// console.log(OBJ);
// OBJ.age = 30;
// console.log(OBJ);


// //Hoisting

// //let age; // correct-declare berfore initialisation

// //age = 27;
// //console.log(age);
// //var age;

// //age = 27;
// //console.log(age);
// //let age; // generates error

// function doSmth(){
//     age = 29;
//   }
//   //let age;
//   doSmth();
//   console.log(age);

//   //Alternative using arrow function

//   const doSomth = () => {
//     AGED = 30
//   }
//   let AGED;
//   doSomth();
//   console.log(AGED);

//   //ARROW FUNCTIONS (FAT)

// function fn(){
//     console.log('Hello \n World');
//   }
//   fn();

//   // in arrow wAY

//   var func = () => {
//   console.log('Hello \n Goddey')
//   }
//   func();

//   // Alternative 1

//   var funct = () => console.log('Hello \n World!');
//   funct();

//   // Alternative 2: if one line of code

//   var functn = () => 'Hello \n Prez JJ'; console.log(functn());

//   //Example

//   var example = () => {
//      let a = 2;
//      let b = 3;
//      return a + b;
//   };

//   console.log(example());

//   // Alternative Method 1;

//   var exampleAlt1 = (a, b) => {
//     return a + b;
//   };

//   //console.dir(exampleAlt1(4,5));
//   console.log(exampleAlt1(4,5));


//   // Alternative Method 2;

//   var exampleAlt2 = (a, b) => a + b;

//   //console.dir(exampleAlt1(4,5));
//   console.log(exampleAlt2(4,6));


//   // Alternative Method 3;

//   var exampleAlt3 = (a, b) => a + b;

//   //console.dir(exampleAlt1(4,5));
//   console.log(exampleAlt3(4,10));


//   // Alternative Method 4;

//   //var exampleAlt4 = (a) => a + 7;

//   var exampleAlt4 = a => a + 7; // Alt
//   console.log(exampleAlt4(4));


//   // Using arrow as call back

//   setTimeout(() => console.log('Hello World!!!'), 1000);

//   // Arrow Functions and 'this' key word

// //setTimeout(() => console.log('Hello World!!!'), 1000);

// //using arrow function

// /*var button = document.querySelector('button');

// var getThis = () => console.log(this);
// //getThis();// we get the window object

// function get() {
//   console.log(this);
// }
// // we get the window object
// //get();

// button.addEventListener('click', get);*/


// // Functions and Default Parameters

// //var isEqualTo = (num, compare) => num === compare;

// //console.log(isEqualTo(10,10));

// /*var isEqualTo = (num, compare=0) => num === compare;

// console.log(isEqualTo(10));*/


// /*function isEqualTo(num =19, compare = 10) {
//  return num == compare;
// }
// console.log(isEqualTo());*/

// //let x = 10

// /*function isEqualTo (num, compare = x) {
// console.log(num);
// console.log(compare);
// return num == compare;
// }
// console.log(isEqualTo(20));*/


// /*function isEqualTo (num = compare, compare = x) {
// console.log(num);
// console.log(compare);
// return num == compare;
// }
// console.log(isEqualTo());*/



// // Object Literals

// let obj = {
// name: 'iamGoddey',
// age: 30
// };
// console.log(obj);

// /*
// let name = 'iamdokkie'
// let Age = 29;

// let OBJ = {
// name:'Fred00',
// //name,
// Age,
// greet(){
// console.log(this.name + ' is ' + this.Age);
// }
// //var greet = () => console.log(this.name + ' is ' + this.Age)
// };
// OBJ.greet();
// console.log(OBJ);

// // Creating a string Function



// let Name = 'iamdokkie'
// let Aged = 29;

// let OBJ1 = {
// Name:'Fred00',
// //name,
// Aged,
// "greet me"(){
// console.log(this.Name + ' is ' + this.Aged);
// }
// //var greet = () => console.log(this.name + ' is ' + this.Age)
// };
// OBJ1["greet me"]();
// //console.log(OBJ1);*/



// // Dynamic Fields


// let names = 'iamdokkie'
// let Ages = 29;
// let ageField = 'Ages';

// let OBJ3 = {
// "names":'Fredooo',
// //name,
// [ageField] : 30,
// greet(){
// console.log(this.names + ' is ' + this.Ages);
// }
// //var greet = () => console.log(this.name + ' is ' + this.Age)
// };
// OBJ1["greet me"]();
// console.log(OBJ3);

// let num = [1, 2 ,3, 43];

// var sumAdd = (toSum) => {
// let res = 0;
// for (let eachSum = 0; eachSum < toSum.length; eachSum++) {
//   res += toSum[eachSum];
// }
//   return res;
// };

// console.log(sumAdd(num));

// // The Rest Operator

// var sum = (...toSum) => {
// console.log(toSum);
// let result = 0;
// for (let each = 0; each < toSum.length; each++) {
//   result += toSum[each];
// }
//   return result;
// };

// console.log(sum(10, 20, 30, 43, 30, 20, 2));

// console.log(sum(10, 20, 30, 43, 30, 20,"2"));


// let sum1 = [1,2,3,5,32,4,5,3,4,23,5,2];

// console.log(Math.max(sum1));

// // The SPread Operator

// console.log(...sum1);

// console.log(Math.max(...sum1));



// // For-of-loop

// let projectResults = [23, 30, 4, 8, 30, 21, 20, 15];

// for (let projectResult of projectResults) {
//   console.log(projectResult);
// };

// // Template Literals

// let Sales = 'SalesForce Trainee';
// let comp = 'Amalitech';

// let descriptn = `
//    Hello, I'am a ${Sales} in ${comp + ' at SSNIT Office, Takoradi.'} \n
// Hello, I'am a \${Sales} in \${comp + ' at SSNIT Office, Takoradi.'}
// `;
// console.log(descriptn);


// // Destructuring Arrays

 let list = [1, 3, 4, 5, 'Dekay', 'SAM', 'DOCKY'];
 let [x, y] = list;

 // Applying Rest Operator
 let [a, ...b] = list;

 //let [u, v, w, t, s, z, i, j, c] = list;
 let [u = 'Default', v, w, t, s, z, i, j, c = 'Default'] = list;

 console.log(x);
 console.log(y);
 console.log(a);
 console.log(b);
 console.log(c);

 console.log(list);

// // Destructuring for swapping

let p = 2;
 let h = 5;
 [p, h] = [h, p];
 console.log(h);

 // Printing out a particular element;

let [l,  , o] = [1, 4, 5, 'Fred', 'T'];
console.log(l, o);



// Destructuring Objects

let amaTech = {
    Trainees: 'Sedem, Isaac, Goddey',
    Trainers: 'Sharaf, Fifii, Emma',
    Greetings: function () {
    console.log('Hello People!!!!');
  }
  }
  let {Trainees, Trainers} = amaTech;
//let {Trainers, Greetings: Hello} = amaTech
  //Greetings();
  //Hello();
  console.log(Trainees, Trainers);