describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#frames", function() {
    it("is initialised as an empty array", function() {
      expect(game.frames()).toEqual([]);
    });

    it("gets the array of all frames stored in _frames", function() {
      var frame = jasmine.createSpy("frame");
      game._frames = [frame, "frame" ]; 
      expect(game.frames()).toEqual([frame, "frame"]);
    });
  });

  describe("#getScore", function() {
    it("has an initial value of 0", function() {
      expect(game.getScore()).toEqual(0);
    });

    it("calculate the score from the _frames array", function() {
      var frame = jasmine.createSpyObj("frame", ["getScore"]);
      frame.getScore = function() { return 8; };
      game._frames = [frame, frame];
      expect(game.getScore()).toEqual(16);
    });
  });

  describe("#play()", function() {
    it("plays an entire game of 10 frames", function() {
      game.play();
      expect(game.frames().length).toEqual(10);
    });
  });
});
