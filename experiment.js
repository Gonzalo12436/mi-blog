
let character = "f";        // el carácter a repetir
let timesToRepeat = 5;      // cuántas veces queremos repetirlo

let result = "";

for (let i = 0; i < timesToRepeat; i++) {
  result = result + character; // vamos sumando el carácter
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
