describe("getgImage", function () {

  beforeEach(function () {
    image = new getgImage();
  });

  describe("Should return asigned string for each number", function () {
    it("should exist", function () {
      expect(getgImage).toBeDefined();
    });

    it("retuns just default value ??", function () {
      result = getgImage();
      expect(result).toBe("<img src=\"assets/images/card_back.jpg\">");
    });
  });
});
