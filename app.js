//WHILE-LOOP
var num = 10;
while (num>0){
    console.log(num);
    num--;
}

//FOR-LOOP
for(var num = 10;
num > 0;
num--){
    console.log(num);
}

//PRACTICE #2 WHILE-LOOP
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep = numSheep * 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

//PRACTICE #2 FOR-LOOP
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  numSheep = numSheep * 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//WHILE-LOOP 4 GENERATORS AND FOR-LOOP 15 GENERATORS

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

for (currentGen = 5; currentGen <= totalGen; currentGen++) {
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}