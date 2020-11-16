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

//  let list = [1, 3, 4, 5, 'Dekay', 'SAM', 'DOCKY'];
//  let [x, y] = list;

//  // Applying Rest Operator
//  let [a, ...b] = list;

//  //let [u, v, w, t, s, z, i, j, c] = list;
//  let [u = 'Default', v, w, t, s, z, i, j, c = 'Default'] = list;

//  console.log(x);
//  console.log(y);
//  console.log(a);
//  console.log(b);
//  console.log(c);

//  console.log(list);

// // // Destructuring for swapping

// let p = 2;
//  let h = 5;
//  [p, h] = [h, p];
//  console.log(h);

//  // Printing out a particular element;

// let [l,  , o] = [1, 4, 5, 'Fred', 'T'];
// console.log(l, o);



// // Destructuring Objects

// let amaTech = {
//     Trainees: 'Sedem, Isaac, Goddey',
//     Trainers: 'Sharaf, Fifii, Emma',
//     Greetings: function () {
//     console.log('Hello People!!!!');
//   }
//   }
//   let {Trainees, Trainers} = amaTech;
// //let {Trainers, Greetings: Hello} = amaTech
//   //Greetings();
//   //Hello();
//   console.log(Trainees, Trainers);

//   // Symbols Basic

// let symbol = Symbol('debug');

// let anotherSymbol = Symbol('debug');

// let Objt = {
//   shien: 'Nsabo',
// [symbol]:'Who the Hell are you to view my code'
// }

// console.log(Objt);
// console.log(Objt[symbol]);
// console.log(symbol == anotherSymbol);
// console.log(symbol.toString());
// console.log(symbol);
// console.log(typeof symbol);

// // Share Symbols

// let symbol1 = Symbol.for('rank');

// let anotherSymbol1 = Symbol.for('rank');

// let person = {
//   seku: 'Nsabo',
// }

// var makeAge = (person) => {
// let anotherSymbol2 = Symbol.for('rank');
// person[anotherSymbol2] = 'Okyere';
// }

// makeAge(person);

// console.log(person[symbol1]);
// console.log(symbol1 == anotherSymbol1);

// // Share Symbols

// let symbol2 = Symbol.for('rank');

// let anotherSymbol3 = Symbol.for('rank');

// let person1 = {
//   seku: 'Nsabo',
// rank: '2IC'
// }

// var makeAge = (person) => {
// let anotherSymbol3 = Symbol.for('rank');
// person[anotherSymbol3] = 'Okyere';
// }

// makeAge(person1);

// console.log(person1[symbol2]);
// console.log(person1['rank']);


// Syntax WOn't WOrk 
/*let symbol = Symbol'rank');

//let anotherSymbol1 = Symbol.for('rank');

let person = {
  seku: 'Nsabo',
}

var makeAge = (person) => {
let anotherSymbol2 = Symbol('rank');
person[anotherSymbol2] = 'Okyere';
}

makeAge(person);

console.log(person[symbol]);
*/

// Well Known Symbols;

// class PERSON {
  
// }

// let PSN = new PERSON();

// console.log(PSN) ;

// // To String Tag

// class PERSON1 {
  
// }
// PERSON1.prototype[Symbol.toStringTag] = 'PERSON1';
// let PSN1 = new PERSON1();

// console.log(PSN1) ;

//  To Primitive

// Eg

// let nums = [3, 4, 8, 5, 10];

// console.log(nums + 1);

// // Now to Pimitive


// let num1s = [3, 4, 8, 5];

// num1s[Symbol.toPrimitive] = function () {
//   return 576;
// }
// console.log(num1s + 1);

// // ITERATORS AND GENERATORS

// let arrays = [21, 23, 34/5, 0.5];

// let iterat = arrays[Symbol.iterator] ();


// console.log(typeof arrays);
// console.log(typeof arrays[Symbol.iterator]);
// console.log(iterat);
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next()); // done when it exhausted all values

// ITERATORS AND GENERATORS

let array1 = [21, 23, 34/5, 0.5*15];


//var array1[Symbol.iterator] = () => {
array1[Symbol.iterator] = function () { 
let nextValue = 5;
  return {
    next: function () {
      nextValue++;
      return {
        done: nextValue > 20 ? true : false,
        value: nextValue
      };
    }
  };
}

for (let element of array1) {
  console.log(element);
}

/*let iterat = array1[Symbol.iterator]();
console.log(typeof array1);
console.log(typeof array1[Symbol.iterator]);
console.log(iterat);
console.log(iterat.next());
console.log(iterat.next());
console.log(iterat.next());
console.log(iterat.next());
console.log(iterat.next()); // done when it exhausted all values */


