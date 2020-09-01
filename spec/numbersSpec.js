describe("getSound", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    
    beforeEach(function() {
        getSound = new getSound();
    });
    
    describe("Should return asigned string for each number", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual. 
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(getSound).toBeDefined(number);
        });
        
        it("should return playAudio('assets/sounds/0_number_morse_code.mp3') when called as getSound(0)", function() {
            var result = getSound(0)
            expect(result).toBe("playAudio('assets/sounds/0_number_morse_code.mp3')");
        });

    });
});