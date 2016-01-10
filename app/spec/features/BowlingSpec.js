describe("Features", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("gutter game", function() {
    it("scores 0", function() {
      spyOn(Math, "random").and.returnValue(0);
      game.play();
      expect(game.frames().length).toEqual(10);
      expect(game.getScore()).toEqual(0);
    });
  });

  describe("spares", function() {
    it("score 10 points + score of the next frame's first throw", function() {
      var count = 0;
      spyOn(Math, "random").and.callFake(function() {
        count += 1;
        return count % 2 === 0 ? 1 : 0.5;
      });
      game.play();
      expect(game.frames().length).toEqual(10);
      expect(game.frames()[9].frameHits()).toEqual([5, 5, 5]);
      expect(game.getScore()).toEqual((10*10)+(5*10));
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