// Creating Custom Objects

let Persons = {
Name: "Godfred",
Hobbies: ['Sporting', 'Cooking'],
[Symbol.iterator]: function () {
let hobby = 0;
let Hobbies = this.Hobbies;
  return {
    next: function () {
      let value = Hobbies[hobby];
       hobby++;
      return {
        done: hobby > Hobbies.length ? true : false,
        value: value
      };
    }
  };
}
};

for (let hobbi of Persons) {
     console.log(hobbi);
}

// Generator Basics

function *select(){
  yield 'House';
  yield 'My home';
}

// select(); // Generator yields iterations

let it = select();

console.log(it.next());
console.log(it.next());
console.log(it.next());


// Generator in Action

let obj = {
  [Symbol.iterator]: gen
}

function *gen() {
  yield 'my name';
  yield 'is Godfred';
}

for (let element of obj) {
  console.log(element);
}


function *gen1(end) {
  for (let i = 0; i < end; i++)
   yield i;
}

let iter = gen1(2)

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// Controlling iterations with Throw and Return

function *gen2(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i; 
    } catch (e) {
      console.log(e);
    }
  }
}

let iterr = gen2(2)

console.log(iterr.next());
console.log(iterr.throw('An error ocurred!!!'));
console.log(iterr.return('An error ocurred!!!'));
console.log(iterr.next());
console.log(iterr.next());

// PROMISES


let promise = new Promise(function(resolve, reject) {
   setTimeout(function() {
  //resolve('Done!!');
  reject('Failed!!');
}, 1500);
});

promise.then(function(value) {
  console.log(value);
}, function(error){
  console.log(error);
});

// Chaining Promises

function waitASecond(seconds){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			seconds++;
			resolve(seconds);
		}, 1000);
	});
}

waitASecond(0)
	.then(waitASecond)
	.then(function(seconds){
		console.log(seconds);
})

// Catching erros Promises

function waitASecond2(seconds){
	return new Promise(function(resolve, reject){
		if (seconds > 2){
			reject('Rejected!!');
		}else {
					setTimeout(function(){
			seconds++;
			resolve(seconds);
		}, 1000);
		}
	});
}

waitASecond2(3)
	.then(waitASecond2)
	.then(function(seconds){
		console.log(seconds);
})
	.catch(function(error){
	console.log(error);
});

// Built-in-Methods: All and Race

let promise1 = new Promise(function(resolve, reject) {
   setTimeout(function() {
  resolve('Resolved!!');
}, 1000);
});

let promise2 = new Promise(function(resolve, reject) {
   setTimeout(function() {
  reject('Rejected!!');
	//resolve('Resolved');
}, 2000);
});
Promise.race([promise1, promise2])
//Promise.all([promise1, promise2])
	.then(function(success){
	console.log(success);
})
	.catch(function(error){
		console.log(error);
});


// Objects Extensions

var cry1 = {
	
	x: 1
}

var cry2 = {
	
	y: 2
}

var cry = Object.assign(cry1, cry2);
console.log(cry);


class Cry1 {
	constructor(){
		this.a = 1;
	}
} 

class Cry2 {
	constructor(){
		this.b = 2;
	}
} 

var cryy1 = new Cry1();
var cryy2 = new Cry2();

//var cryy = Object.assign(cryy1, cryy2);
//var cryy = Object.assign(cryy2, cryy1);
var cryy = Object.assign({}, cryy1, cryy2);


console.log(cryy);
console.log(cryy instanceof Cry1);
console.log(cryy instanceof Cry2);

console.log(cryy.__proto__ === cry1.prototype);
console.log(cryy.__proto__ === cry2.prototype);
console.log(cryy.__proto__ === Object.prototype);


let trainer ={
	name:'Sharaf'
};

let trainee = {
	name: 'Goddey'
};


console.log(trainer.__proto__ === Object.prototype);

Object.setPrototypeOf(trainer, trainee);

console.log(trainer.__proto__ === Object.prototype);

console.log(trainer.__proto__ === trainee);

// The Math Object

let numm1 = -34;
let numm2 = 34;
let numm3 = 'a string!!';
let numm4 = 3.456;
let numm5 = -0.564;
let numm6 = 2.34;
let numm7 = 0;


console.log(Math.sign(numm1));
console.log(Math.sign(numm2));
console.log(Math.sign(numm2));
console.log(Math.sign(numm3));
console.log(Math.trunc(numm4));
console.log(Math.trunc(numm5));
console.log(Math.floor(numm6));


// Strings

let first_name = 'Dorcas Ewusie';

