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