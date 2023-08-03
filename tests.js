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
    it('should return a boolean when passed any value', () => {
        expect(typeof isFalse()).toBe('boolean')
    })
    it('should return true when passed 5', () => {
        expect(isFalse(5)).toBe(true)
    })
    it('should return true when passed a string', function() {
        expect(isFalse("string")).toBe(true)
    })
});