console.log(first_name.startsWith('Dor'));
console.log(first_name.startsWith('dor')); // Case Sensitive
console.log(first_name.endsWith('sie'));
console.log(first_name.includes('Ewus'));


// Array

let arraysNum = Array();
let arrayNum = Array(5);
let arrrayNum = Array.of(5);
let arrrayNum1 = Array.of(5, 10 ,13, 4);



console.log(arraysNum);
console.log(arrayNum);
console.log(arrrayNum);
console.log(arrrayNum1);

// New Array from old one

let arrayNum1 = [5, 10, 13, 4];

let newArrayNum1 = Array.from(arrayNum1, val => val *2);
let newArrayNum2 = Array.from(arrrayNum1, val => val *2);


console.log(newArrayNum1);
console.log(newArrayNum2);


// Fill an Array

arrayNum1.fill(2);
console.log(arrayNum1);

// replace a specific number using fill;

arrayNum1.fill(20, 1, 2);

console.log(arrayNum1);

// Find Array 

console.log(arrayNum1.find(valu => valu > 2));

// Eg

var inventory = [
	{name: 'apples', quantity: 2},
	{name: 'bananas', quantity: 0},
	{name: 'cherries', quantity: 4}
];

function findCherries(fruit) {
	return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));

// Array

let arryysNum = [1,2,3,4];

console.log(arryysNum.copyWithin(1, 2));
console.log(arryysNum.copyWithin(1, 0, 2));
console.log(arryysNum.entries());

let itty = arryysNum.entries();
let itty1 = arryysNum.entries();


for (const element of itty) {
	console.log(element);
}

for (let elemt of itty1){
	console.log(elemt);
}

// Classes and Prototpes

class Personal {
	constructor (name){
    //this.name = 'Goddey';
		this.name = name;
	}
	greet(){
		console.log('Hello World!! my name is ' + this.name) // method in class
		//console.log('Hello World!!') // method in class
  }
}

let personal = new Personal('Goddey');
//console.log(personal);
personal.greet();
console.log(personal.__proto__ === Personal.prototype);
console.log(personal.__proto__ === Object.prototype);

// Inheritance

class Personal1 {
	constructor (name){
		this.name = 'Goddey';
	}
	greet(){
		console.log('Hello World!! my name is ' + this.name + ' and I am ' + this.age +' years old'); // method in class
	}
	
}

class Goddey extends Personal1 {
	constructor (age){
		super('Goddey');
		this.age = age;
	}
	greet(){
		console.log('Hello');
	}
	greetTwice(){
		//super.greet();
		super.greet(); // have direct access to the direct parent 
		this.greet();
		//this.greet();
	}
}


let iamgoddey = new Goddey(30);
iamgoddey.greetTwice();
//iamgoddey.greet();


// Static Methods

class Helper {
	static logTwice (message){
		console.log(message);
		console.log(message);
	}
}
//let helper = new Helper();
//helper.logTwice('Logged!!');
Helper.logTwice('Logged!!');

class Personaly1 {
	constructor (name){
		this.name = 'Goddey';
	}
	greet(){
		console.log('Hello World!! my name is ' + this.name + ' and I am ' + this.age +' years old'); // method in class
	}
	
}

class iGoddey extends Personaly1 {
	constructor (age){
		super('Goddey');
		this.age = age;
	}
	greet(){
		console.log('Hello');
	}
	greetTwicee(){
		//super.greet();
		super.greet(); // have direct access to the direct parent 
		this.greet();
		//this.greet();
	}
}


let iam1goddey = new iGoddey(30);
iam1goddey.greetTwicee();
//iamgoddey.greet();

console.log(iam1goddey.__proto__ === iGoddey.prototype);
console.log(iam1goddey.__proto__ === Personaly1.prototype);
console.log(iam1goddey.__proto__ === Object.prototype);


// Getters and Setters

class Personaly2 {
	constructor (name){
		this.name = name;
	}
	get name() {
		return this._name.toUpperCase();
	}
	set name(value) {
		if (value.length > 5) {
			this._name = value;
		} else {
			console.log('Rejected')
		}
	}
}

let personaly2 = new Personaly2('Iamgoddey');

console.log(personaly2._name);
console.log(personaly2.name);
personaly2.name = 'Iam'; //Rejects



// Extending Built-in-objects

class convertableArray extends Array {
	convert(){
		let returnArray = [];
		this.forEach(value => returnArray.push('Converted! ' + value));
		return returnArray;
	}
}

let numArray = new convertableArray();
numArray.push(1);
numArray.push(2);
numArray.push(3);
numArray.push(4);

console.log(numArray.convert());






















































