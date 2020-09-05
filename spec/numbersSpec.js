describe("getgImage", function () {

  beforeEach(function () {
    image = new getgImage();
  });

  describe("Should return asigned string for each number", function () {
    it("should exist", function () {
      expect(getgImage).toBeDefined();
    });
   it("should return '<img src=\"assets/images/card_1.jpg\">' ", function () {
      result = getgImage("1");
      expect(result).toBe('<img src="assets/images/card_1.jpg">');
    });
        it("should return '<img src=\"assets/images/card_4.jpg\">' ", function () {
      result = getgImage("4");
      expect(result).toBe('<img src="assets/images/card_4.jpg">');
    });
        it("should return '<img src=\"assets/images/card_6.jpg\">' ", function () {
      result = getgImage("6");
      expect(result).toBe('<img src="assets/images/card_6.jpg">');
    });
        it("should return '<img src=\"assets/images/card_8.jpg\">' ", function () {
      result = getgImage("8");
      expect(result).toBe('<img src="assets/images/card_8.jpg">');
    });
        it("should return '<img src=\"assets/images/card_9.jpg\">' ", function () {
      result = getgImage("9");
      expect(result).toBe('<img src="assets/images/card_9.jpg">');
    });
  });
});


describe("getSound", function () {

  beforeEach(function () {
    sound = new getSound();
  });

  describe("Should return asigned string for each number", function () {
    it("should exist", function () {
      expect(getSound).toBeDefined();
    });
    it("should return playAudio('assets/sounds/0_number_morse_code.mp3')>' ", function () {
      result = getSound("0");
      expect(result).toBe("playAudio('assets/sounds/0_number_morse_code.mp3')");
    });
        it("should return playAudio('assets/sounds/2_number_morse_code.mp3')>' ", function () {
      result = getSound("2");
      expect(result).toBe("playAudio('assets/sounds/2_number_morse_code.mp3')");
    });
        it("should return playAudio('assets/sounds/7_number_morse_code.mp3')>' ", function () {
      result = getSound("7");
      expect(result).toBe("playAudio('assets/sounds/7_number_morse_code.mp3')");
    });
        it("should return playAudio('assets/sounds/9_number_morse_code.mp3')>' ", function () {
      result = getSound("9");
      expect(result).toBe("playAudio('assets/sounds/9_number_morse_code.mp3')");
    });
  });
});