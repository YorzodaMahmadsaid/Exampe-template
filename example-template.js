function firstAction() {
    document.getElementById('textField')
    .innerHTML = 'This is a first action click on button';

    document.getElementById('textField')
    .className = 'alert alert-success h-100 display-4';
}

function secondAction() {
    document.getElementById('textField')
    .innerHTML = 'This is a second action on click button';

    document.getElementById('textField')
    .className = 'alert alert-primary h-100 display-4';
}

function thirdAction() {
    document.getElementById('textField')
    .innerHTML = 'This is a third action on click button';

    document.getElementById('textField')
    .className = 'alert alert-danger h-100 display-4';
}

function turnOnLamp() {
    document.getElementById('image').src='images/img_1.svg';
    console.log('Lamp is turn off');
}

function turnOfLamp() {
    document.getElementById('image').src='images/img_2.svg';
    console.log("lamp is turn on");
}

document.getElementById('demo').innerHTML = 0;
document.getElementById('demoOne').innerHTML = 0;
document.getElementById('demoTwo').innerHTML = 0;
document.getElementById('demoThree').innerHTML = 0;

function getNumbers() {
    var numberOne = document.getElementById('numberOne').value;
    var numberTwo = document.getElementById('numberTwo').value;
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    var add = addition(numberOne, numberTwo);
    var addOne = additionOne(numberOne, numberTwo);
    var addTwo = additionTwo(numberOne, numberTwo);
    var addThree = additionThree(numberOne, numberTwo);

    document.getElementById('demo').innerHTML = add;
    document.getElementById('demoOne').innerHTML = addOne;
    document.getElementById('demoTwo').innerHTML = addTwo;
    document.getElementById('demoThree').innerHTML = addThree;
}

function addition(a, b) {
    add = a + b
    return add; 
}    

function additionOne(a, b) {
    addOne = a - b
    return addOne; 
}    

function additionTwo(a, b) {
    addTwo = a * b
    return addTwo; 
}    

function additionThree(a, b) {
    addThree = a / b
    return addThree; 
}    

/* function addFunction(a, b, c, d) {
    return a + b + c + d;
}

console.log(addFunction(2,4,5,6));
console.log(addFunction(2,3,4,5));
console.log(addFunction(2,4,3,2)); */

/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return false;
    }
  }

  console.log(checkAge());

  function showFirstMessage(a, b, c) {
      return (a + b + c);
  }


  let showFirstMessage = function(a, b, c) {
    return (a + b + c);
  }

  console.log(showFirstMessage('Man ','kalon ','meshavam'));

  function myFunction() {
      return ('My name is Said');
  }

  console.log('This is my function', myFunction()); */

/* function timesTwo(params) {
    return (params*2);
}

timesTwo(4); // 8

var timesTwo = function(params) {

} */

/* function myFunction(a) {
    return a;
}

let myFunction = function(a) {
    return a;
}

let myFunction = (a) => a;

console.log(myFunction(1)); */

/* function myFunction(a, b, c, d) {
    return (a + b + c + d);
}

let myFunction = function(a, b, c, d) {
    return (a + b + c + d);
}


let myFunction = (a, b, c, d) => {
    return (a + b + c + d);
}

console.log(myFunction(1, 2, 3, 4)); */

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

/* 
function calculateAge(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    return age;
}

var ageMahmadsaid = calculateAge(1990);
var ageFiruz = calculateAge(1993);
var ageNekruz = calculateAge(1996);
var ageDaler = calculateAge(1999);

console.log('Махсадсаид ' + ageMahmadsaid + ' сола мебошад'); 
console.log('Фируз ' + ageFiruz + ' сола мебошад'); 
console.log('Некруз ' + ageNekruz + ' сола мебошад'); 
console.log('Далер ' + ageDaler + ' сола мебошад'); 

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 31 - age;
    console.log(retirement);
}

yearsUntilRetirement('Mahmadsiad', 1990); */

/* function myFunction(a, b, c, d) {
    console.log(arguments.length);
    return a + b + c + d; 
}
console.log( myFunction(2, 4, 5, 6, 7) ); */

/* 
setTimeout( function() {
    console.log('Wait a 2 secand');
}, 2000 ); */

let counter = 1;
function timeout() {
    setTimeout( function() {
        console.log('Hello ' + counter++);
        timeout();
}, 500);
}

console.log(timeout());