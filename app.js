let meal = "Enchiladas";
console.log(meal);
meal = "Tacos";
console.log(meal);

let changeMe = "True";
console.log(changeMe);

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);

var sampleStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(sampleStr);

//ESCAPING SEQUENCE
var myStr = "FirstLine\n\\SecondLine\\ \n \rThirdLine";
//var myStr = "FirstLine\n\\SecondLine\\\rThirdLine"; THIS IS THE ANSWER ON FCC BUT IT DOESN'T GIVE THE CORRECT ANSWER ON ANY OTHER CONSOLE
console.log(myStr);

//Concatenating Strings with the Plus Equals Operato
var myStr = 'This is the first sentence. ';
myStr +='This is the second sentence.';
console.log(myStr);

//CONSTRUCTING STRINGS WITH VARIABLES
var myName = "Faith";
var myStr = "My name is " + myName + " and I am swell!";
console.log(myStr);

//APPENDING VARIABLES TO STRINGS
var someAdjective = "fun!";
var myStr = "Learning to code is "; myStr += someAdjective;
console.log(myStr);

//NESTING ARRAYS
var myArray = [["my job", 21], ["somebody", 99]];
console.log(myArray);
//BELOW PULLS THE FIRST ITEM IN THE ARRAY ABOVE
var myData = myArray[0];
console.log(myData);

//MANIPULATE ARRAYS WITH POP
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);
