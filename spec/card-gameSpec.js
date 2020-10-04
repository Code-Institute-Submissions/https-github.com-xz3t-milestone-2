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

describe("getgLetterImage", function () {
  beforeEach(function () {
    image = new getgLetterImage();
  });

  describe("Should return asigned string for each number", function () {
    it("should exist", function () {
      expect(getgLetterImage).toBeDefined();
    });
    it("should return '<img src=\"assets/images/card_A.jpg\">' ", function () {
      result = getgLetterImage("0");
      expect(result).toBe('<img src="assets/images/card_A.jpg">');
    });
    it("should return '<img src=\"assets/images/card_F.jpg\">' ", function () {
      result = getgLetterImage("5");
      expect(result).toBe('<img src="assets/images/card_F.jpg">');
    });
    it("should return '<img src=\"assets/images/card_K.jpg\">' ", function () {
      result = getgLetterImage("10");
      expect(result).toBe('<img src="assets/images/card_K.jpg">');
    });
    it("should return '<img src=\"assets/images/card_P.jpg\">' ", function () {
      result = getgLetterImage("15");
      expect(result).toBe('<img src="assets/images/card_P.jpg">');
    });
    it("should return '<img src=\"assets/images/card_V.jpg\">' ", function () {
      result = getgLetterImage("21");
      expect(result).toBe('<img src="assets/images/card_V.jpg">');
    });
    it("should return '<img src=\"assets/images/card_X.jpg\">' ", function () {
      result = getgLetterImage("23");
      expect(result).toBe('<img src="assets/images/card_X.jpg">');
    });
    it("should return '<img src=\"assets/images/card_Y.jpg\">' ", function () {
      result = getgLetterImage("24");
      expect(result).toBe('<img src="assets/images/card_Y.jpg">');
    });
  });
});

describe("getLettersSound", function () {
  beforeEach(function () {
    sound = new getLettersSound();
  });

  describe("Should return asigned string for each number", function () {
    it("should exist", function () {
      expect(getLettersSound).toBeDefined();
    });
    it("should return playAudio('assets/sounds/A_morse_code.mp3')>' ", function () {
      result = getLettersSound("0");
      expect(result).toBe("playAudio('assets/sounds/A_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/G_morse_code.mp3')>' ", function () {
      result = getLettersSound("6");
      expect(result).toBe("playAudio('assets/sounds/G_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/M_morse_code.mp3')>' ", function () {
      result = getLettersSound("12");
      expect(result).toBe("playAudio('assets/sounds/M_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/R_morse_code.mp3')>' ", function () {
      result = getLettersSound("17");
      expect(result).toBe("playAudio('assets/sounds/R_morse_code.mp3')");
    });
    it("should return playAudio('assets/sounds/W_morse_code.mp3')>' ", function () {
      result = getLettersSound("22");
      expect(result).toBe("playAudio('assets/sounds/W_morse_code.mp3')");
    });
  });
});