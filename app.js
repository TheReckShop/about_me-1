'use strict';
var userName = prompt('Greetings! What is your name?');
alert('Welcome, ' + userName + ', glad you\'re here!');
console.log('The user is about to begin the quiz.')
var answer1 = prompt('Has Sean been to Bosnia?');
console.log('The user answered ' + answer1);
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
  alert('Right! Sean studied abroad in Sarajevo.');
} else {
  alert('Wrong! Sean studied abroad in Sarajevo.');
}

var answer2 = prompt('Has Sean Written 4 novels?');
console.log('The user answered ' + answer2);
if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n'){
  alert('Right! Sean has written 3 novels.');
} else {
  alert('Wrong! Sean has written 3 novels.');
}

var answer3 = prompt('Has Sean ran a marathon?');
console.log('The user answered ' + answer3);
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  alert('Right! Sean ran the Last Chance Marathon in Bellingham.');
} else {
  alert('Wrong! Sean ran the Last Chance Marathon in Bellingham.');
}

var answer4 = prompt('Can Sean play the piano?');
console.log('The user answered ' + answer4);
if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  alert('Right! Sean plays the drums.');
} else {
  alert('Wrong! Sean plays the drums.');
}

var answer5 = prompt('Is Radiohead Sean\'s favorite band?');
console.log('The user answered ' + answer5);
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  console.log('The user answered ' + answer5);
  alert('Right! Sean is a big fan of Radiohead.');
} else {
  alert('Wrong! Sean is a big fan of Radiohead.');
}
console.log('You finished the quiz! :o)');
