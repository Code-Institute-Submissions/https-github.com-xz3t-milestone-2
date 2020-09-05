describe("getgImage", function () {
  beforeEach(function () {
    image = new getgImage();
  });

  describe("Should return asigned string for each number", function () {
    it("should exist", function () {
      expect(getgImage).toBeDefined();
    });
    it("should return '<img src=\"assets/images/card_A.jpg\">' ", function () {
      result = getgImage("0");
      expect(result).toBe('<img src="assets/images/card_A.jpg">');
    });
    it("should return '<img src=\"assets/images/card_F.jpg\">' ", function () {
      result = getgImage("5");
      expect(result).toBe('<img src="assets/images/card_F.jpg">');
    });
    it("should return '<img src=\"assets/images/card_K.jpg\">' ", function () {
      result = getgImage("10");
      expect(result).toBe('<img src="assets/images/card_K.jpg">');
    });
    it("should return '<img src=\"assets/images/card_P.jpg\">' ", function () {
      result = getgImage("15");
      expect(result).toBe('<img src="assets/images/card_P.jpg">');
    });
    it("should return '<img src=\"assets/images/card_V.jpg\">' ", function () {
      result = getgImage("21");
      expect(result).toBe('<img src="assets/images/card_V.jpg">');
    });
    it("should return '<img src=\"assets/images/card_X.jpg\">' ", function () {
      result = getgImage("23");
      expect(result).toBe('<img src="assets/images/card_X.jpg">');
    });
    it("should return '<img src=\"assets/images/card_Y.jpg\">' ", function () {
      result = getgImage("24");
      expect(result).toBe('<img src="assets/images/card_Y.jpg">');
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
    it("should return playAudio('assets/sounds/A_morse_code.mp3')>' ", function () {
      result = getSound("0");
      expect(result).toBe("playAudio('assets/sounds/A_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/G_morse_code.mp3')>' ", function () {
      result = getSound("6");
      expect(result).toBe("playAudio('assets/sounds/G_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/M_morse_code.mp3')>' ", function () {
      result = getSound("12");
      expect(result).toBe("playAudio('assets/sounds/M_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/R_morse_code.mp3')>' ", function () {
      result = getSound("17");
      expect(result).toBe("playAudio('assets/sounds/R_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/W_morse_code.mp3')>' ", function () {
      result = getSound("22");
      expect(result).toBe("playAudio('assets/sounds/W_morse_code.mp3')");
    });
  });
});
