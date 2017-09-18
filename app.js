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

