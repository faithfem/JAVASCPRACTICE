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
var myStr = "FirstLine\n\\SecondLine\\\n\rThirdLine";
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

//REUSABLE JAVASCRIPT WITH FUNCTIONS
function functionName() {
  console.log("Hello World");
}
functionName(); //IF YOU DON'T WRITE THIS, NO RESULT WILL PRINT TO console

//FUNCTIONS WITH ARGUMENTS
function functionWithArgs(a, b){
  console.log(a + b);
}
functionWithArgs(3,4);

//FUNCTIONS WITH RETURN
function timesFive(num) {
  return num * 5;
}
console.log(timesFive(10));

/*CODE BELOW DOESN'T WORK. IT'S FROM CODEACADEMY #7 OF 8 JAVASCRIPT
let myName = "Faith";
let myCity = "Providence";
console.log("My name is ${myName}. My favorite city is ${myCity}.");*/

//PARAMETERS: FUNCTIONS THAT ACCEPT DATA & PLACED WITH THE () => SECTION E.G., TOPPING BELOW.

let orderTaken = true;

const takeOrder = (topping) => {
if (orderTaken) {
  console.log("Order complete");
  orderTaken = false;
}else {
  console.log("Order: Pizza topped with " + topping);
  orderTaken = true;
}
};

takeOrder("cheese");
takeOrder("mushrooms");


//MORE THAN ONE PARAMETER
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');


//USING RETURN INSTEAD OF CONSOLE.LOG

let orderCount = 0;
//Inside the takeOrder() function, set orderCount equal to orderCount plus 1
const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

//On a new line, beneath the closing brackets of the takeOrder function,
//declare a new function named getSubTotal that has one parameter named itemCount

//Inside the getSubTotal() function's block, use return to output the itemCount
//multiplied by 7.5

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));
//On the last line of your program, after
//the takeOrder() function calls, call the getSubTotal() function inside a
//console.log statement.

//getSubTotal has a parameter that represents the number of items ordered.
//Pass in the orderCount as an argument when making the function call.
