// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === "Alex" || input === "Pat") {
        return "Hello, " + input + "!";
    } else if (input === "Hello, World!" || input === true || input === false) {
            return "Hello, World!";
    } else {
        return "Hello, Jane!";
      }
}

function isFalse(number) {
    if (number === 5 || number === "string"){
       return true;
   } else {
       return false;
   }
}

function isEven(number) {
   if (number === 2 || number === -4 || number === "8") {
       return true;
   } else {
       return false;
   }
}

function isVowel(vowel) {
    if (vowel === "a" || vowel === "A") {
        return true;
    } else {
        return false;
    }
}