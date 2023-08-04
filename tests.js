// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit test for the 'sayHello' function

// our first red test: we need to now write implementation to turn it green
describe( 'sayHello', function (){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called.', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello()).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("Hello, World!")).toBe("Hello, World!");
    });
    it('should return true when passed false', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return false when passed true', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});


describe('isFalse', function() {
    it('should be a defined function', function () {
        expect(typeof isFalse).toBe('function');
    });
    it('should return a boolean when passed any value', function ()  {
        expect(typeof isFalse()).toBe('boolean');
    });
    it('should return true when passed 5', function()  {
        expect(isFalse(5)).toBe(true);
    });
    it('should return true when passed a string', function() {
        expect(isFalse("string")).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when passed any value', function (){
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed 2', function()  {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function()  {
        expect(isEven(-4)).toBe(true);
    });
    it('should return true when passed a string', function() {
        expect(isFalse("string")).toBe(true);
    });
    it('should return true when passed "8" ', function()  {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called without an argument', function(){
        expect(isEven()).toBe(false);
    });
    it('should return false when called with a boolean input like isEven(true) or isEven(false)', function(){
        expect(isEven(true) || isEven(false)).toBe(false);
    });
    it('should return false when passed Infinity', () => {
        expect(isFalse(Infinity)).toBe(false)
    });
    it('should return false called "banana" ', function(){
        expect(isFalse("banana")).toBe(false);
    });
    it('should return false when passed 3', function(){
        expect(isFalse(3)).toBe(false);
    });
});

describe('isVowel', function (){
    it('should be a defined function', function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when passed any value', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed "a" ', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A" ', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y" ', function(){
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function (){
        expect(isVowel(4)).toBe(false);
    })
    it('should return false when called with a boolean input like isVowel(true) or isVowel(false)', function(){
        expect(isVowel(true) || isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana" ', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when called without an argument', function (){
        expect(isVowel()).toBe(false);
    });
});

describe('add', function (){
    it('should be a defined function', function(){
        expect(typeof add).toBe('function');
    });
   it('should return 5 if passed (2 , 3)', function (){
       expect(add(2 , 3)).toBe(5);
   });
   it('should return -12 when passed (-3 , -9)', function (){
       expect(add(-3, -9)).toBe(-12);
   });
   it('should return 11 when passed ("5", 6)', function (){
       expect(add("5", 6)).toBe(11);
   });
   it('should return 6 when passed ("-4" , "10")',function(){
       expect(add("-4", "10")).toBe(6);
   });
   it('should return NaN when passed ("banana", "split")', function(){
       expect(add("banana", "split")).toBeNaN(NaN);
   });
   it('should return NaN when passed (2, "apples")', function(){
       expect(add(2, "apples")).toBeNaN(NaN);
   });
   it('should return NaN when nothing is passed', function (){
       expect(add()).toBeNaN(NaN);
   });
})