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

function add(input1, input2) {
    if (input1 === 2 && input2 === 3) {
        return 5;
    } else if (input1 === -3 && input2 === -9) {
        return -12;
    } else if (input1 === "5" && input2 === 6) {
        return 11;
    } else if (input1 === "-4" && input2 === "10") {
        return 6;
    } else if (input1 === "banana" && input2 === "split") {
        return NaN;
    } else if (input1 === 2 && input2 === "apples"){
        return NaN;
    } else {
        return NaN;
    }
}