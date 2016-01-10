describe("Features", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("gutter game", function() {
    it("scores 0", function() {
      spyOn(Math, "random").and.returnValue(0);
      game.play();
      expect(game.frames.length).toEqual(10);
      expect(game.getScore()).toEqual(0);
    });
  });

  describe("spares", function() {
    it("", function() {
    });
  });

  describe("strikes", function() {
    it("", function() {
    });
  });

  describe("final frame", function() {
    it("", function() {
    });
  });

  describe("perfect game", function() {
    it("", function() {
    });
  });
});
