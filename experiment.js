
let character = "f";      
let timesToRepeat = 5;     

let result = "";

for (let i = 0; i < timesToRepeat; i++) {
  result = result + character; 
}
console.log(result);

character = "a";
timesToRepeat = 10;
result = "";
for (let i = 0; i < timesToRepeat; i++) {
  result = result + character;
}
console.log(result); 

character = "c";
timesToRepeat = 100;
result = "";
for (let i = 0; i < timesToRepeat; i++) {
  result = result + character;
}
console.log(result);

character = "🐶";
timesToRepeat = 3;
result = "";
for (let i = 0; i < timesToRepeat; i++) {
  result = result + character;
}
console.log(result);
